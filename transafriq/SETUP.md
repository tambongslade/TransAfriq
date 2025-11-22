# React + TypeScript + Vite + Tailwind CSS 4.1 Setup

This project was set up with the latest versions of all technologies (as of November 2025).

## Versions

- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Vite**: 7.2.4
- **Tailwind CSS**: 4.1.17
- **@tailwindcss/vite**: 4.1.17

## Setup Steps Performed

1. **Created Vite Project**
   ```bash
   npm create vite@latest transafriq -- --template react-ts
   cd transafriq
   npm install
   ```

2. **Installed Tailwind CSS v4**
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

3. **Configured Vite** (vite.config.ts)
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```

4. **Updated CSS** (src/index.css)
   ```css
   @import "tailwindcss";
   ```

## Key Differences from Tailwind CSS v3

Tailwind CSS v4 uses a simplified setup:
- No `tailwind.config.js` file needed for basic usage
- No PostCSS configuration required
- Uses the `@tailwindcss/vite` plugin instead of PostCSS
- Single `@import "tailwindcss"` directive in CSS

## Running the Project

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## Features Tested

- Gradient backgrounds (`bg-gradient-to-br`)
- Flexbox utilities (`flex`, `items-center`, `justify-center`)
- Spacing utilities (`p-4`, `mb-6`, `gap-2`)
- Typography utilities (`text-4xl`, `font-bold`)
- Color utilities (`bg-blue-500`, `text-gray-800`)
- Border radius (`rounded-2xl`, `rounded-full`)
- Shadow utilities (`shadow-2xl`, `shadow-md`)
- Transform and transitions (`hover:scale-105`, `transition-all`)
- Responsive design utilities

All Tailwind CSS 4.1 features are working correctly!
