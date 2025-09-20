# Copilot Instructions for CountryApp

## Project Overview
- **Framework:** Angular 19 (see `angular.json`, `package.json`)
- **Purpose:** CountryApp is an Angular SPA for searching and displaying country data, organized by country, region, and capital.
- **Structure:**
  - `src/app/country/` contains feature modules, pages, components, and services for country-related functionality.
  - `src/app/shared/` contains shared components and pages (e.g., footer, home page).
  - Routing is modularized (see `country.routes.ts`, `app.routes.ts`).

## Key Patterns & Conventions
- **Component Organization:**
  - Pages are under `pages/` (e.g., `by-capital-page`, `country-page`).
  - Reusable UI elements are under `components/` (e.g., `top-menu`, `country-list`).
  - Layouts are in `layouts/` (e.g., `country-layout`).
- **Services:**
  - API calls and data logic are in `services/country.service.ts`.
  - Interfaces for API responses are in `interfaces/rest-country.interface.ts`.
- **Styling:**
  - Uses Tailwind CSS (see `tailwind.config.js`, `styles.css`).

## Developer Workflows
- **Start Dev Server:** `ng serve` (or `npm start`)
- **Run Unit Tests:** `ng test` (or `npm test`)
- **Build for Production:** `ng build`
- **Generate Components:** `ng generate component <name>`

## Integration & Data Flow
- **Country Data:** Fetched via `country.service.ts` using REST endpoints, then passed to components via Angular's input/output bindings.
- **Routing:** Uses Angular Router with feature-based route modules.
- **State Management:** No global state library; relies on Angular's component tree and service injection.

## Project-Specific Notes
- **File Naming:** Follows Angular CLI conventions (kebab-case, `.component.ts`, `.service.ts`, etc.).
- **Testing:** Unit tests colocated with components/services (`*.spec.ts`).
- **No e2e by default:** End-to-end tests are not set up; add your own framework if needed.

## Examples
- To add a new country search page:
  1. Generate a new page in `src/app/country/pages/`.
  2. Add route in `country.routes.ts`.
  3. Use `country.service.ts` for data access.

## References
- See `README.md` for CLI commands and more details.
- Review `src/app/country/` for feature structure and patterns.
- For shared UI, see `src/app/shared/components/`.

---
For more, see [Angular CLI docs](https://angular.dev/tools/cli).
