# Ancester

A React-based gaming platform website featuring a landing page, services marketplace, academy, and team showcase. Built with Semantic UI React and internationalization support.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

## Overview

Ancester is a web platform for indie game developers and gamers. The site provides a marketplace for game assets, advisory services, sponsorship opportunities, and an academy for learning game development.

![Ancester Academy](src/Assets/img/AncesterAcademy/AncesterAcademy.png)

## Features

- **Landing Page** — Hero carousel, services overview, and social media links
- **Marketplace** — Browse and filter game assets by category (weapons, scenarios, effects, characters, skins)
- **Services** — Three core offerings:
  - **We Create** — Custom game development
  - **Advise** — Expert consulting for game projects
  - **Sponsor** — Sponsorship opportunities for developers
- **Ancester Academy** — Learning tracks covering design, creation, and business
- **Know Us** — Team profiles and company values (honesty, commitment, passion, resolution, teamwork, integrity)
- **Contact** — Contact form for inquiries
- **Login** — Authentication container
- **Bilingual** — English and Spanish support via i18next
- **Responsive** — Mobile-first design with adaptive navigation

![Services](src/Assets/img/Services/asesoramos.png)
![We Create](src/Assets/img/Services/creamos.png)
![Sponsor](src/Assets/img/Services/patrocinate.png)

## Tech Stack

- **React 18** — UI library
- **React Router DOM 6** — Client-side routing
- **Semantic UI React** — Component library
- **i18next / react-i18next** — Internationalization
- **react-responsive-carousel** — Carousel component
- **Create React App** — Build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser. The page will reload on edits.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm test` | Run tests in watch mode |
| `npm run coverage` | Run tests with coverage report (non-interactive) |
| `npm run build` | Create production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run eject` | Eject from Create React App (one-way) |

## Project Structure

```text
src/
├── App.js                 # Main app with routes
├── Assets/
│   ├── css/               # Stylesheets
│   └── img/               # Images organized by section
│       ├── AncesterAcademy/
│       ├── Home/
│       ├── KnowUs/
│       ├── Marketplace/
│       └── Services/
├── Components/            # Reusable components (Carousel, SearchBox)
├── i18n/                  # Internationalization config
├── Utils/                 # Utility functions
└── Views/
    ├── Academy/           # Ancester Academy pages
    ├── KnowUs/            # Team and values pages
    ├── Services/          # Advise, Sponsor, WeCreate
    ├── Contacto.jsx       # Contact form
    ├── Footer.jsx         # Site footer
    ├── HomeContainer.jsx  # Landing page
    ├── LoginContainer.jsx # Login page
    ├── Marketplace.jsx    # Asset marketplace
    ├── NavContainer.jsx   # Navigation bar
    └── NoMatch.jsx        # 404 page
```

## Testing

Tests are built with **@testing-library/react**, **@testing-library/jest-dom**, and **@testing-library/user-event**. Test files are co-located with their components (e.g., `HomeContainer.test.jsx`).

Run all tests:

```bash
npm test
```

Run all tests with a coverage report (non-interactive):

```bash
npm run coverage
```

Tests cover:
- Component rendering
- Navigation and routing
- Form interactions
- Snapshot validation

## Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This builds the app and publishes the `build/` folder to the `gh-pages` branch.

## License

This project is private and not intended for public distribution.
