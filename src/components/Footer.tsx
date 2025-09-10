import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Prince Amoako Bannerman</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>
          
          <div className="flex justify-center items-center space-x-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and</span>
            <Code className="text-blue-400" size={16} />
            <span>by Prince</span>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Prince Amoako Bannerman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;