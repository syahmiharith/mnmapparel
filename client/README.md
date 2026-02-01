# Client - Frontend Application

This directory contains the frontend application for MNM Apparel.

## Technology Stack

- **Framework**: Next.js 15
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: CSS Modules / Tailwind CSS (to be configured)

## Project Structure

```
client/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Next.js pages and routing
│   ├── styles/         # Global styles and CSS modules
│   ├── utils/          # Utility functions and helpers
│   └── assets/         # Images, icons, and other assets
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
└── .eslintrc.json      # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

### Testing

```bash
npm test
npm run test:watch
```

### Linting

```bash
npm run lint
```

## Development Guidelines

### Component Structure

- Use functional components with hooks
- Follow the single responsibility principle
- Keep components small and focused
- Use TypeScript for type safety

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### Code Style

- Use ESLint and Prettier for consistent formatting
- Follow React best practices
- Write meaningful comments for complex logic

## Environment Variables

Create a `.env.local` file in the client directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=MNM Apparel
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Ensure linting passes
5. Submit a pull request
