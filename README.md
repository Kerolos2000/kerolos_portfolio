
# Kerolos Portfolio

This is a **Portfolio Application** built using **React**, **TypeScript**, and **Vite**. The project showcases various projects, skills, and experiences, acting as a personal portfolio for Kerolos.

## Features

- **Project Showcase**: List and showcase projects with details, screenshots, and links to repositories or live demos.
- **Skills Overview**: Present key skills with proficiency levels.
- **Contact Form**: A contact form integrated with email notifications.
- **Interactive Charts**: Display data such as skills and project statistics through dynamic charts.
- **Mobile Friendly**: Responsive design for all screen sizes.

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Zustand
- **UI Components**: Material UI
- **Forms**: React Hook Form, Zod for validation
- **Charts**: React-Chartjs-2
- **Date Handling**: date-fns
- **State Management**: Zustand
- **API Calls**: Axios
- **Routing**: React Router Dom
- **Notifications**: React-Toastify

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Kerolos2000/kerolos_portfolio
   ```

2. Navigate to the project folder:

   ```
   cd kerolos_portfolio
   ```

3. Install the dependencies:

   ```
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```
yarn dev
```

This will start the app at `http://localhost:5173`.

### Building for Production

To create an optimized production build, run:

```
yarn build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

You can also preview the production build locally by running:

```
yarn preview
```

This will serve the build at `http://localhost:5173`.

## ESLint and Prettier

This project uses custom **ESLint** and **Prettier** configurations to maintain code quality and consistency.

- **Lint the project**:

  ```
  yarn lint
  ```

- **Fix lint issues**:

  ```
  yarn lint --fix
  ```

- **Format the code**:

  ```
  yarn format
  ```

## Folder Structure

The folder structure of the project is organized as follows:

```
kerolos_portfolio/
├── public/                  # Static public assets (index.html, favicon, etc.)
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable components (e.g., buttons, headers)
│   ├── features/            # Feature-specific modules (e.g., project showcase, skills)
│   ├── hooks/               # Custom hooks
│   ├── layouts/             # Layout components
│   ├── pages/               # Pages for routing (e.g., Home, Projects, Contact)
│   ├── services/            # API calls and external services
│   ├── store/               # Zustand store for state management
│   └── utils/               # Utility functions and helpers
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
└── tsconfig.json            # TypeScript configuration
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: \`git checkout -b feature-name\`.
3. Make your changes and commit them: \`git commit -m 'Add new feature'\`.
4. Push to the branch: \`git push origin feature-name\`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

**Kerolos Portfolio** is built with ❤️ by Kerolos.
