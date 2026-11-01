# EcoTrack – Smart Waste Management

Landing page and registration flow for EcoTrack, a platform where companies book waste-collection subscriptions and collectors apply for collection jobs.

## Features

- Landing page: hero, join form, features and subscription packages
- Two registration flows: **User** (company representative) and **Collector**
- Separate dashboards for User, Collector and Admin (in progress)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [lucide-react](https://lucide.dev/) icons

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/USERNAME/REPO.git
cd REPO

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                 # Routes (landing, register, login, dashboards)
│   ├── register/
│   ├── login/
│   ├── user/            # complete-profile, dashboard
│   ├── collector/       # complete-profile, dashboard
│   └── admin/           # dashboard
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── landing/         # Hero, JoinForm, Features, HowItWorks, Packages
│   └── ui/              # Button, Input, Select, SectionTitle, FeatureCard
├── data/                # Static content (features, steps, packages)
├── lib/                 # Helpers
└── types/               # Shared TypeScript types
public/images/           # Images used in the landing page
```

## User flows

1. **User:** register → complete profile (package, frequency, map location) → dashboard
2. **Collector:** register → complete profile (photo, ID, face verification) → wait for admin review → dashboard
3. **Admin:** reviews collector applications and service requests

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint`  | Run ESLint               |

## Status

In development: landing page sections are being built one by one.
