# Personal Site (React + Express)

Simple personal portfolio site for Daniel Milholland.

- Frontend: React + Vite + Tailwind CSS
- Backend: Express (serves built SPA from `client/dist`)
- Routing: React Router with server-side SPA fallback
- Extras: Dark mode toggle, printable resume view, sitemap/robots, route tests

## Project Structure

- `server.ts`: Express server entry point
- `client/`: React application
- `client/public/sitemap.xml`: Search engine sitemap
- `client/public/robots.txt`: Crawler rules
- `test/routes.test.ts`: Route and static-file tests

## Prerequisites

- Node.js 20+
- npm 9+

## Install

Install dependencies for both root and client:

```bash
npm ci
npm ci --prefix client
```

If you prefer a single command:

```bash
npm run install-all
```

## Run

Run both Express and Vite in development:

```bash
npm run dev
```

Run Express server only:

```bash
npm start
```

Default server URL:

- `http://localhost:3001`

Vite dev server URL (when using `npm run dev`):

- `http://localhost:5173`

## Build

Build the React client for production:

```bash
npm run build
```

Build output:

- `client/dist/`

## Docker

Build and run the app with Compose:

```bash
docker compose up --build
```

The app is exposed on port `3001` by default. To change the host port, set `APP_PORT` before starting Compose:

```bash
APP_PORT=8080 docker compose up --build
```

That maps the host port you choose to the container's `3001` port.

## Test Routes

Builds the client, then validates SPA routes and SEO files:

```bash
npm run test:routes
```

Covers:

- `/`
- `/resume`
- `/privacy`
- `/robots.txt`
- `/sitemap.xml`

## Security Audit

Run dependency audits:

```bash
npm audit
npm audit --prefix client
```

## CI

GitHub Actions workflow:

- `.github/workflows/ci.yml`

It runs install, build, route tests, and dependency audits on push/pull request.
