# ID Card Generator (React + Vite)

A small React project that renders employee ID cards using reusable components, props, and list rendering.

## Tech Stack
- React
- Vite
- Tailwind CSS (via `tailwindcss` + `@tailwindcss/vite`)

## Folder Structure

```text
src/
  components/
    IdCard.jsx
  data/
    people.js
  App.jsx
  main.jsx
  index.css
```

## Assignment Requirements Covered
- Vite setup used for project scaffolding.
- Custom folder architecture with a dedicated `components` directory.
- JSX-based UI for ID card design.
- `.map()` used to render multiple cards.
- Props passed from parent (`App`) to child (`IdCard`).
- Unique `key` used for each rendered card.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Suggested Commit Plan (max 8)
1. `chore: scaffold react app using vite`
2. `feat: create project folder architecture`
3. `feat: add id card component`
4. `feat: add employee data and map rendering`
5. `style: apply tailwind classes to id cards`
6. `docs: update readme with setup and deployment steps`

## Deployment
Deploy `dist` output on one of:
- Vercel
- Netlify
- Render
- GitHub Pages

After deployment, submit:
- GitHub repository URL
- Live deployed URL
