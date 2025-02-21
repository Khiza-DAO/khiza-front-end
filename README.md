# Khiza DAO Website

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The official website for Khiza DAO, built with modern web technologies to showcase our community, projects and vision.

## ✨ Key Features

- 🌐 **Community-Driven** - Built by and for the Khiza DAO community
- 🎨 **Modern Design** - Clean and professional UI/UX focused on user experience
- ⚡️ **High Performance** - Built with React, Vite and TypeScript for optimal speed
- 📱 **Responsive** - Fully responsive design that works on all devices
- 🔒 **Type-Safe** - TypeScript for enhanced reliability and developer experience
- 🎯 **Component Library** - Leveraging shadcn/ui for consistent, accessible components
- 🎨 **Tailwind CSS** - Utility-first styling for rapid development

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/khiza-dao/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

The site will be running at [http://localhost:5173](http://localhost:5173)

## 📚 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint checks

# 📂 Project Structure

The project structure follows a standard React application layout:
```python
react-vite-ui/
  ├── node_modules/      # Project dependencies
  ├── public/            # Public assets
  ├── src/               # Application source code
  │   ├── components/    # React components
  │   │   └── ui/        # shadc/ui components
  │   ├── styles/        # CSS stylesheets
  │   ├── lib/           # Utility functions
  │   ├── pages/         # Pages
  │   │   └── [page]/    # Page components
  │   ├── routes/        # Routes
  │   ├── types/         # TypeScript types
  │   └── main.tsx       # Main rendering file
  ├── eslint.config.js   # ESLint configuration
  ├── index.html         # HTML entry point
  ├── postcss.config.js  # PostCSS configuration
  ├── tailwind.config.ts # Tailwind CSS configuration
  ├── tsconfig.json      # TypeScript configuration
  └── vite.config.ts     # Vite configuration
```
