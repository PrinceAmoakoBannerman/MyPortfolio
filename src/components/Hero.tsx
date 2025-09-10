import { ChevronDown, Code, Database, Globe } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={profileImg}
              alt="Prince Amoako Bannerman"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Prince Amoako Bannerman
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Intermediate Full-Stack Developer specializing in 
            <span className="text-blue-600 font-semibold"> Python Django</span> and 
            <span className="text-green-600 font-semibold"> JavaScript</span>
            <span className="text-green-600 font-semibold"> React</span>
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center text-gray-700">
              <Code className="mr-2 text-blue-600" size={20} />
              <span>Web Development</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Database className="mr-2 text-green-600" size={20} />
              <span>Django Templates</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Globe className="mr-2 text-purple-600" size={20} />
              <span>Full-Stack Solutions</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <a 
              href="#portfolio" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="text-gray-600">
            <p className="mb-2">📧 princebannerman@gmail.com</p>
            <p>📱 0598841526</p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;