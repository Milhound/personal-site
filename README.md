# milhound.com

Personal site for Daniel Milholland: plain HTML and CSS with no build step,
no dependencies, and no server code. Caddy serves the files directly.

## Layout

- `site/index.html`, `site/resume.html`, `site/privacy.html`, `site/404.html`: the pages
- `site/css/site.css`: all styles
- `site/js/site.js`: the only script (dark-mode toggle and the resume's print button)
- `site/image/`, `site/robots.txt`, `site/sitemap.xml`: static assets
- `deploy.sh`: copies `site/` to `/var/www/milhound.com`

## Editing

Edit the HTML in `site/` directly. The header and `<head>` block are repeated
in each page, so change them in all four files.

Preview locally with any static file server, for example:

```bash
cd site && python3 -m http.server 8080
```

(Clean URLs like `/resume` need Caddy; locally, open `/resume.html`.)

## Deploying

```bash
./deploy.sh
```

Caddy's `www.milhound.com` block serves `/var/www/milhound.com`, maps `/resume`
to `resume.html`, and serves `404.html` for missing pages.

## History

Until November 2026 this was a React + Express app built with Bun and run in a
Docker container. It was converted to static files to remove the dependencies
and their recurring security alerts. The old version is in git history.
