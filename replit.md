# Overview

This is a full-stack web application built with React, Express, and PostgreSQL. The frontend uses modern React with TypeScript, Vite for bundling, and shadcn/ui for the component library. The backend is a RESTful Express server with Drizzle ORM for database operations. The application appears to be in early development stages with basic user management capabilities and a placeholder home page with interactive emoji effects.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Vite Build System**: Fast development server and optimized production builds
- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript support
- **Database Layer**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Interface**: Abstract storage interface with in-memory implementation for development
- **Development Tools**: Hot reloading with tsx, custom logging middleware
- **API Structure**: Routes prefixed with `/api`, centralized error handling

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User table with UUID primary keys, username/password fields
- **Migrations**: Drizzle Kit for schema migrations in `./migrations` directory
- **Validation**: Zod schemas generated from Drizzle table definitions

## Development Environment
- **Monorepo Structure**: Client and server code in separate directories with shared schemas
- **Path Aliases**: Configured TypeScript paths for clean imports (@/, @shared/)
- **Build Process**: Separate build steps for client (Vite) and server (esbuild)
- **Development Server**: Vite dev server with Express API proxy

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL via @neondatabase/serverless
- **Connection**: Uses DATABASE_URL environment variable for database connectivity

## UI Framework
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **TypeScript**: Full type safety across frontend, backend, and shared code
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## State Management
- **TanStack Query**: Server state management, caching, and synchronization
- **Wouter**: Lightweight routing library for single-page applications

## Validation & Forms
- **Zod**: TypeScript-first schema validation library
- **React Hook Form**: Performant forms with easy validation integration
- **Drizzle Zod**: Automatic Zod schema generation from Drizzle table definitions