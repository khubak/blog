# Miracle Tree Blog

A modern, performant blog platform built with Next.js, TypeScript, and Tailwind CSS.
Main feature: 1 fetch for all 100 posts (across all pages) on build time.

## 🌐 Live Demo

[View Demo on Vercel](https://blog-lemon-two-34.vercel.app/)

## ✨ Features

- Static site generation with ISR
- Searchbar with lodash debouncer
- Real-time post filtering and search
- Dynamic hashtag system
- Responsive design with Tailwind CSS
- Type-safe data handling
- Performance optimized caching
- Card-based post layout

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/blog.git
cd blog
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Build for production:

```bash
yarn build && yarn start
```

## 📦 Project Structure

```
miracle-tree-blog/
├── components/        # UI components
├── pages/            # Next.js pages
├── api/              # API utilities
├── helpers/          # Utilities
├── models/           # TypeScript types
└── public/           # Static assets
```

## 🧪 Development Commands

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn lint:fix     # Fix ESLint issues
yarn format       # Run Prettier
```

## 📄 License

MIT License
