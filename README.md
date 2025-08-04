This is a [Next.js](https://nextjs.org) typescript project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## How to Setup

**Prerequisites:**

- **Node.js**: Check for the correct version specified in the `.nvmrc` file.
- **[nvm](https://github.com/nvm-sh/nvm)**: _(Recommended)_ Node Version Manager for easily switching between Node.js versions.
- **[pnpm](https://pnpm.io/installation)**: Fast, disk space-efficient package manager.

**Steps:**

1. **Clone**: Clone the repo to your local machine:

```bash
git clone git@github.com:steven-js/product-landing-page-concept.git
```

2. **Install Dependencies**:

```bash
pnpm i
```

## How to run

**Start the development server**:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

## Dependencies

- **next**: Core Next.js framework.
- **react & react-dom**: Core libraries for building UI components.
- **swiper** A flexible slider library.
- **clsx**: Generates conditional class names in components.
- **style-dictionary**: A tool for generating CSS custom properties from design tokens.
- **jest**: Testing framework.
- **storybook**: UI component development environment.
- **ts-node**: Required for Jest testing with TypeScript.

## Styling

Styling is managed using CSS modules (`.module.css`). Variables are defined globally for reuse across components.

## Unit Tests

Jest is used as the unit testing framework, with **React Testing Library**.

A github workflow has been setup to run the tests on every push to the branch.

**Running tests:**

• To run all tests manually:

```bash
pnpm test
```

• To run tests with coverage:

```bash
pnpm jest --coverage
```

## Storybook

Run `pnpm run storybook` to open Storybook's built-in development server.
