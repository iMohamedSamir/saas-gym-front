#!/bin/sh
# Deploy: pull latest code from origin, rebuild and restart the container
# only when HEAD changed (or the container is not running).
set -e
cd "$(dirname "$0")"

BRANCH="${BRANCH:-main}"
BEFORE=$(git rev-parse HEAD 2>/dev/null || echo "none")

git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

AFTER=$(git rev-parse HEAD)

if [ "$BEFORE" = "$AFTER" ] && [ -n "$(docker compose ps -q 2>/dev/null)" ]; then
  echo "Up to date ($AFTER) - container already running"
  exit 0
fi

echo "Deploying $BEFORE -> $AFTER"
docker compose up -d --build
echo "Deployed $AFTER"
