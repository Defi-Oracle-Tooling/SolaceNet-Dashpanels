# SolaceNet Dashpanels

## Overview

This repository contains the code for a robust and scalable banking platform with mockup directories, white-label templates, and advanced interactivity. The project uses a mono-repository approach to manage multiple applications and shared resources efficiently.

## Repository Structure

```bash
root/
├── apps/                          # Applications
│   ├── user_dashboard/            # User Dash Panel app
│   ├── employee_panel/            # Employee Panel app
│   ├── admin_panel/               # Admin Panel app
│   └── mockups/                   # Mockups for client testing
│       ├── user_dash_panel/
│       ├── employee_panel/
│       ├── admin_panel/
│       └── assets/
├── packages/                      # Shared libraries and resources
│   ├── components/                # Shared React components
│   ├── services/                  # API integrations (Alchemy, Tatum, Thirdweb)
│   ├── themes/                    # Core templates and submodule skins
│   ├── utils/                     # Helper functions (data parsing, error handling)
│   └── mock_data/                 # Mock data for testing
├── templates/                     # White-label templates
│   ├── default_theme/
│   ├── client_1_theme/
│   └── client_2_theme/
├── scripts/                       # Automation scripts (build, deploy, etc.)
├── .github/                       # CI/CD workflows for GitHub Actions
├── .env                           # Environment variables
└── package.json                   # Mono-repo dependencies
```

## Technology Stack

### Core Tools

- **Package Manager**: pnpm
- **Build Tools**: Vite or Webpack
- **Frontend Framework**: React.js with Next.js
- **Backend Framework**: Node.js with Express or Fastify
- **Testing Frameworks**: Jest, React Testing Library
- **Styling**: TailwindCSS or SCSS

### Mono-Repo Tooling

- **Nx** or **Turborepo**

### Hosting

- **Mockups**: GitHub Pages or Netlify
- **Core Platform**: Azure Static Web Apps or Vercel

## Key Features

### Mockup Implementation

- Each panel (User, Employee, Admin) has its mockup in the `/apps/mockups/` directory.
- Mock data is stored in `/packages/mock_data/` and shared across mockups.
- Add interactivity using pure JavaScript or lightweight frameworks like Alpine.js.

### White-Label Functionality

- Store all CSS, SCSS, and JS files for branding in `/packages/themes/`.
- Provide a default theme and create submodules for client-specific themes.
- Use environment variables or query parameters to load themes dynamically.

### Advanced Interactivity

- Use shared React components in `/packages/components/` for dynamic features.
- Include a mock API server (Node.js/Express) in `/scripts/` for simulating real-time data.
- Add animations using libraries like Framer Motion.

### CI/CD Setup

- Use GitHub Actions to automate linting, testing, building, and deploying.
- Separate workflows for mockups and core apps.

## Automation and Testing

### Automation

- Use scripts in `/scripts/` for installing dependencies, starting mockup servers, building themes, and deploying apps.

### Testing

- Create test cases for panel navigation, transaction workflow, and theming.

## Next Steps

### Detailed Steps for Skinning and Interactivity

1. **Skinning Implementation**:
    - Develop reusable SCSS/CSS files for themes.
    - Define theme variables and use them in mockups and core apps.
    - Add a dropdown in mockups to switch between themes.
2. **Interactive Features**:
    - Create wallet management modals.
    - Build transaction forms with dynamic validation.
    - Simulate transaction workflows using the mock API.
