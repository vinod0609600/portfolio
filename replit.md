# Portfolio Website

## Overview

This is a modern, fully responsive portfolio website built for Sadula Vinod, an AI Engineer & Full-Stack Developer. The application showcases professional experience, projects, certifications, and provides a contact form for potential clients or employers. The portfolio features a sleek, modern design with dark/light theme support, smooth animations, and interactive components.

The website is built as a full-stack application with a React frontend and Express.js backend, designed to demonstrate both frontend UI/UX skills and backend development capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **State Management**: React Query (TanStack Query) for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Theme System**: next-themes for seamless dark/light mode switching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the entire stack for consistency
- **Storage**: In-memory storage (MemStorage) for contact form submissions with plans for PostgreSQL integration
- **Validation**: Zod schemas shared between frontend and backend for type-safe data validation
- **Development**: Hot reload and development middleware integration

### Data Storage Strategy
- **Current**: In-memory storage using Map data structures for rapid prototyping
- **Planned**: PostgreSQL database with Drizzle ORM for production persistence
- **Schema**: Centralized schema definitions in `/shared` directory using Drizzle and Zod
- **Migration**: Ready-to-use Drizzle configuration for database migrations

### Component Architecture
- **UI Components**: Modular shadcn/ui components with customizable variants
- **Layout**: Section-based architecture (Hero, About, Projects, Experience, etc.)
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Development Workflow
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Type Safety**: End-to-end TypeScript with shared types between frontend and backend
- **Code Quality**: ESLint configuration and consistent formatting
- **Hot Reloading**: Development server with automatic refresh and error overlay

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for future database integration
- **drizzle-orm** & **drizzle-kit**: Type-safe ORM and migration tools for database management
- **@tanstack/react-query**: Powerful server state management and caching

### UI/UX Libraries
- **@radix-ui/react-***: Comprehensive collection of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development  
- **next-themes**: Theme switching capabilities for dark/light mode
- **class-variance-authority**: Type-safe component variants system
- **lucide-react**: Modern icon library with consistent design

### Form & Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for form validation
- **zod**: Runtime type validation and schema generation

### Development Tools
- **vite**: Fast build tool with hot module replacement
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **tsx**: TypeScript execution for server development
- **esbuild**: Fast JavaScript bundler for production builds

### Styling & Animation
- **embla-carousel-react**: Accessible carousel component
- **date-fns**: Modern date utility library
- **clsx** & **tailwind-merge**: Utility functions for conditional classes