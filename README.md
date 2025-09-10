# Prince Amoako Bannerman - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Full-Stack Developer specializing in Python Django and JavaScript.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Dynamic portfolio filtering, contact forms, and skill visualizations
- **SEO Optimized**: Meta tags, semantic HTML, and optimized content structure
- **Performance Focused**: Optimized images, lazy loading, and efficient code

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Images**: Pexels (stock photos)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation and mobile menu
│   ├── Hero.tsx        # Main hero section with introduction
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills showcase with progress bars
│   ├── Portfolio.tsx   # Projects portfolio with filtering
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── main.tsx           # React app entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Color Scheme**: Professional blues and grays with accent colors
- **Typography**: Inter font family for clean, modern look
- **Animations**: Smooth hover effects, transitions, and micro-interactions
- **Layout**: Clean, organized sections with proper spacing and hierarchy
- **Accessibility**: Focus states, semantic HTML, and proper contrast ratios

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository or download the ZIP file
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Build for Production
Create a production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build:
```bash
npm run preview
```

## 📝 Customization Guide

### Adding New Projects
Edit `src/components/Portfolio.tsx` and add new project objects to the `projects` array:

```javascript
{
  id: 7,
  title: "Your Project Title",
  description: "Project description...",
  image: "https://your-image-url.jpg",
  category: "django", // django, javascript, or web
  technologies: ["Python", "Django", "etc"],
  liveUrl: "https://your-live-site.com",
  githubUrl: "https://github.com/your-repo"
}
```

### Updating Personal Information
- **Contact Info**: Update email and phone in `src/components/Hero.tsx` and `src/components/Contact.tsx`
- **Social Links**: Update GitHub and LinkedIn URLs in `src/components/Header.tsx`
- **Bio/About**: Edit content in `src/components/About.tsx`
- **Skills**: Modify skill levels and categories in `src/components/Skills.tsx`

### Changing Colors and Styling
- **Theme Colors**: Update Tailwind classes throughout components
- **Custom Styles**: Modify `src/index.css` for global styling
- **Fonts**: Change font imports in `index.html` and update CSS

## 🌐 Deployment Options

This portfolio can be easily deployed to various hosting platforms:

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **Vercel**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Use the built files in the `dist` folder
- **Surge.sh**: Simple command-line deployment

### Traditional Hosting
Upload the contents of the `dist` folder to any web server after building.

## 📧 Contact Information

- **Name**: Prince Amoako Bannerman
- **Email**: princebannerman@gmail.com
- **Phone**: 0598841526
- **GitHub**: [github.com/princeamoako](https://github.com/princeamoako)
- **LinkedIn**: [linkedin.com/in/prince-amoako-bannerman](https://linkedin.com/in/prince-amoako-bannerman)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, TypeScript, and Tailwind CSS