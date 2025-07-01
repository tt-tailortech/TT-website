# 🤖 Claude Instructions for TT-Website Project

## 📋 **Quick Access - Development Resources**

### **🎯 Project Overview**
**Tailored Tech Corporate Website** - Professional company website showcasing technology solutions
- Next.js 13+ with React 18
- Multi-language support (English/Spanish)
- Responsive design with Tailwind CSS
- Interactive solution configurator

---

## 🏗️ **Project Structure**

### **Core Directories**
```
TT-website/
├── README.md                           # 📖 Project documentation
├── package.json                        # 📦 Dependencies and scripts
├── next.config.js                      # ⚙️ Next.js configuration
├── tailwind.config.js                  # 🎨 Tailwind CSS configuration
├── netlify.toml                        # 🚀 Netlify deployment config
├── src/
│   ├── components/                     # 🧱 Reusable components
│   │   ├── layout/                     # 📐 Layout components
│   │   ├── sections/                   # 📄 Page sections
│   │   ├── interactive/                # 🎯 Interactive features
│   │   └── ui/                         # 🎨 UI components
│   ├── pages/                          # 📄 Next.js pages
│   ├── styles/                         # 🎨 Global styles
│   ├── data/                           # 📊 Static data
│   └── utils/                          # 🔧 Utility functions
└── public/                             # 📁 Static assets
    ├── images/                         # 🖼️ Images and graphics
    ├── icons/                          # 🔣 Icon assets
    └── locales/                        # 🌐 Translation files
```

---

## 🎯 **Current Development Priorities**

### **🔥 High Priority Features**
1. **Company Branding & Identity**
   - Professional hero section
   - Company mission and values
   - Team showcase

2. **Solutions Showcase**
   - Interactive solution configurator
   - Case studies and testimonials
   - Technology stack demonstrations

3. **Multi-language Support**
   - English/Spanish translations
   - Dynamic language switching
   - Localized content

### **📋 Key Features Implemented**
- ✅ Responsive design with Tailwind CSS
- ✅ Multi-language support (i18next)
- ✅ Interactive solution configurator
- ✅ Contact form with validation
- ✅ Professional layout components

---

## 🧪 **Development Workflow**

### **Available Scripts**
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### **Key Technologies**
- **Framework**: Next.js 13+ with React 18
- **Styling**: Tailwind CSS
- **Internationalization**: next-i18next
- **Deployment**: Netlify
- **Language**: JavaScript (ES6+)

---

## 💡 **Development Guidelines**

### **When Adding New Features**
1. **Component-First Approach**: Create reusable components
2. **Mobile-First Design**: Ensure responsive behavior
3. **Internationalization**: Add translations for new content
4. **Performance**: Optimize images and assets
5. **SEO**: Include proper meta tags and structure

### **Code Quality Standards**
- **Component Structure**: Follow existing component patterns
- **Styling**: Use Tailwind CSS utility classes
- **Accessibility**: Include proper ARIA labels and semantic HTML
- **Performance**: Optimize images and lazy load content
- **Translations**: Update both English and Spanish locales

---

## 🔗 **Quick Commands & File Access**

### **Common Development Tasks**
```bash
# Navigate to project
cd /Users/bmac/Library/CloudStorage/OneDrive-TheUniversityofMemphis/Other/TT/Claude_projects/TT-website/

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Git commands with authentication
git push origin main
# Note: Uses GITHUB_TOKEN from ../env for tt-tailortech account
```

### **GitHub Authentication**
- **Token**: Stored in `../.env` as `GITHUB_TOKEN`
- **Account**: tt-tailortech
- **Repository**: https://github.com/tt-tailortech/TT-website
- **Usage**: All git operations use this token for authentication

### **Key Files**
- **Main Layout**: `src/components/layout/Layout.js`
- **Homepage**: `src/pages/index.js`
- **Solutions**: `src/pages/solutions/index.js`
- **Translations**: `public/locales/en/` and `public/locales/es/`
- **Styles**: `src/styles/globals.css`

---

## 🎯 **Feature Implementation Strategy**

### **Content Management**
- **Static Data**: Stored in `src/data/` directory
- **Translations**: Managed through JSON files in `public/locales/`
- **Images**: Organized in `public/images/` with subdirectories
- **Components**: Modular, reusable components in `src/components/`

### **Deployment Strategy**
- **Platform**: Netlify hosting
- **Configuration**: `netlify.toml` for build settings
- **Domain**: Will be configured for Tailored Tech domain
- **SSL**: Automatic HTTPS through Netlify

---

## 🚀 **Success Metrics**

### **Performance Targets**
- **Page Load**: <3 seconds on 3G connection
- **Lighthouse Score**: >90 for Performance, Accessibility, SEO
- **Mobile Responsiveness**: Perfect across all device sizes
- **Cross-browser Support**: Chrome, Firefox, Safari, Edge

### **Business Goals**
- **Professional Presence**: Showcase company expertise
- **Lead Generation**: Effective contact forms and CTAs
- **Solution Demonstration**: Interactive configurator usage
- **Multi-market Reach**: Spanish language adoption

---

## 🤝 **Collaboration Notes**

### **For Team Development**
- **Component Library**: Reusable UI components in `src/components/ui/`
- **Design System**: Consistent Tailwind configuration
- **Content Updates**: Easy modification through data files
- **Translation Management**: Structured locale files

### **For Content Management**
- **Solutions Data**: `src/data/solutions.js`
- **Company Info**: `src/data/testimonials.js`, `src/data/process.js`
- **Translations**: Update both `en` and `es` locale files
- **Images**: Maintain organized structure in `public/images/`

---

**🎯 Focus: Professional corporate website showcasing Tailored Tech's technology solutions with excellent UX and multi-language support**

*Last Updated: 2025-07-01*