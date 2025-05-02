# E-commerce Application

This is a collaborative **study project** built by three students to practice building scalable front-end applications using **React**. It simulates a basic **e-commerce platform** with a focus on structure, reusability, and modern development practices.

## Project Goals

- Learn and apply modern React patterns (state management, view/container structure, reusable components).
- Practice team-based collaboration.
- Use tooling like **Vite**, **TypeScript**, **Prettier**, **ESLint**, and **Vitest**.
- Follow best practices for clean, maintainable, and testable code.

## Tech Stack

| Category  | Technology                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| Frontend  | [React](https://react.dev/) 19, [TypeScript](https://www.typescriptlang.org/)                                               |
| Tooling   | [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) |
| Testing   | [Vitest](https://vitest.dev/)                                                                                               |
| Git Hooks | [Husky](https://typicode.github.io/husky/), lint-staged, Commitlint                                                         |

## Project Structure

```graphql
src/
├── assets/            # For images, fonts etc.
├── components/        # For shared components (Button, Input, Form etc.).
├                        Need to use Container/View Pattern for them.
├                        Also, if it is applicable, need to create separate
├                        folders for them, such as: tests, styles, constants,
├                        utils, hooks, types services for them, if needed.
├── pages/             # For pages
├── services/          # For API calls
├── types/             # For types and interfaces
├── utils/             # For utility/helper functions
├── routes/            # For routes
├── hooks/             # For hooks
├── store/             # For state management
```

## Scripts

| Script        | Description                                                                              |
| ------------- | ---------------------------------------------------------------------------------------- |
| `dev`         | Run the app in development mode                                                          |
| `build`       | Compile TypeScript and build production                                                  |
| `preview`     | Preview the production build                                                             |
| `lint`        | Run ESLint on all source files                                                           |
| `format`      | Format code using Prettier                                                               |
| `test`        | Run unit tests using Vitest                                                              |
| `coverage`    | Generate test coverage report                                                            |
| `prepare`     | Used by Husky to setup Git hooks                                                         |
| `lint-format` | Runs ESLint on the entire codebase and automatically fixes linting issues where possible |

## How to Run the Project Locally

1. Clone the repo

```bash
   git clone git@github.com:hanna0101/eCommerce-Application.git

```

2. Install dependencies

```bash
   npm install
```

3. Start the development server

```bash
   npm run dev
```
