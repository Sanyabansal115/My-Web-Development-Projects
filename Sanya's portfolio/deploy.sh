#!/bin/bash

# =============================================================================
# PORTFOLIO DEPLOYMENT SCRIPT
# Sanya Bansal - Professional Portfolio Website
# =============================================================================

echo "🚀 Starting deployment process for Sanya Bansal Portfolio..."

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
print_status "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

NODE_VERSION=$(node --version)
print_success "Node.js version: $NODE_VERSION"

# Check if npm is installed
print_status "Checking npm installation..."
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

NPM_VERSION=$(npm --version)
print_success "npm version: $NPM_VERSION"

# Install dependencies
print_status "Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Run linting
print_status "Running ESLint check..."
npm run lint
if [ $? -eq 0 ]; then
    print_success "Linting passed"
else
    print_warning "Linting issues found, but continuing deployment"
fi

# Build the project
print_status "Building project for production..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check if dist directory exists
if [ ! -d "dist" ]; then
    print_error "Build directory 'dist' not found"
    exit 1
fi

print_success "Build directory created successfully"

# Display build statistics
print_status "Build Statistics:"
echo "  📁 Build directory: $(pwd)/dist"
echo "  📊 Total files: $(find dist -type f | wc -l)"
echo "  💾 Total size: $(du -sh dist | cut -f1)"

# Git status check
print_status "Checking Git status..."
if ! git diff --quiet; then
    print_warning "Uncommitted changes detected. Consider committing before deployment."
    echo "Modified files:"
    git diff --name-only
    echo ""
fi

# Deployment options
echo ""
echo "🌐 Deployment Options:"
echo "1. Deploy to GitHub Pages"
echo "2. Deploy to Vercel"
echo "3. Deploy to Netlify"
echo "4. Generate deployment package"
echo "5. Exit"
echo ""

read -p "Select deployment option (1-5): " choice

case $choice in
    1)
        print_status "Deploying to GitHub Pages..."
        npm run deploy:gh-pages
        if [ $? -eq 0 ]; then
            print_success "Successfully deployed to GitHub Pages!"
            echo "🌐 Your site will be available at: https://sanyabansal115.github.io/My-Web-Development"
        else
            print_error "GitHub Pages deployment failed"
            exit 1
        fi
        ;;
    2)
        print_status "Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
            if [ $? -eq 0 ]; then
                print_success "Successfully deployed to Vercel!"
            else
                print_error "Vercel deployment failed"
                exit 1
            fi
        else
            print_error "Vercel CLI not installed. Install with: npm install -g vercel"
            exit 1
        fi
        ;;
    3)
        print_status "Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
            if [ $? -eq 0 ]; then
                print_success "Successfully deployed to Netlify!"
            else
                print_error "Netlify deployment failed"
                exit 1
            fi
        else
            print_error "Netlify CLI not installed. Install with: npm install -g netlify-cli"
            exit 1
        fi
        ;;
    4)
        print_status "Creating deployment package..."
        TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
        PACKAGE_NAME="sanya-portfolio-${TIMESTAMP}.zip"
        
        cd dist
        zip -r "../${PACKAGE_NAME}" .
        cd ..
        
        if [ -f "$PACKAGE_NAME" ]; then
            print_success "Deployment package created: $PACKAGE_NAME"
            echo "📦 Package size: $(du -sh $PACKAGE_NAME | cut -f1)"
            echo "📁 Package location: $(pwd)/$PACKAGE_NAME"
        else
            print_error "Failed to create deployment package"
            exit 1
        fi
        ;;
    5)
        print_status "Deployment cancelled by user"
        exit 0
        ;;
    *)
        print_error "Invalid option selected"
        exit 1
        ;;
esac

# Post-deployment tasks
print_status "Running post-deployment tasks..."

# Create deployment log
LOG_FILE="deployment-$(date +"%Y%m%d_%H%M%S").log"
cat > "$LOG_FILE" << EOF
===========================================
SANYA BANSAL PORTFOLIO - DEPLOYMENT LOG
===========================================

Deployment Date: $(date)
Node.js Version: $NODE_VERSION
npm Version: $NPM_VERSION
Build Status: SUCCESS
Deployment Method: Option $choice

Build Statistics:
- Total files: $(find dist -type f | wc -l)
- Total size: $(du -sh dist | cut -f1)
- Assets: $(find dist/assets -name "*.js" -o -name "*.css" | wc -l) files

Git Information:
- Branch: $(git branch --show-current)
- Latest commit: $(git log -1 --oneline)
- Repository: $(git remote get-url origin)

Performance Metrics:
- Bundle size: $(du -sh dist/assets/*.js | cut -f1)
- CSS size: $(du -sh dist/assets/*.css | cut -f1)

===========================================
EOF

print_success "Deployment log created: $LOG_FILE"

# Final success message
echo ""
echo "🎉 DEPLOYMENT COMPLETED SUCCESSFULLY! 🎉"
echo ""
echo "📋 Next Steps:"
echo "   1. Verify the deployed site is working correctly"
echo "   2. Test all navigation and functionality"
echo "   3. Check responsive design on different devices"
echo "   4. Monitor performance and user analytics"
echo "   5. Update README.md with the live site URL"
echo ""
echo "📊 Useful Commands:"
echo "   - npm run dev      (Start development server)"
echo "   - npm run build    (Build for production)"
echo "   - npm run preview  (Preview production build)"
echo "   - npm run lint     (Run code linting)"
echo ""
echo "🔗 Resources:"
echo "   - Repository: https://github.com/Sanyabansal115/My-Web-Development"
echo "   - Documentation: ./README.md"
echo "   - Deployment Guide: ./DEPLOYMENT.md"
echo ""

print_success "Thank you for using the Portfolio Deployment Script!"