#!/bin/bash

echo "🤖 Claude Context Auto-Setup for TT-Website Project"
echo "=================================================="

# Project configuration
PROJECT_ROOT="/Users/bmac/Library/CloudStorage/OneDrive-TheUniversityofMemphis/Other/TT/Claude_projects"
COMPANY_NAME="Tailored Tech"
DEVELOPER_NAME="Benja"
PROJECT_NAME="TT-website"

CURRENT_DIR=$(pwd)
echo "📍 Current directory: $CURRENT_DIR"

echo "🔍 Detecting environment..."

# Check if we're in the TT-website project
if [[ "$CURRENT_DIR" == *"TT-website"* ]]; then
    echo "✅ Found TT-Website project directory"
    cd "/Users/bmac/Library/CloudStorage/OneDrive-TheUniversityofMemphis/Other/TT/Claude_projects/TT-website"
else
    echo "❌ Not in TT-Website project"
    echo "🎯 Navigating to TT-Website project..."
    cd "/Users/bmac/Library/CloudStorage/OneDrive-TheUniversityofMemphis/Other/TT/Claude_projects/TT-website"
fi

echo ""
echo "🌐 TT-Website Project Context:"
echo "✅ Project: Tailored Tech Corporate Website"
echo "✅ Framework: Next.js with React"
echo "✅ Styling: Tailwind CSS"
echo "✅ Languages: English/Spanish (i18next)"
echo "✅ Deployment: Netlify"

echo ""
echo "📋 Project Structure Overview:"
echo "├── src/components/    # React components"
echo "├── src/pages/         # Next.js pages"
echo "├── src/data/          # Static data"
echo "├── public/images/     # Image assets"
echo "├── public/locales/    # Translations"
echo "└── CLAUDE.md          # Development instructions"

echo ""
echo "🔧 Available Development Commands:"
echo "npm run dev     # Start development server"
echo "npm run build   # Build for production"
echo "npm run start   # Start production server"
echo "npm run lint    # Lint code"

echo ""
echo "📖 Key Files for Development:"
echo "- CLAUDE.md              # Project instructions"
echo "- package.json           # Dependencies"
echo "- src/pages/index.js     # Homepage"
echo "- src/components/        # Component library"
echo "- tailwind.config.js     # Styling configuration"

echo ""
echo "🎯 Current Development Focus:"
echo "- Professional corporate website"
echo "- Multi-language support (EN/ES)"
echo "- Interactive solution configurator"
echo "- Contact forms and lead generation"
echo "- Mobile-first responsive design"

echo ""
echo "🚀 Deployment Information:"
echo "- Platform: Netlify"
echo "- Repository: https://github.com/tt-tailortech/TT-website"
echo "- Configuration: netlify.toml"

echo ""
echo "🏢 Company Branding:"
echo "- Company: Tailored Tech Solutions"
echo "- Logo: TT-logo.jpeg (use in all presentations/repos)"
echo "- Focus: Custom technology solutions"

# Check if dependencies are installed
if [ -f "package.json" ]; then
    if [ ! -d "node_modules" ]; then
        echo ""
        echo "⚠️  Dependencies not installed. Run: npm install"
    else
        echo ""
        echo "✅ Dependencies installed"
    fi
fi

# Check if git is initialized
if [ -d ".git" ]; then
    echo "✅ Git repository initialized"
    echo "🔗 Remote: https://github.com/tt-tailortech/TT-website"
else
    echo "⚠️  Git not initialized. Run: git init"
fi

echo ""
echo "🎯 Ready for TT-Website development!"
echo "📖 Read CLAUDE.md for detailed development guidelines"