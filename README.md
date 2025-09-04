# Zen Sync

A modern, collaborative issue tracking application built with React, TypeScript, and LiveStore for local-first data synchronization.

## Table of Contents

- [Features](#features)
- [Packages and Dependencies](#packages-and-dependencies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Environment and Security](#environment-and-security)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Changelog](#changelog)
- [License](#license)

## Features

- **Local-First Architecture**: Real-time data synchronization with LiveStore
- **Modern React UI**: Built with React 19, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for desktop and mobile devices
- **Issue Management**: Create, edit, and organize issues with priorities and statuses
- **Advanced Filtering**: Filter issues by status, priority, and custom queries
- **Rich Text Editing**: Markdown support with TipTap editor
- **Keyboard Shortcuts**: Efficient navigation and actions
- **Dark/Light Theme**: Automatic theme switching
- **Real-time Collaboration**: Multi-user synchronization capabilities

## Packages and Dependencies

### Frontend Framework

- **React 19.1.1**: Modern UI framework with concurrent features
- **TypeScript 5.9.2**: Type-safe JavaScript for better developer experience
- **Vite 7.1.4**: Fast build tool and development server

### State Management & Data

- **LiveStore 0.3.1**: Local-first data synchronization and state management
- **Fractional Indexing 3.2.0**: Efficient list ordering and positioning

### UI Components & Styling

- **Tailwind CSS 4.1.13**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI primitives
  - Dialog, Dropdown Menu, Switch, Tooltip, Popover, Select
- **Lucide React 0.542.0**: Modern icon library
- **Heroicons 2.2.0**: Additional icon set
- **Class Variance Authority 0.7.1**: Component variant utilities
- **Tailwind Merge 3.3.1**: Intelligent class merging

### Routing & Navigation

- **TanStack Router 1.131.35**: Type-safe routing for React
- **TanStack Router DevTools 1.131.35**: Development tools for routing

### Rich Text Editing

- **TipTap 3.4.1**: Extensible rich text editor framework
- **React Markdown 10.1.0**: Markdown rendering in React

### Development Tools

- **Biome 2.2.2**: Fast linter and formatter
- **Husky 9.1.7**: Git hooks for code quality
- **Knip 5.63.1**: Unused dependency detection
- **Ultracite 5.3.3**: Advanced code analysis

### Build & Runtime

- **Bun 1.2.21**: Fast JavaScript runtime and package manager
- **Vite Plugin SVGR 4.5.0**: SVG to React component conversion

## Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **Bun**: Version 1.2.21 or higher (recommended package manager)
- **Git**: For version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/astronautfa/2025-livestore-linearlite.git
cd 2025-livestore-linearlite
```

### 2. Install Dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Setup

No environment variables are required for basic development. The application uses default configurations.

### 4. Start Development Server

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

The development server will start on `http://localhost:60000`.

### 5. Build for Production

```bash
# Using Bun
bun run build

# Or using npm
npm run build

# Or using yarn
yarn build
```

### 6. Preview Production Build

```bash
# Using Bun
bun run preview

# Or using npm
npm run preview

# Or using yarn
yarn preview
```

## Configuration

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]
    },
    "strict": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig({
  server: {
    port: 60_000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    livestoreDevtoolsPlugin({ schemaPath: './src/lib/livestore/schema/index.ts' }),
  ],
})
```

### Biome Configuration (`biome.json`)

```json
{
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 120
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  }
}
```

## Usage

### Available Scripts

```bash
# Development
bun run dev              # Start development server
bun run clean-vite-cache # Clean Vite cache

# Code Quality
bun run lint             # Run linting
bun run lint:fix         # Fix linting issues
bun run format           # Format code

# Build & Preview
bun run build            # Build for production
bun run preview          # Preview production build

# Documentation
bun run generate-diff-docs # Generate diff documentation
```

### Application Features

1. **Issue Management**
   - Create new issues with title and description
   - Set priority levels (None, Low, Medium, High, Urgent)
   - Assign status (Backlog, Todo, In Progress, Done, Canceled)
   - Add comments and rich text descriptions

2. **Navigation**
   - List view: Table-style issue display
   - Board view: Kanban-style issue organization
   - Search: Full-text search across issues

3. **Filtering & Sorting**
   - Filter by status, priority, and custom queries
   - Sort by creation date, priority, or custom fields

4. **Keyboard Shortcuts**
   - `c` (with Shift): Create new issue
   - `/` (with Shift): Focus search
   - `Escape`: Close modals and menus

## Development

### Development Workflow

1. **Branching Model**
   - Use feature branches for new features
   - Follow conventional commit messages
   - Create pull requests for code review

2. **Code Quality**

   ```bash
   # Run all quality checks
   bun run lint
   bun run format

   # Fix issues automatically
   bun run lint:fix
   ```

3. **Adding New Features**
   - Create components in `src/components/`
   - Add utilities to `src/utils/`
   - Update routes in `src/routes/`
   - Follow existing TypeScript patterns

4. **State Management**
   - Use LiveStore for data persistence
   - Follow existing schema patterns in `src/lib/livestore/schema/`

### Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Shared components
│   ├── icons/          # Icon components
│   ├── layout/         # Layout components
│   └── ui/             # UI primitives
├── data/               # Static data and options
├── hooks/              # Custom React hooks
├── lib/
│   └── livestore/      # State management
├── routes/             # Application routes
└── utils/              # Utility functions
```

## Testing

### Test Commands

```bash
# Run linting (includes some static analysis)
bun run lint

# Check for unused dependencies
bun run knip
```

### Testing Strategy

The project uses Biome for code quality checks and static analysis. While there are no dedicated test files currently, the following practices are recommended:

1. **Code Quality**: Biome handles linting and formatting
2. **Type Safety**: TypeScript provides compile-time checks
3. **Manual Testing**: Test features manually during development

### Future Testing Setup

To add comprehensive testing:

```bash
# Install testing dependencies
bun add -d vitest @testing-library/react @testing-library/jest-dom

# Add test scripts to package.json
"test": "vitest",
"test:ui": "vitest --ui"
```

## Deployment

### Recommended Platforms

1. **Vercel** (Recommended)

   ```bash
   # Install Vercel CLI
   bun add -g vercel

   # Deploy
   vercel
   ```

2. **Netlify**

   ```bash
   # Install Netlify CLI
   bun add -g netlify-cli

   # Build and deploy
   bun run build
   netlify deploy --prod --dir=dist
   ```

3. **Docker Deployment**

   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 60000
   CMD ["npm", "run", "preview"]
   ```

### Build Configuration

The application is configured for static site generation and can be deployed to any static hosting service.

## Environment and Security

### Environment Variables

No environment variables are currently required. The application uses default configurations for development and production.

### Security Considerations

- **Local-First Architecture**: Data is stored locally first, reducing server-side attack surface
- **Type Safety**: TypeScript prevents common runtime errors
- **Code Quality**: Biome and Husky enforce code standards
- **Dependency Management**: Regular updates and security audits recommended

### Recommended Environment Setup

```bash
# For production deployments
NODE_ENV=production
```

## Contributing

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `bun install`
4. Start development: `bun run dev`
5. Create a feature branch: `git checkout -b feature/your-feature`

### Code Standards

- **TypeScript**: Strict type checking enabled
- **Formatting**: Biome handles consistent formatting
- **Linting**: Follow Biome rules and recommendations
- **Commits**: Use conventional commit format

### Pull Request Process

1. Ensure all tests pass: `bun run lint`
2. Update documentation if needed
3. Create a pull request with a clear description
4. Wait for code review and approval

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Troubleshooting

### Common Issues

1. **Port 60000 already in use**

   ```bash
   # Kill process using port 60000
   lsof -ti:60000 | xargs kill -9
   ```

2. **Build fails with TypeScript errors**

   ```bash
   # Clear TypeScript cache
   bun run clean-vite-cache
   bun run dev
   ```

3. **LiveStore connection issues**
   - Ensure WebAssembly support in browser
   - Check console for LiveStore initialization errors

4. **Hot reload not working**

   ```bash
   # Clear Vite cache
   bun run clean-vite-cache
   ```

### Performance Issues

- Ensure you're using Bun for optimal performance
- Check browser console for performance warnings
- Verify LiveStore worker is running correctly

## Changelog

### Version 0.0.0 (Current)

- Initial release with core issue tracking functionality
- Local-first architecture with LiveStore
- Modern React 19 and TypeScript implementation
- Responsive UI with Tailwind CSS and Radix UI components

### Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Author & Maintainers

- **Contact**: [GitHub Issues](https://github.com/astronautfa/2025-livestore-linearlite/issues)

---

Built with ❤️ using React, TypeScript, and LiveStore
