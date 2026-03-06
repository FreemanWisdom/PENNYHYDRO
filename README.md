# PennyHydro

A modern, responsive website built with Next.js, React, and Tailwind CSS. This project showcases services, projects, and provides a contact platform for potential clients.

## ✨ Features

- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Modern UI** - Clean and professional user interface
- **Service Showcase** - Display services with detailed information
- **Project Portfolio** - Grid layout for showcasing completed projects
- **Contact Form** - Integrated contact form for client inquiries
- **SEO Optimized** - Built with Next.js for optimal search engine performance
- **Type Safe** - Full TypeScript support throughout the application

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.1.6
- **UI Library**: [React](https://react.dev/) 19.2.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Linting**: [ESLint](https://eslint.org/) 9

## 📋 Prerequisites

- Node.js 16 or higher
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pennhydro.git
   cd pennhydro

2.**Install dependencies**
npm install
# or
yarn install
# or
pnpm install

3. **Run the development server**
npm run dev
Open http://localhost:3000 with your browser to see the result

4. **Build for production**
 npm run build
npm start

 ## 📁 Project Structure
 pennhydro/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── policy/            # Policy page
│   └── services/          # Services page
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx
│   ├── ServicesPreview.tsx
│   ├── ProjectsGrid.tsx
│   └── UI.tsx
├── lib/                   # Utility functions
│   └── images.ts
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration

