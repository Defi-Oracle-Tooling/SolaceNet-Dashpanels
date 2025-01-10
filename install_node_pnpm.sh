#!/bin/bash

# Exit on any error
set -e

# Function to print messages
echo_message() {
  echo "[INFO] $1"
}

# Install NVM
echo_message "Installing NVM..."
if ! command -v nvm &> /dev/null; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  # Load NVM into the current shell session
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
else
  echo_message "NVM is already installed."
fi

# Install the latest LTS version of Node.js using NVM
echo_message "Installing the latest LTS version of Node.js..."
nvm install --lts
nvm use --lts
nvm alias default lts/*

# Verify Node.js and npm installation
echo_message "Node.js and npm versions:"
node -v
npm -v

# Install Corepack
echo_message "Installing Corepack..."
npm install -g corepack

# Enable Corepack
echo_message "Enabling Corepack..."
corepack enable

# Install the latest version of pnpm
echo_message "Installing the latest version of pnpm..."
corepack prepare pnpm@latest --activate

# Verify pnpm installation
echo_message "pnpm version:"
pnpm --version

# Completion message
echo_message "Installation completed successfully."
