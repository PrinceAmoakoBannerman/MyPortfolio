import { User, Target, Award } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Removed About Me heading and intro paragraph */}
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={profileImg}
                alt="Developer workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <User className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-800">Who I Am</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I'm Prince Amoako Bannerman, a Telecom Engineer (graduated 2025) and intermediate full-stack developer with a passion for 
                  building robust web applications and modern communication systems. I specialize in Python Django for backend development, JavaScript for interactive user experiences, and have hands-on experience in RF/network planning, 4G/5G, and fiber optics.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="text-green-600 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-800">My Focus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I focus on creating clean, efficient code and user-friendly interfaces. 
                  My expertise in Django templates allows me to build dynamic, data-driven 
                  applications that deliver excellent user experiences.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Award className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-800">My Approach</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  I'm committed to writing maintainable code and following best practices in 
                  software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;