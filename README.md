# 🏢 Tailored Tech Corporate Website

![Tailored Tech Logo](./public/images/TT-logo.jpeg)

Professional corporate website for Tailored Tech Solutions, showcasing our technology expertise and custom solutions.

## 🚀 **Live Site**
- **Production**: https://tailortech-website.netlify.app
- **GitHub**: https://github.com/tt-tailortech/TT-website

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

## 🛠️ **Technology Stack**

- **Framework**: Next.js 13+ with React 18
- **Styling**: Tailwind CSS
- **Internationalization**: next-i18next (English/Spanish)
- **Deployment**: Netlify with auto-deployment
- **AI Development**: Claude Code GitHub integration

## 🎯 **Key Features**

- ✅ Responsive design optimized for all devices
- ✅ Multi-language support (English/Spanish)
- ✅ Interactive solution configurator
- ✅ Professional company showcase
- ✅ Contact forms with validation
- ✅ SEO optimized
- ✅ Fast loading with Next.js optimization

## 🤖 **Claude Code Integration**

This repository is integrated with Claude Code for AI-powered development assistance.

### **Available Commands:**
- Mention `@claude` in issues or pull requests for AI assistance
- Auto-deployment triggers on main branch pushes
- Automated code reviews and suggestions

### **Setup Instructions:**
1. Install GitHub app: https://github.com/apps/claude
2. Add `ANTHROPIC_API_KEY` to repository secrets
3. Use `@claude` mentions for AI assistance

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
