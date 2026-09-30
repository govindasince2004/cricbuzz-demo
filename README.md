# Cricbuzz Demo

A front-end clone of the Cricbuzz homepage — React + Vite + Tailwind CSS v4.

## Start here

1. Open the **`frontend/`** folder. That is where the app lives.
2. Run these commands from inside it:

```bash
cd frontend
npm install     # first time only
npm run dev     # start the dev server
```

3. Open http://localhost:5173

> The repo root has no `package.json` on purpose. Running npm there will fail.
> Everything npm-related happens inside `frontend/`.

## Commands (run inside `frontend/`)

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Troubleshooting

**Page is blank / unstyled and the terminal shows no error.**
You're running the dev server from the wrong folder. Vite prints
`ready` but serves a 404 because there's no `index.html` there.
Make sure you are in the folder that contains `index.html`, `package.json`
and `vite.config.ts` — that is `frontend/`, not the repo root.

**`npm run dev` crashes on startup.**
Vite 8 needs Node `^20.19.0 || >=22.12.0`. Check with `node -v`.

## Python scraper (optional)

`main.py` in the repo root is a standalone scraper that dumps Cricbuzz
markup into `cricbuzz_analysis.json`. It is **not** part of the app.

```bash
pip install -r requirements.txt
python main.py
```

## Live demo

https://cricbuzz-demo-3qvbvuzo4-govindasince2004-6895s-projects.vercel.app
