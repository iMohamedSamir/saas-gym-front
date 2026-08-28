#!/bin/sh
# Deploy: pull latest code from origin, rebuild and restart the container
# only when HEAD changed (or the container is not running).
#
# Auth: prompts for a GitHub Personal Access Token (hidden input) and uses
# it as the HTTPS password for `git fetch`. The token is passed via a
# one-off URL and is never written to .git/config or the remote.
# For non-interactive deploys, export GITHUB_TOKEN instead.
set -e
cd "$(dirname "$0")"

BRANCH="${BRANCH:-main}"
REPO_USER="${REPO_USER:-iMohamedSamir}"
BEFORE=$(git rev-parse HEAD 2>/dev/null || echo "none")

# ------------------------------------------------------------------
# Get the GitHub token: $GITHUB_TOKEN, or prompt (input hidden).
# ------------------------------------------------------------------
if [ -n "$GITHUB_TOKEN" ]; then
  TOKEN="$GITHUB_TOKEN"
else
  if ! [ -t 0 ]; then
    echo "Error: no TTY to prompt for a GitHub token." >&2
    echo "Run this script from a terminal, or export GITHUB_TOKEN." >&2
    exit 1
  fi
  printf "GitHub token: "
  stty -echo 2>/dev/null || true
  read -r TOKEN
  stty echo 2>/dev/null || true
  echo ""
  if [ -z "$TOKEN" ]; then
    echo "Error: empty token." >&2
    exit 1
  fi
fi

# ------------------------------------------------------------------
# Build an authenticated fetch URL from the origin remote (https only).
# The token is used as the password; the token never touches .git/config.
# ------------------------------------------------------------------
ORIGIN_URL=$(git remote get-url origin 2>/dev/null || echo "")
case "$ORIGIN_URL" in
  https://*)
    HOST_PATH=${ORIGIN_URL#https://}
    HOST_PATH=${HOST_PATH#*@} # strip any existing userinfo
    FETCH_URL="https://${REPO_USER}:${TOKEN}@${HOST_PATH}"
    ;;
  "")
    echo "Error: no 'origin' remote configured." >&2
    exit 1
    ;;
  *)
    # SSH or other scheme: fetch normally (token not applicable).
    FETCH_URL="origin"
    ;;
esac

git fetch "$FETCH_URL" "+refs/heads/${BRANCH}:refs/remotes/origin/${BRANCH}"

# Drop the token from memory as soon as we are done with it.
unset TOKEN FETCH_URL

git reset --hard "origin/$BRANCH"

AFTER=$(git rev-parse HEAD)

if [ "$BEFORE" = "$AFTER" ] && [ -n "$(docker compose ps -q 2>/dev/null)" ]; then
  echo "Up to date ($AFTER) - container already running"
  exit 0
fi

echo "Deploying $BEFORE -> $AFTER"
docker compose up -d --build
echo "Deployed $AFTER"
