# 🚀 Renan Girardi | Personal Portfolio

A modern, highly modular personal portfolio website built with **Angular 19**. This application serves as an interactive resume and project showcase, designed with a focus on component-driven architecture, clean code principles, and a seamless, responsive user experience.

Check out the live version here: [renangirardi.github.io](https://renangirardi.github.io)

## ✨ Key Features

- **Dynamic Portfolio & CV:** Structured presentation of professional experience, education, and projects, managed through dedicated Angular services and strongly typed models.
- **Custom UI Components:** Fully custom-built, lightweight UI elements (Image Galleries, Sliders, Skill Bars, and Tags) crafted without relying on heavy external component libraries (like Material or Bootstrap).
- **Interactive "About Me" Experience:** Features a unique dual-mode "About Me" section, including an AI-generated/Thematic view alongside the professional content.
- **GitHub Gist Integration:** Seamless integration to fetch and display code snippets directly from GitHub Gists.
- **Scroll Animations:** Smooth, native user experience using a custom structural directive (`fade-in.directive`) to trigger animations as elements enter the viewport.
- **Automated Deployment:** Fully configured CI/CD pipeline using `angular-cli-ghpages` to deploy directly to GitHub Pages.

## 🛠 Tech Stack

- **Framework:** Angular 19
- **Language:** TypeScript
- **Styling:** CSS3 (Native CSS with modern features)
- **Reactivity:** RxJS
- **Icons:** Simple Icons
- **Testing:** Karma & Jasmine
- **Linting/Formatting:** ESLint & Prettier
- **Deployment:** GitHub Pages

## 🏗 Architecture & Engineering Decisions

As a Mid-Level Front-End Developer, I architected this project focusing on maintainability, scalability, and performance:

- **Strict Folder Architecture:** The app is strictly divided into `core` (singletons, models, services, guards), `features` (smart components and routed pages), and `shared` (dumb/reusable UI components). This ensures clear boundaries and makes the codebase highly scalable.
- **Building over Importing:** Instead of installing third-party packages for UI elements, I engineered custom solutions for complex elements like the `image-slider` and `image-gallery`. This drastically reduced the final bundle size and gave me 100% control over the DOM and styles.
- **Dynamic Icon Rendering:** Implemented a scalable icon system using the `simple-icons` library combined with a custom utility function (`simple-icons-slugs.ts`) to dynamically fetch and render SVG brand icons across the app.
- **Custom Directives for Performance:** Created a reusable `fade-in` directive using the Intersection Observer API to handle scroll animations natively, avoiding the overhead of heavy animation libraries.
- **Strong Typing:** Leveraged TypeScript to its fullest by defining strict interfaces and models (e.g., `experience.ts`, `certificate.ts`) for all data flowing through the `core` services.

## 🚀 How to Run Locally

1. **Clone the repository:**
   git clone https://github.com/renangirardi/renangirardi.github.io.git
   cd renangirardi.github.io
2. **Install dependencies:**
   npm install

3. **Start the development server:**
   npm start

4. **Open in your browser:**
   Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 🧪 Running Tests

To execute unit tests with Karma and Jasmine:
npm run test

To generate a code coverage report:
npm run test:coverage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
