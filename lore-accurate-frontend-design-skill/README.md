# lore-accurate-frontend-design-skill

Cursor **agent skill** for a card-heavy, materially rich frontend design system. Published as an npm package so you can version and share it like any other dependency.

## Install

```bash
npm install lore-accurate-frontend-design-skill
```

## Use with Cursor

Cursor loads skills from a folder that contains `SKILL.md`. After install, copy the bundled skill into your skills directory:

**Personal (all projects):**

Copy `node_modules/lore-accurate-frontend-design-skill/lore-accurate-frontend-design/` to `~/.cursor/skills/lore-accurate-frontend-design/` (create folders as needed).

**Single project:**

Copy the same folder to `.cursor/skills/lore-accurate-frontend-design/` in your repo.

Restart Cursor or reload the window if the skill does not appear immediately.

## Update the skill in this repo

The source of truth in the monorepo is `.cursor/skills/lore-accurate-frontend-design/`. From this package directory:

```bash
npm run sync
```

`prepublishOnly` runs `sync` automatically before `npm publish`.

## License

MIT
