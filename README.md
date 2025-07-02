# SciTech Insight - Personal Website Redesign

## Overview
This is a complete redesign of the personal website for Daniel Waiger (SciTech Insight), featuring a modern single-page design with a sticky navigation bar and dark/light theme toggle.

## Features

### 🎨 Modern Single-Page Design
- All content merged into a single `index.html` file
- Smooth scrolling between sections
- Responsive design for all devices

### 🧭 Sticky Navigation
- Fixed navigation bar that stays at the top while scrolling
- Smooth scroll to sections when clicking navigation links
- Active link highlighting based on scroll position
- Logo integration in the navigation

### 🌓 Theme Toggle
- Dark/Light mode switch with smooth transitions
- Saves user preference in localStorage
- Respects system theme preference by default
- Theme-aware CSS variables for consistent styling

### 📱 Responsive Design
- Mobile-first approach
- Touch/swipe support for carousels on mobile devices
- Adaptive layouts for different screen sizes

### 🎠 Interactive Carousels
- Portfolio showcases with navigation arrows
- Touch/swipe support for mobile
- Smooth transitions between slides
- Categories: Microscopy, Image Analysis, 3D Modeling

### 📧 Contact Form
- Professional contact form with validation
- Modern form styling that adapts to theme
- Integration-ready for form services like Formspree

## File Structure

```
├── index.html              # Main single-page website
├── backup/                 # Complete backup of original files
│   ├── index.html
│   ├── portfolio.html
│   ├── services.html
│   ├── contact.html
│   └── assets/
├── assets/
│   ├── css/
│   │   ├── styles.css      # New modern CSS with theme support
│   │   └── styles_old.css  # Backup of original styles
│   ├── js/
│   │   ├── include.js      # Original include script
│   │   ├── carousel.js     # Carousel functionality
│   │   ├── theme-toggle.js # Dark/light theme switching
│   │   └── smooth-scroll.js # Navigation and scrolling
│   ├── logos/
│   └── sample-images/
└── includes/               # Original header/footer includes
```

## Sections

1. **Home/Hero** - Welcome message with call-to-action buttons
2. **About** - Professional background and expertise areas
3. **Portfolio** - Interactive carousels showcasing work categories
4. **Services** - Service offerings in a clean grid layout
5. **Contact** - Contact form and professional information

## Technical Features

### CSS Variables for Theming
- Comprehensive color scheme using CSS custom properties
- Smooth transitions between themes
- Consistent styling across all components

### JavaScript Modules
- **carousel.js**: Handles portfolio carousel functionality
- **theme-toggle.js**: Manages dark/light mode switching
- **smooth-scroll.js**: Navigation highlighting and smooth scrolling

### Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios in both themes
- Semantic HTML structure

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with touch support
- CSS Grid and Flexbox support required

## Getting Started

1. Open `index.html` in a web browser
2. Or run a local server: `python -m http.server 8000`
3. Navigate to `http://localhost:8000`

## Customization

### Changing Colors
Modify the CSS variables in `:root` and `[data-theme="dark"]` selectors in `styles.css`

### Adding Portfolio Items
Edit the carousel sections in `index.html` and add corresponding images

### Form Integration
Update the form action URL in the contact section to integrate with your preferred form service

## Backup
All original files have been preserved in the `backup/` folder for easy restoration if needed.
