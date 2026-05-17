# MatchWise AI Frontend

This frontend is a React + Vite application for uploading CVs, viewing AI-extracted summaries, and matching resumes to job descriptions.

## Features

- Login and registration flow
- Protected routes for authenticated users
- CV upload page with PDF, DOCX, and text support
- Job matching page with AI-driven scoring and advice
- Responsive UI built with Tailwind CSS

## Run locally

Install dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in a browser at the URL printed by Vite.

## Available scripts

- `npm run dev` - start Vite development server
- `npm run build` - build production assets
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## CI/CD

This project is included in the repository-level GitHub Actions workflow at `.github/workflows/ci.yml`.
The workflow installs dependencies, lints the frontend, and creates a production build.

## Notes

- The frontend calls backend APIs through `frontend/src/api/axios.js`.
- It stores a temporary `cvId` in local storage after a successful CV upload so job matching can reference the uploaded resume.
- Protected pages are enforced by `frontend/src/routes/ProtectedRoute.jsx`.
