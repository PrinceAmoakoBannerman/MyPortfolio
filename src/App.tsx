
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {/* Get in Touch section moved here */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/233598841526"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold shadow-md"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp
            </a>
            <a
              href="mailto:princeamoako.bannerman@gmail.com"
              className="inline-flex items-center bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors text-lg font-semibold shadow-md"
            >
              <Mail className="mr-2" size={20} />
              Gmail
            </a>
            <a
              href="https://www.linkedin.com/in/prince-bannerman-1a676326a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold shadow-md"
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/PrinceAmoakoBannerman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors text-lg font-semibold shadow-md"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;