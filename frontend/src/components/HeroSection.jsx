import React from 'react';
import { Button } from './ui/button';

const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Professional Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f5b739] to-[#e89a1b] rounded-full blur-lg opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Fidelis Ozuawala"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-gradient-to-r from-[#f5b739] to-[#e89a1b] shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Fidelis
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent">
              Ozuawala
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming Industries with AI Solutions
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
            Empowering businesses, governments, and individuals with cutting-edge artificial intelligence 
            consulting services. From strategic implementation to hands-on development, I help you navigate 
            the AI revolution and unlock unprecedented possibilities.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => onNavigate('business')}
              className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] hover:from-[#e89a1b] hover:to-[#f5b739] text-black font-semibold px-8 py-3 rounded-md shadow-lg hover:shadow-[0_0_30px_rgba(245,183,57,0.6)] transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Explore My Services
            </Button>
            <Button
              onClick={() => onNavigate('consultation')}
              variant="outline"
              className="border-2 border-[#f5b739] text-[#f5b739] hover:bg-[#f5b739] hover:text-black px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 text-lg hover:shadow-[0_0_20px_rgba(245,183,57,0.4)]"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Stats or Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-lg border border-gray-700/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-lg border border-gray-700/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent mb-2">
                5+
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-lg border border-gray-700/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent mb-2">
                4
              </div>
              <p className="text-gray-300">Industry Sectors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;