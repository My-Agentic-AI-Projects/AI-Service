import React from 'react';
import { Button } from './ui/button';

const Footer = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'business', label: 'AI For Business' },
    { id: 'government', label: 'AI For Government' },
    { id: 'coding', label: 'AI For Coding' },
    { id: 'media', label: 'AI For Media' },
    { id: 'consultation', label: 'Book Consultation' },
  ];

  const services = [
    'Strategy Development',
    'Implementation Planning',
    'Custom AI Solutions',
    'Training & Support',
    'ROI Analysis',
    'Technical Consulting'
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'GitHub', icon: '⚡', url: '#' },
    { name: 'Medium', icon: '📝', url: '#' },
  ];

  return (
    <footer className="bg-black border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent mb-4">
                Fidelis AI
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Transforming industries through innovative AI solutions. From strategic planning to implementation, 
                I help organizations harness the power of artificial intelligence to drive growth and efficiency.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 fidelis@fidelisai.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>🌍 Available worldwide via remote consultation</p>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-[#f5b739] hover:to-[#e89a1b] hover:text-black hover:border-[#f5b739] transition-all duration-300"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <span className="mr-2">{social.icon}</span>
                  {social.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-[#f5b739] transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#f5b739] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI trends, case studies, and industry developments.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:border-[#f5b739] focus:ring-[#f5b739] focus:outline-none"
              />
              <Button className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] hover:from-[#e89a1b] hover:to-[#f5b739] text-black font-semibold px-6 py-2 rounded-md transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Fidelis AI. All rights reserved. | Transforming Industries with AI Solutions
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#f5b739] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f5b739] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f5b739] transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;