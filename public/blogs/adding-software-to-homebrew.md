---
date: "2025-06-20"
title: "Adding Software To Homebrew"
description: "A comprehensive guide on how to add your software to Homebrew for easy installation"
tags: "tech,tutorial"
---

when I had wrote the initial poc script of [Peeksy](https://github.com/anubhavitis/peeksy), I received good feedback from twitter and reddit. Therefore, I decided to make it easily installable via homebrew.

To learn about writing a brew installable, I created a test project and I was following the [docs](https://docs.brew.sh/Adding-Software-to-Homebrew) for adding software to homebrew. It's a brief document that explains how formulas and casks are written and what the acceptable criteria are. However, I was somewhat confused while going through it. Therefore, here are the notes of how I added my test project to brew.

test project repo for reference: [homebrew-mini-test](https://github.com/anubhavitis/homebrew-mini-test)

# Terminology

Unlike common technical terminology, Homebrew's terminology is very similar to terms used in actual breweries. Some important terms that we'll be using in this article:

- **Cask**: A package definition used for installation of closed-source or GUI only applications.
- **Formulae**: A package definition used as installation instructions for a codebase or binary file. Written primarily in Ruby, but supports Node and Python as well.
- **Core**: A default repository maintained by Homebrew that contains the main collection of formulae that are widely used.
- **Tap**: A extended third party repository that includes additional formulae and casks which are not part of Core.

For more homebrew's terminology, read [here](https://docs.brew.sh/Formula-Cookbook#homebrew-terminology)

In this tutorial, we'll be creating a formulae.

# Initial setup

First, create a dummy program that you want to release on homebrew as test. In my case, I created a simple CLI script to generate character tree. This is something we learned in programming 101.

Remember to use prefix `homebrew-` for whatever project name you choose. This is standard naming convention for adding software to brew.

Once you have written your test script, release its executable binary on GitHub. Here is [creating a release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) doc.
Note the link to tar ball of binary and it's sha.

# Creating a Formulae

Before creating a Formula, you need to tap into[Homebrew/core](https://github.com/Homebrew/homebrew-core). Generally, it's a default formula repository that comes with Homebrew installation. No harm in updating it.

```zsh
HOMEBREW_NO_INSTALL_FROM_API=1
brew tap --force homebrew/core
```

FYI, You don't need to tap Homebrew/core everytime you create a package. Let's create our Formula now

```sh
brew create <tar-ball-url>
```

Use the tar-ball-url from your github release.
This will return by opening a ruby script in your default editor. That's your project's formulae. Note the sha in the script, it should be same as your github release sha.

# Customizing Formulae

There are four things you must consider:

### Dependency

If your test project requires any dependencies during installation, mention them here specifically. This ensures that the system meets all requirements before installation.

for e.g.

```ruby
depends_on macos: ">= :big_sur"
depends_on cask: "macfuse"
```

Read [this](https://docs.brew.sh/Cask-Cookbook#stanza-depends_on) for more information. In my project, I used a simple binary, so I didn't require any dependency.

### Giving it a executable name

What should be the alias for your service post-installation? That's what you decide here.

```ruby
  def install
    ohai "Installing to #{bin}"
    bin.install "homebrew-mini-test" => "ptree"
  end
```

`Ohai` is just for logging while installing. I have used the name `ptree `. You can choose any name you like.

### Caveats

This is any instruction, welcome message, etc. that you want to display in the terminal post-installation.

```ruby
def caveats
    <<~EOS
    Alas, My test program is installed !!!
    EOS
end
```

enclose you statements under `<<~EOS` and `EOS`

### Test

Write any test command that runs post-installation to ensure successful installation.

```ruby
  test do
  system bin/"ptree", "--help" # Basic command check
  end
```

I have written a command based on my project. Feel free to write any other test commands here.

# Release your formulae

Create a directory called ⁠`Formulae` at the root of your project.
Finally, push your project to GitHub.

Congrats 🎉, your formula is published.

# Tap and install

Pick a test macOS device. You can use yours too.

### Tap

The formula released is on your GitHub. Therefore, tap into that formula first.

```zsh
brew tap anubhavitis/mini-test
```

Notice how I am tapping into mini-test rather than homebrew-mini-test. This is because the ⁠`brew tap` command automatically adds the ⁠`homebrew-` prefix.

For your project, use ⁠`brew tap <username>/<project-name>`

### Install

The formula should be tapped on your device. Lets go ahead and install it.

```zsh
brew install mini-test
```

And your service will be installed. Notice that installation should emit caveats you added in the installation script.

# After Thoughts

- In this tutorial, I didn't need to handle any dependency issues since I used binary installation. We can also build our service, but we will need to identify the exact dependencies.
- The formula we created above doesn't meet the [Acceptable Formulae](https://docs.brew.sh/Acceptable-Formulae) criteria, which is why we are using our own repository for tapping. Alternatively, we can [open a pull request](https://docs.brew.sh/How-To-Open-a-Homebrew-Pull-Request) to homebrew/core and eliminate the `brew tap anubhavitis/mini-test` step.
- If the name of the repository doesn't start with `⁠homebrew-`, then we'll have to provide the full URL with the `⁠brew create` command.This didn't seem right to me, so I followed the naming convention.

Hope you didn't run into any errors while following this doc. Let me know if there is something I missed or there is any correction required in the tutorial.

Have a nice day!
