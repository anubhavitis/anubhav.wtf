"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import { Scene, SceneInner, Label, TxPill, Callout } from "./primitives";
import ChainDiagram from "./ChainDiagram";

const FATE_COLORS = {
  green: {
    bg: "bg-emerald-500/5 dark:bg-emerald-400/5",
    border: "border-l-emerald-500 dark:border-l-emerald-400",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  amber: {
    bg: "bg-amber-500/5 dark:bg-amber-400/5",
    border: "border-l-amber-500 dark:border-l-amber-400",
    text: "text-amber-600 dark:text-amber-400",
  },
  red: {
    bg: "bg-red-500/5 dark:bg-red-400/5",
    border: "border-l-red-500 dark:border-l-red-400",
    text: "text-red-600 dark:text-red-400",
  },
};

function FateCard({
  color,
  title,
  expanded,
  children,
}: {
  color: "green" | "amber" | "red";
  title: string;
  expanded: boolean;
  children: React.ReactNode;
}) {
  const c = FATE_COLORS[color];

  return (
    <div
      className={`${c.bg} border-l-[3px] ${c.border} overflow-hidden my-1 ${
        expanded
          ? "p-5 animate-[unfold_500ms_ease_150ms_both]"
          : "max-h-14 opacity-60 py-2 px-4"
      }`}
    >
      <p className={`text-sm font-bold ${c.text}`}>{title}</p>
      {expanded && (
        <div className="mt-3 animate-[fadeIn_400ms_ease_300ms_both]">
          {children}
        </div>
      )}
    </div>
  );
}

function FateCards({ activeScene }: { activeScene: number }) {
  return (
    <>
      <style>{`
        @keyframes unfold {
          from { max-height: 3.5rem; opacity: 0.6; padding: 0.5rem 1rem; }
          to { max-height: 600px; opacity: 1; padding: 1.25rem; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <FateCard
        color="green"
        title="Fate 1 — re-included (most likely)"
        expanded={activeScene === 10}
      >
        <p className="text-[clamp(20px,3vw,28px)] leading-[1.4] text-foreground font-bold">
          The winning block{" "}
          <span className="text-emerald-500 dark:text-emerald-400">also</span>{" "}
          has your transaction.
        </p>
        <p className="text-muted-foreground mt-3">
          The validator who built Block 5B saw your transaction in the mempool
          too and included it. Nothing changes for you. Your 1 ETH still
          arrives.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <TxPill variant="safe">your 1 ETH &#10003;</TxPill>
        </div>
      </FateCard>

      <FateCard
        color="amber"
        title="Fate 2 — returned to mempool"
        expanded={activeScene === 11}
      >
        <p className="text-[clamp(20px,3vw,28px)] leading-[1.4] text-foreground font-bold">
          Your transaction goes back to the{" "}
          <span className="text-amber-500 dark:text-amber-400">
            waiting room
          </span>
          .
        </p>
        <p className="text-muted-foreground mt-3">
          Block 5B didn&apos;t include your transaction. So it gets pushed back
          into the mempool, waiting to be picked up by the next block. Annoying,
          but not dangerous.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <TxPill variant="returned">your 1 ETH (pending again)</TxPill>
        </div>
      </FateCard>

      <FateCard
        color="red"
        title="Fate 3 — dropped forever"
        expanded={activeScene === 12}
      >
        <p className="text-[clamp(20px,3vw,28px)] leading-[1.4] text-foreground font-bold">
          A <span className="text-red-500 dark:text-red-400">conflicting</span>{" "}
          transaction made yours invalid.
        </p>
        <p className="text-muted-foreground mt-3">
          Block 5B contains a <em>different</em> transaction from the same
          sender with the same nonce. Since two transactions can&apos;t use the
          same nonce, yours becomes permanently invalid.
        </p>
        <p className="text-muted-foreground mt-2">
          This is the actual{" "}
          <strong className="text-red-500 dark:text-red-400">
            double-spend
          </strong>{" "}
          vector.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <TxPill variant="gone">your 1 ETH (invalid)</TxPill>
        </div>
      </FateCard>
    </>
  );
}

function ValidatorGrid() {
  const dots = Array.from({ length: 32 }, (_, i) => (i < 12 ? "a" : "b"));

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 my-4">
        {dots.map((vote, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded transition-all duration-400 ${
              vote === "a"
                ? "bg-amber-500/30 border border-amber-500 dark:bg-amber-400/30 dark:border-amber-400"
                : "bg-emerald-500/30 border border-emerald-500 dark:bg-emerald-400/30 dark:border-emerald-400"
            }`}
            style={{
              animation: `fadeUp 0.3s ease both`,
              animationDelay: `${i * 40}ms`,
            }}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-3 text-[13px] text-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm bg-amber-500/30 border border-amber-500 dark:bg-amber-400/30 dark:border-amber-400" />
          Voted for 5A
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm bg-emerald-500/30 border border-emerald-500 dark:bg-emerald-400/30 dark:border-emerald-400" />
          Voted for 5B
        </span>
      </div>
      <div className="flex h-7 rounded-lg overflow-hidden mt-4">
        <div
          className="flex items-center justify-center text-xs font-bold bg-amber-500/25 text-amber-500 dark:text-amber-400 transition-all duration-1000"
          style={{ width: "38%" }}
        >
          5A — 38%
        </div>
        <div
          className="flex items-center justify-center text-xs font-bold bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 transition-all duration-1000"
          style={{ width: "62%" }}
        >
          5B — 62%
        </div>
      </div>
    </div>
  );
}

export default function WhatIsBlockchainReorg({
  date,
  tags,
}: {
  date: Date;
  tags: string[];
}) {
  const [currentScene, setCurrentScene] = useState(1);
  const [scrollHintVisible, setScrollHintVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalScenes = 20;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (el.scrollTop > 200) setScrollHintVisible(false);
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const onVisibleCallbacks = useMemo(
    () =>
      Array.from({ length: totalScenes }, (_, i) => () => {
        setCurrentScene(i + 1);
        if (i + 1 > 2) setScrollHintVisible(false);
      }),
    [],
  );

  return (
    <div
      ref={scrollRef}
      className="w-screen relative left-1/2 -translate-x-1/2 min-h-screen snap-y snap-mandatory overflow-y-auto h-screen"
    >
      {/* Fixed UI */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 text-[13px] text-muted-foreground transition-opacity duration-500 pointer-events-none z-10 ${
          scrollHintVisible ? "opacity-60" : "opacity-0"
        }`}
      >
        scroll to continue
      </div>
      <div className="fixed top-6 left-6 md:left-auto md:right-6 font-mono text-xs text-muted-foreground z-10">
        {currentScene} / {totalScenes}
      </div>

      {/* Two-column layout: text + sticky diagram */}
      <div className="flex flex-col md:flex-row">
        {/* Mobile: sticky diagram on top */}
        <div className="block md:hidden sticky top-0 z-20 bg-background/80 backdrop-blur-sm overflow-hidden">
          <div className="h-[40vh]">
            <ChainDiagram currentScene={currentScene} />
          </div>
        </div>

        {/* Left: scrolling text */}
        <div className="w-full md:w-1/2">
          <Scene
            index={1}
            onVisible={onVisibleCallbacks[0]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>a visual explainer</Label>
              <h1 className="text-[clamp(28px,6vw,72px)] font-bold leading-[1.1] tracking-tight mb-6 text-foreground">
                What is a{" "}
                <span className="text-amber-500 dark:text-amber-400">
                  blockchain reorg
                </span>
                ?
              </h1>
              <p className="text-xl text-muted-foreground">
                And why does the chain sometimes <em>change its mind</em>?
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-6 text-xs text-muted-foreground">
                <span>
                  {date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>·</span>
                {tags.map((tag) => (
                  <span key={tag} className="bg-card px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </SceneInner>
          </Scene>
          <Scene
            index={2}
            onVisible={onVisibleCallbacks[1]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>first, the basics</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                A blockchain is just blocks, linked together.
              </h2>
              <p className="text-muted-foreground mb-4">
                Each block contains a bunch of transactions. Each block points
                to the one before it. That&apos;s what makes it a <em>chain</em>
                .
              </p>
              <p className="text-muted-foreground">
                Simple enough. Block 1 points to Block 2. Block 2 points to
                Block 3. Everyone agrees on the order.
              </p>
            </SceneInner>
          </Scene>

          <Scene
            index={3}
            onVisible={onVisibleCallbacks[2]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>your transaction</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                You send{" "}
                <span className="text-blue-500 dark:text-blue-400">1 ETH</span>{" "}
                to a friend.
              </h2>
              <p className="text-muted-foreground mb-4">
                Your transaction doesn&apos;t go directly into a block. It goes
                into a waiting room called the{" "}
                <strong className="text-foreground">mempool</strong>.
              </p>
              <Callout>
                <Label>mempool (the waiting room)</Label>
                <div className="flex flex-wrap gap-2 p-4 bg-card rounded-xl min-h-[50px]">
                  <TxPill variant="in-block">your 1 ETH</TxPill>
                  <TxPill variant="in-block">swap USDC</TxPill>
                  <TxPill variant="in-block">mint NFT</TxPill>
                  <TxPill variant="in-block">approve DAI</TxPill>
                  <TxPill variant="in-block">bridge 0.5 ETH</TxPill>
                </div>
              </Callout>
              <p className="text-muted-foreground">
                A validator picks up transactions from this pool and packs them
                into the next block.
              </p>
            </SceneInner>
          </Scene>

          <Scene
            index={4}
            onVisible={onVisibleCallbacks[3]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>your transaction gets included</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                Your 1 ETH lands in{" "}
                <span className="text-blue-500 dark:text-blue-400">
                  Block 5
                </span>
                .
              </h2>
              <p className="text-muted-foreground mb-4">
                The validator proposes Block 5 with your transaction inside.
              </p>
              <p className="text-muted-foreground mb-4">
                Your wallet shows the transaction as &quot;confirmed.&quot; You
                tell your friend the money is sent.
              </p>
              <p className="text-foreground font-medium">
                But is it really final?
              </p>
            </SceneInner>
          </Scene>

          <Scene
            index={5}
            onVisible={onVisibleCallbacks[4]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner className="text-center">
              <span className="text-5xl mb-4 block">&#9888;&#65039;</span>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                What if two validators propose a block{" "}
                <span className="text-red-500 dark:text-red-400">
                  at the same time
                </span>
                ?
              </h2>
              <p className="text-muted-foreground max-w-[480px] mx-auto">
                The blockchain is a global network. Thousands of computers.
                Different continents. Different internet speeds.
              </p>
              <p className="text-muted-foreground max-w-[480px] mx-auto mt-4">
                Sometimes, two valid blocks show up for the same slot.
              </p>
            </SceneInner>
          </Scene>

          <Scene
            index={6}
            onVisible={onVisibleCallbacks[5]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>a fork appears</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                Two blocks. Same position.{" "}
                <span className="text-red-500 dark:text-red-400">
                  The chain splits.
                </span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Both blocks are valid. But they contain <em>different</em>{" "}
                transactions. Your 1 ETH is in Block 5A. A different transaction
                is in Block 5B.
              </p>
              <p className="text-muted-foreground">
                Now the network has a decision to make:{" "}
                <strong className="text-foreground">
                  which chain is the real one?
                </strong>
              </p>
            </SceneInner>
          </Scene>

          <Scene
            index={7}
            onVisible={onVisibleCallbacks[6]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>the vote</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                Validators{" "}
                <span className="text-purple-500 dark:text-purple-400">
                  vote
                </span>{" "}
                on which block they saw first.
              </h2>
              <p className="text-muted-foreground mb-4">
                Each small square is a validator. They &quot;attest&quot; to
                whichever block reached them first. This is not a deliberate
                choice — it&apos;s just network geography.
              </p>
              <div className="my-10">
                <ValidatorGrid />
              </div>
              <p className="text-muted-foreground">
                Block 5B got more votes. The network decides:{" "}
                <strong className="text-emerald-500 dark:text-emerald-400">
                  Chain B wins.
                </strong>
              </p>
            </SceneInner>
          </Scene>

          <Scene
            index={8}
            onVisible={onVisibleCallbacks[7]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner className="text-center">
              <span className="text-5xl mb-4 block">&#128165;</span>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                This is a{" "}
                <span className="text-amber-500 dark:text-amber-400">
                  reorg
                </span>
                .
              </h2>
              <p className="text-muted-foreground max-w-[480px] mx-auto">
                Block 5A gets thrown away. The chain &quot;reorganizes&quot;
                around Block 5B instead.
              </p>
              <p className="text-muted-foreground max-w-[480px] mx-auto mt-4">
                Your node rewinds its state, discards Block 5A, and accepts
                Block 5B as the truth.
              </p>
            </SceneInner>
          </Scene>

          <Scene
            index={9}
            onVisible={onVisibleCallbacks[8]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>the important question</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                What happens to{" "}
                <span className="text-amber-500 dark:text-amber-400">
                  your 1 ETH
                </span>
                ?
              </h2>
              <p className="text-muted-foreground mb-4">
                Your transaction was in Block 5A, which just got orphaned. It
                now has one of{" "}
                <strong className="text-foreground">
                  three possible fates
                </strong>
                :
              </p>
              <FateCards activeScene={9} />
            </SceneInner>
          </Scene>

          <Scene
            index={10}
            onVisible={onVisibleCallbacks[9]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <FateCards activeScene={10} />
            </SceneInner>
          </Scene>

          <Scene
            index={11}
            onVisible={onVisibleCallbacks[10]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <FateCards activeScene={11} />
            </SceneInner>
          </Scene>

          <Scene
            index={12}
            onVisible={onVisibleCallbacks[11]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <FateCards activeScene={12} />
            </SceneInner>
          </Scene>

          <Scene
            index={13}
            onVisible={onVisibleCallbacks[12]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner className="text-center">
              <Label>so why does this happen?</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                Three reasons a reorg occurs.
              </h2>
            </SceneInner>
          </Scene>

          <Scene
            index={14}
            onVisible={onVisibleCallbacks[13]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Callout>
                <div className="text-[32px] mb-2">&#127760;</div>
                <h2 className="text-2xl font-bold text-foreground">
                  1. The block arrived{" "}
                  <span className="text-amber-500 dark:text-amber-400">
                    late
                  </span>
                  .
                </h2>
                <p className="text-muted-foreground mt-3">
                  A validator in Tokyo proposes a block. By the time it reaches
                  validators in New York, they&apos;ve already voted for the
                  previous block as the chain head.
                </p>
                <p className="text-foreground font-medium mt-3">
                  This is the most common cause. Pure physics.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  ~0.5 times per day on Ethereum.
                </p>
              </Callout>
            </SceneInner>
          </Scene>

          <Scene
            index={15}
            onVisible={onVisibleCallbacks[14]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Callout>
                <div className="text-[32px] mb-2">
                  &#128104;&#8205;&#128104;&#8205;&#128102;
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  2. A validator signed{" "}
                  <span className="text-red-500 dark:text-red-400">
                    two blocks
                  </span>
                  .
                </h2>
                <p className="text-muted-foreground mt-3">
                  Whether by bug or by malice, a validator proposes two
                  different blocks for the same slot. Half the network sees one,
                  half sees the other.
                </p>
                <p className="text-muted-foreground mt-3">
                  The one with more votes wins. The cheating validator gets{" "}
                  <strong className="text-red-500 dark:text-red-400">
                    slashed
                  </strong>{" "}
                  — their staked ETH is burned as punishment.
                </p>
              </Callout>
            </SceneInner>
          </Scene>

          <Scene
            index={16}
            onVisible={onVisibleCallbacks[15]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Callout>
                <div className="text-[32px] mb-2">&#128176;</div>
                <h2 className="text-2xl font-bold text-foreground">
                  3. Someone wants to{" "}
                  <span className="text-purple-500 dark:text-purple-400">
                    steal MEV
                  </span>
                  .
                </h2>
                <p className="text-muted-foreground mt-3">
                  A proposer sees a juicy arbitrage trade in the latest block.
                  They build a <em>competing</em> block that front-runs that
                  trade to capture the profit.
                </p>
                <p className="text-muted-foreground mt-3">
                  This requires colluding with the next proposer — expensive and
                  risky, but the payoff can be millions.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  This is what{" "}
                  <a
                    href="https://ethereum.org/roadmap/pbs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PBS (Proposer-Builder Separation)
                  </a>{" "}
                  is designed to prevent.
                </p>
              </Callout>
            </SceneInner>
          </Scene>

          <Scene
            index={17}
            onVisible={onVisibleCallbacks[16]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>the safety net</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                After{" "}
                <span className="text-emerald-500 dark:text-emerald-400">
                  ~13 minutes
                </span>
                , a block becomes{" "}
                <span className="text-emerald-500 dark:text-emerald-400">
                  final
                </span>
                .
              </h2>
              <p className="text-muted-foreground mb-4">
                Ethereum&apos;s{" "}
                <a
                  href="https://eth2book.info/latest/part2/consensus/casper_ffg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Casper FFG
                </a>{" "}
                finalizes blocks every 2 epochs (~64 slots). Once finalized, a
                block{" "}
                <strong className="text-foreground">cannot be reorged</strong> —
                reversing it would require 1/3 of all staked ETH to be slashed.
              </p>
              <p className="text-muted-foreground mb-4">
                This is why the JSON-RPC API has three block tags:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <code className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-sm font-mono">
                    finalized
                  </code>{" "}
                  — irreversible. No reorg possible.
                </p>
                <p className="text-muted-foreground">
                  <code className="bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded text-sm font-mono">
                    safe
                  </code>{" "}
                  — very unlikely to be reorged.
                </p>
                <p className="text-muted-foreground">
                  <code className="bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded text-sm font-mono">
                    latest
                  </code>{" "}
                  — newest block. Could still be reorged.
                </p>
              </div>
            </SceneInner>
          </Scene>

          <Scene
            index={18}
            onVisible={onVisibleCallbacks[17]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>to sum up</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-5 text-foreground">
                A reorg is the chain{" "}
                <span className="text-amber-500 dark:text-amber-400">
                  changing its mind
                </span>
                .
              </h2>
              <Callout>
                <p className="text-foreground mb-3">
                  <strong className="text-amber-500 dark:text-amber-400">
                    &#9679;
                  </strong>
                  &nbsp; Two valid blocks compete for the same position.
                </p>
                <p className="text-foreground mb-3">
                  <strong className="text-amber-500 dark:text-amber-400">
                    &#9679;
                  </strong>
                  &nbsp; Validators vote. The heavier chain wins.
                </p>
                <p className="text-foreground mb-3">
                  <strong className="text-amber-500 dark:text-amber-400">
                    &#9679;
                  </strong>
                  &nbsp; The losing block is discarded. Its transactions
                  scatter.
                </p>
                <p className="text-foreground mb-3">
                  <strong className="text-amber-500 dark:text-amber-400">
                    &#9679;
                  </strong>
                  &nbsp; Most transactions get re-included. Some return to the
                  mempool. A few die.
                </p>
                <p className="text-foreground">
                  <strong className="text-emerald-500 dark:text-emerald-400">
                    &#9679;
                  </strong>
                  &nbsp; After ~13 minutes, finality makes reorgs impossible.
                </p>
              </Callout>
              <p className="mt-6 text-center text-muted-foreground text-sm">
                On Ethereum post-Merge, 1-slot reorgs happen about once every
                two days.
                <br />
                Deeper reorgs are essentially unheard of.
              </p>
            </SceneInner>
          </Scene>
          <Scene
            index={19}
            onVisible={onVisibleCallbacks[18]}
            scrollRoot={scrollRef}
            compact
            snap
          >
            <SceneInner>
              <Label>in the real world</Label>
              <h2 className="text-[clamp(20px,4vw,44px)] font-bold leading-[1.2] mb-6 text-foreground">
                Reorgs happen{" "}
                <span className="text-amber-500 dark:text-amber-400">
                  every day
                </span>
                .
              </h2>

              <p className="text-muted-foreground mb-4">
                Over <strong className="text-foreground">222,883</strong> forked
                blocks have been recorded on Ethereum. Most are single-slot
                depth-1 reorgs caused by network latency — not attacks.
              </p>
              <p className="text-muted-foreground">
                No deep reorgs have occurred since the merge to proof-of-stake.
              </p>
              <p className="mt-4">
                <a
                  href="https://etherscan.io/blocks_forked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  View live reorg data on Etherscan &rarr;
                </a>
              </p>
            </SceneInner>
          </Scene>
        </div>

        {/* Right: sticky diagram (desktop only) */}
        <div className="hidden md:block md:w-1/2">
          <div className="sticky top-[10vh] h-[80vh]">
            <ChainDiagram currentScene={currentScene} />
          </div>
        </div>
      </div>

      {/* Scene 20: Footer — full width */}
      <Scene
        index={20}
        onVisible={onVisibleCallbacks[19]}
        scrollRoot={scrollRef}
        snap
      >
        <SceneInner className="text-center">
          <div className="w-12 h-0.5 bg-border mx-auto mb-8" />
          <p className="text-muted-foreground text-sm">
            a visual explainer on blockchain reorgs
          </p>
          <p className="text-muted-foreground text-[13px] mt-2">
            built for <a href="/">anubhav.wtf</a>
          </p>
        </SceneInner>
      </Scene>
    </div>
  );
}
