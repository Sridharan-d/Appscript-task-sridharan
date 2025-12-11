# Appscrip-task-<YourName>

This is a Next.js demo of a Product Listing Page (PLP) implemented for the Appscrip design task.

Quick features
- Server-side fetch of products from `https://fakestoreapi.com/` (SSR)
- Client-side product filtering and responsive grid
- SEO: title, description, Open Graph and JSON-LD schema
- Accessible Filters (keyboard support)

Local development

1. Install dependencies

```powershell
cd appscript-task-sridharan
npm install
```

2. Run the dev server

```powershell
npm run dev
# then open http://localhost:3000
```

Build (production)

```powershell
npm run build
npm start
```

Netlify deployment

1. Create a public GitHub repo named `Appscrip-task-<YourName>` and push this project to it.

2. On Netlify, click "New site from Git" and connect the repo.

3. Configure build settings (Netlify UI may auto-fill these):
- **Build command:** `npm run build`
- **Publish directory:** `.next`

4. Ensure the Netlify Next.js plugin is installed (Netlify will prompt or add it automatically). The project includes a `netlify.toml` to configure the plugin.

Notes & tips
- If Netlify suggests using a different publish directory, follow the plugin instructions — the official `@netlify/plugin-nextjs` handles the correct deployment.
- If you prefer Vercel, connect the repo to Vercel and use default Next.js settings.

What I prepared in this repo
- `app/globals.css` — global styles and responsive layout
- `app/layout.js` — metadata and JSON-LD schema
- `app/page.js` — SSR fetch and server page
- `components/ProductsClient.jsx` — client filtering and product grid
- `components/Filters.jsx` — accessible filters component
- `netlify.toml` — Netlify build config

Next steps I can help with
- Fine-tune CSS to exactly match the Figma design
- Add image optimization or inline critical CSS
- Create the GitHub repo and prepare the repo for you to push
- Walk through the Netlify deploy and fix any build issues
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
