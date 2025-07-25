---
date: "2025-06-16"
title: "Peeksy v1.2"
description: "Peeksy is an opensource macos tool that automatically renames your screenshots using open-ai vision."
tags: "tech, peeksy, open-source, AI"
---

Peeksy is macos tool that automatically renames screenshots and images using OpenAI's GPT-4 Vision API. The tool analyzes image content and generates descriptive, meaningful filenames following a consistent naming convention.

[View Demo](https://x.com/anubhavitis/status/1922303569639702976)

## Features

- Automatic image analysis using GPT-4 Vision API
- Intelligent context recognition (screenshots, album covers, artwork, posters, UI elements)
- Consistent filename formatting (lowercase, hyphen-separated)
- Real-time file monitoring and automatic renaming
- Configurable naming rules through prompt template

## Requirements

- OpenAI API key with access to GPT-4 Vision API

Note: Peeksy will prompt you to enter OpenApi key them during first run. The values will be automatically saved for future use.

## Installation

```bash
brew tap anubhavitis/peeksy

brew install peeksy

peeksy start
```

### Examples

```bash
# Start the Peeksy daemon
peeksy start

# Check if the daemon is running and get its PID
peeksy status

# Stop the running daemon
peeksy stop

# Restart the daemon (useful after configuration changes)
peeksy restart

# View your current configuration settings
peeksy current-config

# View the contents of your prompt template file
peeksy view-prompt-file

# Update your OpenAI API key
peeksy update-api-key "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Update the path to your prompt template file
peeksy update-prompt-file-path "/path/to/your/custom-prompt.txt"

# Run the daemon directly (usually not needed, use 'start' instead)
peeksy daemon
```

Note: The daemon must be running for Peeksy to monitor and rename your screenshots. Use `peeksy status` to verify the daemon is running.

## How to Use

Once you've completed the installation steps above, Peeksy will automatically monitor your screenshots directory. Here's what happens:

1. **Start the Service**

   ```bash
   peeksy start
   ```

2. **Take Screenshots**

   - Use your system's screenshot shortcut (⌘⇧3 or ⌘⇧4 on macOS)

3. **Watch the Magic**

   - Peeksy will detect new screenshots
   - Analyze the content using GPT-4 Vision
   - Automatically rename them with descriptive names
   - Original files are preserved with the new names

4. **Customize (Optional)**

   ```bash
   # View your current prompt template
   peeksy view-prompt-file

   # Update the prompt template
   peeksy update-prompt-file-path "path/to/your/custom-prompt.txt"
   ```

That's it! Peeksy will continue running in the background, automatically renaming your screenshots as you take them.

## Commands

Peeksy provides several commands to manage the daemon and configuration:

### Daemon Management

- `start` - Start the Peeksy daemon
- `stop` - Stop the running Peeksy daemon
- `restart` - Restart the Peeksy daemon
- `status` - Check if the Peeksy daemon is running and get its PID

### Configuration Management

- `current-config` - Display the current configuration in JSON format
- `view-prompt-file` - Display the contents of the current prompt file
- `update-api-key <value>` - Update the OpenAI API key
- `update-prompt-file-path <value>` - Update the path to the prompt template file

## Building in your machine

1. Clone the repository:

   ```bash
   git clone https://github.com/anubhavitis/peeksy.git
   cd peeksy
   ```

2. Build the project:

   ```bash
   cargo build --release
   ```

3. Install the binary:

   ```bash
   sudo cp target/release/peeksy /usr/local/bin/
   ```

4. Start the daemon:

   ```bash
   peeksy start
   ```

5. Verify the installation:

   ```bash
   # Check if the daemon is running
   peeksy status

   # View your current configuration
   peeksy current-config
   ```

Note: Make sure you have Rust installed on your system. If not, install it from [rustup.rs](https://rustup.rs/).

# Support & Queries

For any questions, issues, or feature requests, please reach out to:

- [Email](mailto:ss.lfsgd@gmail.com)
- GitHub Issues: [Create an issue](https://github.com/anubhavitis/peeksy/issues)

Feel free to:

- Report bugs
- Suggest new features
- Ask for help with configuration
- Share your experience with Peeksy

# Special Thanks

A heartfelt thank you to:

[navedux](https://naved.xyz) for creating the beautiful Peeksy logo and identity
