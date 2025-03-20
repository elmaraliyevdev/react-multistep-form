# RIS Form Application

A multi-step form application for RIS submission.

## Features

- Multi-step form with progress tracking
- Form state management using Zustand
- Responsive design using Flowbite React
- Form validation using Zod
- TypeScript support for type safety

## Tech Stack

- React.js
- TypeScript
- Flowbite React for UI components
- Zustand for state management
- React Hook Form with Zod validation
- Wouter for routing

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components for each form step
├── store/            # Zustand store for form state
├── types/            # TypeScript type definitions
└── hooks/            # Custom React hooks
```

## Form Steps

1. **Number Type Selection**
   - Country selection
   - Number type selection (Local, National, Mobile)

2. **Identity Type**
   - Business or Individual selection
   - Visual cards with icons for selection

3. **RIS Form**
   - Business details (if applicable)
   - Address information
   - Document upload

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the application (default port will be shown in the console)

## Form Validation

- Each step includes field-level validation using Zod schemas
- Business details are conditionally required based on identity type
- Document upload is required for final submission

## State Management

The application uses Zustand for state management with the following stores:
- `numberFormData`: Country and number type selection
- `identityType`: Business or individual selection
- `risFormData`: Address and document information

## Development Guidelines

- Use TypeScript for all new components
- Follow the existing component structure
- Maintain form state in the Zustand store
- Use Flowbite React components for consistent UI