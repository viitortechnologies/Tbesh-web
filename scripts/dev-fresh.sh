#!/usr/bin/env bash
cd "$(dirname "$0")/.."

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
  nvm use 20 2>/dev/null || nvm use default 2>/dev/null || true
fi

NODE_MAJOR="$(node -p "parseInt(process.versions.node.split('.')[0], 10)" 2>/dev/null || echo 0)"
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "ERROR: Node $(node -v) is too old. Run: nvm use 20"
  exit 1
fi

echo "Using Node $(node -v)"

# Stop all Next.js dev processes (multiple terminals = corrupted .next / 611.js errors)
pkill -f "next dev" 2>/dev/null || true
pkill -f "next-server" 2>/dev/null || true
if lsof -ti :3000 >/dev/null 2>&1; then
  lsof -ti :3000 | xargs kill -9 2>/dev/null || true
fi
for _ in 1 2 3 4 5; do
  if ! lsof -ti :3000 >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

# Force-remove corrupted .next (fixes missing 611.js / Internal Server Error)
if [ -d .next ]; then
  chmod -R u+w .next 2>/dev/null || true
  rm -rf .next 2>/dev/null || true
  if [ -d .next ]; then
    sleep 1
    chmod -R u+w .next 2>/dev/null || true
    rm -rf .next
  fi
fi
rm -rf node_modules/.cache .next/cache/images 2>/dev/null || true

echo ""
echo "Starting Tbesh at http://127.0.0.1:3000"
echo "If styles look wrong, hard-refresh: Cmd+Shift+R"
echo ""

exec npx next dev -H 127.0.0.1 -p 3000
