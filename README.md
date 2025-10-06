# SportzNow — Free Multi‑Sport Live Scores (Starter)

This is a ready-to-deploy starter (SofaScore-style UI, bet365 colors) using free APIs.

## What you need (free)
1) **GitHub account** (to hold this code)
2) **Vercel account** (free hosting)
3) **API keys**
   - **TheSportsDB** (for Football/Basketball/Tennis) — free key
   - **CricAPI/CricketData** (for Cricket) — free key

## How to deploy (no coding)
1) Download this ZIP and unzip.
2) Open **Vercel** → “New Project” → “Import from Git” (connect your GitHub).
3) Create a new GitHub repo and push this folder there, or upload directly in Vercel using the “Deploy from Git” flow.
4) In Vercel **Environment Variables**, add:
   - `THESPORTSDB_KEY` = your key (e.g., `1234567`)
   - `CRICKET_API_KEY` = your key
5) Click **Deploy**. Wait until it finishes.
6) Open your site URL (Vercel will give you a link).

## Local run (optional)
- Install Node.js 18+
- Run: `npm install` then `npm run dev`
- Open http://localhost:3000

## Notes
- Free APIs can have limits/delays vs full real-time.
- You can add Fixtures/Results/Standings data later by attaching more endpoints.
- Colors are set in `tailwind.config.js` under `brand`.
