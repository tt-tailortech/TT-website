# Tailored Tech Solutions Website

A modern, responsive website for Tailored Tech Solutions, showcasing their custom technological solutions for real-world challenges.

## Project Structure

```
tailoredtech/
├── public/               # Static assets (images, icons, fonts)
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Layout components (Header, Footer, etc.)
│   │   ├── ui/           # UI elements (Buttons, Cards, etc.)
│   │   └── sections/     # Page sections (Hero, Features, etc.)
│   ├── pages/            # Page components
│   │   ├── index.js      # Home page
│   │   ├── solutions/    # Solutions pages
│   │   ├── approach/     # Approach page
│   │   ├── about/        # About Us page
│   │   ├── resources/    # Resources pages
│   │   └── contact/      # Contact page
│   ├── styles/           # CSS/SCSS files
│   ├── utils/            # Utility functions
│   └── data/             # JSON data files for content
```

## Technology Stack

- **Framework**: Next.js - React framework with server-side rendering
- **Styling**: TailwindCSS - Utility-first CSS framework
- **Deployment**: Vercel/Netlify (recommended)
- **Additional Libraries**:
  - Styled Components - For component-based styling
  - React Icons - For icon components

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   cd tailoredtech-website
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

- **Pages**: Add new pages in the `src/pages` directory. Next.js automatically handles routing based on the file structure.
- **Components**: Create reusable components in the `src/components` directory.
- **Data**: Store content data in the `src/data` directory as JavaScript files with exports.

## Building for Production

```
npm run build
# or
yarn build
```

## Deployment

This website is designed to be deployed on platforms like Vercel or Netlify, which offer seamless deployment for Next.js projects.

## Design Notes

### Color Palette

- Primary (Deep Blue): #2A4B8C
- Secondary (Teal): #12A5B0
- Light Gray: #F5F5F7

### Typography

- Headings: Montserrat (sans-serif)
- Body Text: Open Sans (sans-serif)
- Code: Roboto Mono (monospace)

## Content Management

Content is currently managed through JavaScript data files in the `src/data` directory. For a more robust content management solution, consider integrating a headless CMS.

## License

[License information goes here]
