# SaaS Gym Front

Arabic/English landing page + admin dashboard for a gym management SaaS, built with:

- **Next.js 16** (App Router, Turbopack, standalone output)
- **Payload CMS 3** with SQLite (`@payloadcms/db-sqlite`)
- **Tailwind CSS 4** + shadcn/ui + Radix UI
- **next-intl** localization (ar RTL default / en)

## Run with Docker (recommended)

### Prerequisites

- Docker with the Compose plugin (`docker compose version`)

### Steps

```bash
# 1. Clone and enter the repo
git clone https://github.com/iMohamedSamir/saas-gym-front.git
cd saas-gym-front

# 2. Configure secrets
cp .env.example .env
# Edit .env and set strong values for PAYLOAD_SECRET, JWT_SECRET,
# ADMIN_EMAIL and ADMIN_PASSWORD before deploying anywhere real.

# 3. Build and start
docker compose up -d --build
```

The app is then available at **http://localhost:3000**:

- Landing page: `/`
- Admin dashboard: `/admin` (custom, JWT login with the admin credentials from `.env`)
- Payload CMS admin: `/admin` routes are proxied through the Next.js app

On first start the container seeds `/app/data/payload.db` (a named Docker
volume) from the bundled copy. Restarts and rebuilds keep your data — the
seed only runs when the database file is missing or empty.

### Updating a deployment

```bash
./deploy.sh
```

This pulls the latest `origin/main`, and rebuilds + restarts the container
only when the commit changed (or the container isn't running).

> **Note:** if your user is not in the `docker` group, prefix docker
> commands with `sudo`, or run `sudo usermod -aG docker $USER` and
> re-login so `deploy.sh` works without sudo.

### Useful commands

```bash
docker compose logs -f          # follow logs
docker compose ps               # container status
docker compose restart          # restart app (data persists)
docker compose down             # stop and remove container (volume stays)
docker compose down -v          # also delete the database volume (destructive)
```

## Local development (without Docker)

```bash
npm ci
npm run dev        # http://localhost:3000
```

The dev server reads `.env` (`DATABASE_URL`, defaults to `file:payload.db`
in the repo root).

Other scripts:

```bash
npm run build      # production build (standalone output)
npm start          # run the standalone production server
npm run lint       # eslint
```

## Environment variables

| Variable          | Used by                                   | Default (dev)                        |
| ----------------- | ----------------------------------------- | ------------------------------------ |
| `DATABASE_URL`    | Payload SQLite adapter                    | `file:payload.db` (dev) / `file:/app/data/payload.db` (compose) |
| `PAYLOAD_SECRET`  | Payload CMS encryption/signing            | insecure fallback — **set in prod**  |
| `JWT_SECRET`      | Admin dashboard session tokens (`jose`)   | insecure fallback — **set in prod**  |
| `ADMIN_EMAIL`     | Admin dashboard login                     | `admin@admin.com`                    |
| `ADMIN_PASSWORD`  | Admin dashboard login                     | `admin123456`                        |

See `.env.example` — copy it to `.env` and change every value before going to production.
