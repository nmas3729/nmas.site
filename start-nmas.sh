#!/usr/bin/env bash
# start-nmas.sh – Run this script to start the NMAS dev server
# Usage: bash /home/mzoxolob/WebProjects/nmas.site-main/start-nmas.sh

set -e
cd /home/mzoxolob/WebProjects/nmas.site-main

echo "=== NMAS Innovations – Dev Server Starter ==="

# Load nvm if available
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  source "$NVM_DIR/nvm.sh"
  echo "✓ nvm loaded"
fi

# Also try common manual paths
for BIN in /usr/local/bin /usr/bin ~/.local/bin; do
  if [ -f "$BIN/node" ]; then
    export PATH="$BIN:$PATH"
    echo "✓ node found at $BIN/node"
    break
  fi
done

echo "Node: $(node --version 2>/dev/null || echo 'not found')"
echo "npm:  $(npm --version 2>/dev/null || echo 'not found')"

# Install framer-motion if missing
if ! grep -q '"framer-motion"' package.json 2>/dev/null; then
  echo "Installing framer-motion..."
  pnpm add framer-motion 2>/dev/null || npm install framer-motion
fi

# Start dev server
echo ""
echo "Starting dev server → http://localhost:3000"
pnpm dev 2>/dev/null || npm run dev
