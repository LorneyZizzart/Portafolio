# AGENTS.md

## Project overview
This is a static portfolio website built with plain HTML, Bootstrap 4, SCSS, and jQuery plugins.

Key characteristics:
- Root-level HTML pages: `index.html`, `about.html`, `portfolio.html`, `contact.html`, `services.html`, `blog-home.html`, `blog-single.html`
- CSS output lives in `css/`
- SCSS source files live in `scss/`
- JavaScript source lives in `js/`
- Vendor libraries are in `css/bootstrap/` and `js/vendor/`
- There is a simple PHP contact handler at `mail.php`

## What an AI agent should know
- There is no visible Node/webpack/npm build configuration in this repository.
- Changes to site styling should usually happen in `scss/main.scss` and `css/main.css`.
- Use `js/main.js` for custom page behavior; preserve the existing vendor include order:
  1. `js/vendor/jquery-2.2.4.min.js`
  2. `js/vendor/bootstrap.min.js`
  3. plugin scripts
  4. `js/main.js`
- Do not modify third-party vendor files unless updating or replacing a library intentionally.
- Keep the site mobile-responsive and consistent with Bootstrap utility classes.

## Recommended workflow for edits
- Update HTML page content in the root `.html` files.
- Update custom styles in `scss/` and then compile to `css/` if a workflow exists.
- Use `css/main.css` for small CSS fixes if SCSS compilation is not available.
- Use `js/main.js` for custom behavior, and avoid editing plugin libraries unless necessary.
- Use `mail.php` only for contact form backend behavior.

## Notes for future automation
- No build or test scripts were detected. If automation is added later, place it at the project root and document the commands here.
- If SCSS is compiled via a tool, the agent may suggest adding a lightweight script or README note.

## Agent behavior
- Prefer minimal, non-invasive changes.
- Preserve existing layout structure and plugin integrations.
- When adding new assets, keep them organized under `css/`, `js/`, or `img/` as appropriate.
