---
date: "2025-11-18"
title: "What Happens When You Send 1 USDC on Ethereum?"
description: "A deep dive into the complete transaction lifecycle of sending USDC on Ethereum, from building transactions to understanding ERC-20 contracts"
tags: "web3,ethereum,usdc,erc20"
---

I have been in crypto space for about 4y now, and have sent and received plenty of transaction, yet when I was writing [What happens when you send 1ETH?](/blogs/what-happens-when-you-send-1-ETH), I learned that there are lot of gaps in my understanding. So I decided to deep dive into a whole transaction cycle.

Todo that, I am going to reengineer what happens when you send 1 USDC on ethereum network. You ready?

## Creating a transaction request

### USDC contract

USDC is an ERC-20 token, not a native token. Therefore, we cannot transfer USDC directly, we have to use [USDC contract](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) (created and maintained by [Circle](https://www.circle.com/)) to transfer USDC from my address to receiver's address.

---

This USDC contract provides all actions of an ERC-20 token contract. Lets look at an example of a simple read action `name()`: returns the name of the contract.

#### USDC::name()

```zsh
curl -X POST https://mainnet.gateway.tenderly.co \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [
      {
        "to": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "data": "0x06fdde03"
      },
      "latest"
    ],
    "id": 1
  }'
```

here, in params,

- to: is address of the contract we are communicating with.
  USDC contract address is `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`
- "data": is the function selector that you want to run.
  `keccak256("name()") = 0x06fdde03... (and more, but only first 4 bytes are used)`

> Note: I am using public RPC url https://mainnet.gateway.tenderly.co, if its not working for you, then you can get current active public RPC from https://chainlist.org/?search=ETH

The response you should receive from the above call is:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000855534420436f696e000000000000000000000000000000000000000000000000"
}
```

Here value of result is ABI-encoded 96 Bytes hex value. **Ethereum ABI (Application Binary Interface)** requires all primitive values (like `address`, `uint256`, etc.) to occupy exactly **32 bytes** in the encoded call data. It decodes to
0x - <32 Byte offset> - <32 Byte length> - <32 Byte Data>

In our case:

- 32 Byte Offset: `0000...0020`: which evaluates to 32.
- 32 Byte length: `0000...0008` : which means length is 8
- 32 Byte Data: `55534420436f696e0000...0000`

> Use these convertors for quick verification - hex-to-text: https://www.rapidtables.com/convert/number/hex-to-ascii.html - hex-to-number: https://www.rapidtables.com/convert/number/hex-to-decimal.html

We can ignore the 32 offset value, since it is equal to next 32 length of string. Therefore, the data we are looking for starts from the 0th index of 32 Byte Data

Since the length is 8, we only need to look at first 8Bytes of the Data: `55534420436f696e` : which translates to `USD Coin`

See, its that simple :)

---

This was an example of read action, but sending 1USDC requires write action. Whenever we do any **write operation** on chain, we need to build transaction and we need to pay fees to facilitate this transaction.

Our simple request to Ethereum is , "Hi, please ask USDC contract to transfer 1 unit of USDC from my account to <> account. Thanks.". Well thanking isn't required, but doesn't hurt either.

for our case, address that I'll be sending 1USDC to: `0xbd24531edabf3c20cadca13e7f80177f1d96571e`

### Lets build our transaction

The contract action we will use is: `USDC::transfer(address, uint256)`

**Lets create ABI encoded hex for our message to USDC contract.**
As we saw earlier

1. function selector = `keccak256("transfer(address,uint256)")` = `0xa9059cbb`

2. receiver's address: `0xbd24531edabf3c20cadca13e7f80177f1d96571e`
   address encoding(32 Bytes format) = `000000000000000000000000bd24531edabf3c20cadca13e7f80177f1d96571e`
3. amount : 1USDC
   1 USDC = 1000000 units (in contract terms).
   hence, amount(32 Byte format): `0x00000000000000000000000000000000000000000000000000000000000f4240`

Therefore, ABI encoded hex data `<selector><address><amount>` = `0xa9059cbb000000000000000000000000bd24531edabf3c20cadca13e7f80177f1d96571e00000000000000000000000000000000000000000000000000000000000f4240`

This is the message that Ethereum will pass to USDC contract.
`

**Lets create a Transaction with Hex message**

1. Lets start our message with chain where the txn is intended, and type of txn we are building. Currently all eth txn follow [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) standards. So lets add it to our message.

   ```json
   {
     "chainId": "0x1", // Eth mainnet chain ID is 1
     "type": "0x2" // type =2 for EIP-1559
   }
   ```

2. Every ETH transaction has a field specifying how much native eth you are paying. Since we are paying in USDC, lets keep this field 0.

   ```json
   {
     "chainId": "0x1",
     "type": "0x2",
     "value": "0x0" // 0 in hex
   }
   ```

3. We need to add nonce. This is required so that a transaction is only processed once on the chain.
   Get the transaction count of my account, using method `eth_getTransactionCount`

   ```zsh
   	curl https://eth.llamarpc.com\
   	  -X POST \
   	  -H "Content-Type: application/json" \
   	  --data '{"method":"eth_getTransactionCount","params":["0xE1b92902d47c00155fFb159155354F49f60Ba87d", "latest"],"id":1,"jsonrpc":"2.0"}'
   ```

   It responds with something

   ```json
   {
     "id": 1,
     "jsonrpc": "2.0",
     "result": "0x28"
   }
   ```

   result `0x28` evaluates to 40. That means, none from 0 to 39 are used.
   So, lets add it to our message

   ```json
   {
     "chainId": "0x1",
     "type": "0x2",
     "value": "0x0",
     "nonce": "0x29"
   }
   ```

4. Let's add info about receiver contract, and the hex data we want to pass to the contract

   ```json
   {
     "chainId": "0x1",
     "type": "0x2",
     "value": "0x0",
     "nonce": "0x29",
     "to": "0xA0b86991C6218B36C1d19D4A2E9Eb0cE3606eB48", // USDC contract
     "data": "`0xa9059cbb000000000000000000000000bd24531edabf3c20cadca13e7f80177f1d96571e00000000000000000000000000000000000000000000000000000000000f4240`"
   }
   ```

5. Let's add gas data to facilitate our transaction. We'll use [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) fee structure
   We need to specify:

   - **gas**: max gas a node should burn to validate my transaction
   - **maxFeePerGas**: threshold price per unit of gas
   - **maxPriorityFeePerGas**: max extra fee I am willing to pay for nodes to priortize my transaction.

   This gas is paid in ETH(or WEI, which is equal to 10^18 WEI). Generally, node operators program to pick the highest paying transaction first. Therefore, higher gas fee you pay, hence faster your transaction gets picked and processed.

   Picking optimum gas is itself a sorcery task, eth provides a method `eth_feeHistory` to query what fees is associated with other recent transactions. it also provides a method `eth_estimateGas` to understand how much gas units your transaction can burn. Wallets generally use off-chain apis to get more sophisticated fee that may process your transaction fast.

   I am not much curious about this so I'll skip it for now, but you can feed your curiosity by read [this](https://www.blocknative.com/blog/eip-1559-fees). Here is the fees that I have added

   ```json
   {
     "chainId": "0x1",
     "type": "0x2",
     "value": "0x0",
     "nonce": "0x01",
     "to": "0xA0b86991C6218B36C1d19D4A2E9Eb0cE3606eB48", // USDC contract
     "data": "`0xa9059cbb000000000000000000000000bd24531edabf3c20cadca13e7f80177f1d96571e00000000000000000000000000000000000000000000000000000000000f4240`",
     "maxPriorityFeePerGas": "0x8477359400",
     "maxFeePerGas": "0x8254b952",
     "gas": "0x5208"
   }
   ```

6. To make a transaction more efficient, we include all contracts and storage slots our transaction will interact with for reduced gas costs. This is quite advanced use case and not very important for our transaction. So we keep the list empty
   ```json
   {
     "chainId": "0x1",
     "type": "0x2",
     "value": "0x0",
     "nonce": "0x01",
     "to": "0xA0b86991C6218B36C1d19D4A2E9Eb0cE3606eB48", // USDC contract
     "data": "`0xa9059cbb000000000000000000000000bd24531edabf3c20cadca13e7f80177f1d96571e00000000000000000000000000000000000000000000000000000000000f4240`",
     "maxPriorityFeePerGas": "0x8477359400",
     "maxFeePerGas": "0x8254b952",
     "gas": "0x5208",
     "accessList": [] // empty
   }
   ```

Or transaction is ready!

**Lets sign our transaction**

In order for node to know what is my account address, and only I am sending this transaction request for my account, I have to sign the transaction.

This signing occurs using ECDSA algorithm, where the transaction we have build so far is signed using my private key. The maths here is little complicated, but quite easy to understand.

Signing transaction is like putting a authenticity stamp to the transaction, which is unique to my account and the transaction data, and can only be generated by my private key. This ensures no one can tamper the information, because if they did, they won't be able to generate a new stamp since they don't have my private key (🤞), or if they use old stamp then it won't match with the tampered transaction data.

Post signature, our transaction looks something like this:

```json
{
  "type": "0x2",
  "chainId": "0x1",
  "nonce": "0x01",
  "maxPriorityFeePerGas": "0x8477359400",
  "maxFeePerGas": "0x8254b952",
  "gas": "0x5208",
  "to": "0xA0b86991C6218B36C1d19D4A2E9Eb0cE3606eB48",
  "value": "0x0",
  "data": "0",
  "accessList": [],
  "v": 1, // signature data
  "r": "", // signature data
  "s": "" // signature data
}
```

Our transaction message is signed now.

**Send our transaction to Ethereum**

Again, hex encode this transaction message(we have already gone through this process so I presume you know this by know) and send this to any Ethereum network to process. Here is how the request looks like.

```zsh
curl 'https://mainnet.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8' \
  -H 'accept: application/json' \

  --data-raw '{
  "id":8962792331219256,
  "jsonrpc":"2.0",
  "method":"eth_sendRawTransaction",
  "params":[
  "0x02f8af01298477359400848254b95282520894a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4880b844a9059cbb000000000000000000000000e1b92902d47c00155ffb159155354f49f60ba87d00000000000000000000000000000000000000000000000000000000000f4240c080a0beddac55f929e4250b8e92f99cf50b574b42abe3b8f894c40c9c64e040f6a1caa06b6000caf6e2796eb32ac556235b2ab5547070de209b1ee6ca1cdd2c80e0af92"
  ]
  }'
```

And I have send a transaction to ethereum, which responds me back with a unique transaction hash

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x90db0a902f085041e1dcec2be95925bbe9e4cf868537651682d647373c50bfb9"
}
```

I can reference this transaction at `https://etherscan.io/tx/<txn-hash>`
which in my case is [here](https://etherscan.io/tx/0x90db0a902f085041e1dcec2be95925bbe9e4cf868537651682d647373c50bfb9)

### BUT

This seemed like a lot, right?
But we never have to go through all this, since the wallet software (Metamask here) does all the job for you. Therefore, we just see a simple UI in readable english that gives us all information. Then we click on **Confirm** and generate a unique signature based on this message.

![Metamask USDC Transfer Confirmation](/images/metamask-usdc-transfer-confirmation.png)

### Oh hey, what happens now? 👀

to answer that question, we have to go to lands of truth and the only truth. We go to reading code. You can skip, or skim through this. But if you've come this far, I wonder how will you sleep without going little deeper.

`What happens when you send a transaction on ethereum?` .... releasing soon
