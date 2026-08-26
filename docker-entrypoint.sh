#!/bin/sh
# Seed the DB into the data volume on first run
DB_DIR="${DB_DIR:-/app/data}"
mkdir -p "$DB_DIR"
if [ ! -s "$DB_DIR/payload.db" ]; then
  cp /app/payload.db.seed "$DB_DIR/payload.db"
  echo "Seeded $DB_DIR/payload.db from bundled copy"
fi
exec "$@"
