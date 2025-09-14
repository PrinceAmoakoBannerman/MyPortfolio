import { useState } from 'react';
import oguaaApartmentsImg from '../assets/oguaaapartments.live.png';
import space33Img from '../assets/space33.jpg';
import { ExternalLink, GithubIcon } from 'lucide-react';
import foundImg from '../assets/found.png';
import shippingImg from '../assets/shipping.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample projects - you can easily add more projects here
  const projects = [
    {
      id: 1,
      title: "The Space Agency(still ongoing)",
      description: "An application for a fictional space agency, showcasing missions, crew members, and spacecraft using Django and Bootstrap.",
      image: space33Img,
      category: "django",
      technologies: ["Django", "JavaScript", "Bootstrap", "PostgreSQL"],
      liveUrl: "https://the-space-agency-1.onrender.com/",
      githubUrl: "https://github.com/princeamoako/the-space-agency"
    },
    {
      id: 2,
      title: "First Hotel Application",
      description: "Full-featured hotel management system built with Django, featuring user authentication, room booking, and payment integration.",
      image: oguaaApartmentsImg,
      category: "django",
      technologies: ["Python", "Django", "JavaScript", "PostgresSQL"],
      liveUrl: "https://oguaaapartments.live/",
      githubUrl: "https://github.com/princeamoako/oguaaapartments"
    },
    {
      id: 3,
      title: "ShipTrack Pro (Shipping Company)",
      description: "A shipment tracking platform with real-time updates, ETA, and secure data, built with Django and React.",
      image: shippingImg,
      category: "django",
      technologies: ["Django", "Django templates", "JavaScript", "HTML/CSS", "PostgreSQL"],
      liveUrl: "https://shippingcompany-4dhc.onrender.com",
      githubUrl: "https://github.com/PrinceAmoakoBannerman/ShippingCompany"
    },
    {
      id: 4,
      title: "Iman Jibril Foundation",
      description: "A foundation website built with Django templates and JavaScript to showcase projects, accept donations, and share news updates.",
      image: foundImg,
      category: "javascript,django templates",
      technologies: ["JavaScript", "django templates", "Django REST", "HTML/CSS"],
      liveUrl: "https://www.imanjibrilfoundation.org/",
      githubUrl: "https://github.com/princeamoako/iman-jibril-foundation"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'django', name: 'Django' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'web', name: 'Web Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
  <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent projects and technical achievements
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl} 
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View source code"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
  <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a 
            href="https://github.com/PrinceAmoakoBannerman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <GithubIcon className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;