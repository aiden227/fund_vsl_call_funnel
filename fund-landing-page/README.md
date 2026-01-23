# Sequoia Strategies - Fund Landing Page

A modern, SEC-compliant landing page for private equity and real estate funds built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Modular Architecture**: Well-organized component structure for maintainability
- **Responsive Design**: Mobile-first approach with elegant UI
- **SEO-Optimized**: Clean semantic HTML structure
- **Performance**: Fast loading with Vite's build optimization

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FAQItem.tsx
│   │   ├── Section.tsx
│   │   └── Typography.tsx
│   └── sections/        # Page sections
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       └── ...
├── constants/
│   ├── theme.ts         # Brand colors and fonts
│   └── content.ts       # Page content and data
└── App.tsx              # Main application component
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

Or simply push to GitHub and import the project in the Vercel dashboard.

### Deploy to Other Platforms

This is a standard Vite React app and can be deployed to any static hosting platform:

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **Cloudflare Pages**: Connect your Git repository
- **AWS S3 + CloudFront**: Upload the `dist` folder to S3

## Customization

### Brand Colors

Edit `src/constants/theme.ts` to update brand colors:

```typescript
export const BrandColors = {
  eden: '#11523c',
  edenDark: '#0d4330',
  elephant: '#112e4a',
  elephantDark: '#0c2338',
  // ...
};
```

### Content

Update page content in `src/constants/content.ts`:

```typescript
export const faqData = [...];
export const socialProofData = [...];
// etc.
```

### Components

All UI components are modular and can be customized independently in `src/components/ui/` and `src/components/sections/`.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Best Practices Implemented

- ✅ Component modularity and reusability
- ✅ TypeScript for type safety
- ✅ Separation of concerns (UI, content, styling)
- ✅ Performance optimization
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Clean, maintainable code structure
