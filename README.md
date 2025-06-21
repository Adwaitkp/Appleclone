# Apple Homepage Clone

A beautiful, responsive Apple homepage clone built with React, Tailwind CSS, and Framer Motion, powered by Vite.

## Features

- 🍎 **Apple-inspired Design**: Authentic Apple homepage look and feel
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- ✨ **Smooth Animations**: Powered by Framer Motion for delightful interactions
- 🎨 **Modern UI**: Clean, minimalist design with Apple's signature aesthetic
- 🚀 **Lightning Fast**: Built with Vite for instant hot reload and fast builds
- 🎯 **Interactive Elements**: Hover effects, scroll animations, and micro-interactions

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **JavaScript (ES6+)** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm run dev` - Starts the development server with hot reload
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with Apple logo and menu
│   ├── Hero.jsx            # Hero section with main product showcase
│   ├── ProductShowcase.jsx # Reusable product showcase component
│   └── Footer.jsx          # Footer with links and copyright
├── App.jsx                 # Main application component
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Components Overview

### Navbar
- Fixed navigation with Apple logo
- Responsive menu with hamburger for mobile
- Smooth scroll-based background changes
- Search and shopping bag icons

### Hero
- Full-screen hero section
- Animated text and buttons
- Parallax background effects
- Floating scroll indicator

### ProductShowcase
- Reusable component for product displays
- Hover animations and 3D effects
- Responsive layout with reverse option
- Background blur effects

### Footer
- Comprehensive footer with all Apple links
- Organized in columns
- Copyright and legal links
- Country selector

## Customization

### Colors
The app uses Apple's signature colors defined in `tailwind.config.js`:
- `apple-blue`: #007AFF
- `apple-gray`: #8E8E93
- `apple-dark`: #1D1D1F

### Animations
All animations are powered by Framer Motion and can be customized in the component files.

### Images
Replace the Unsplash image URLs in the components with your own product images.

## Vite Benefits

- ⚡ **Instant Server Start** - No bundling required
- 🔥 **Lightning Fast HMR** - Hot Module Replacement
- 📦 **Rich Features** - TypeScript, JSX, CSS and more out of the box
- 🛠️ **Optimized Build** - Rollup-powered bundling
- 🔧 **Highly Configurable** - Plugin system and JavaScript API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth 60fps animations
- Responsive design for all devices
- Vite's fast build and dev server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only. Apple and its trademarks are property of Apple Inc.

## Acknowledgments

- Apple Inc. for the original design inspiration
- Unsplash for high-quality images
- Framer Motion team for the amazing animation library
- Tailwind CSS team for the utility-first framework
- Vite team for the lightning-fast build tool 