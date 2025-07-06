import React, { useState } from 'react';
import { Button } from './ui/button';

const Navigation = ({ activeSection, onNavigate }) => {
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);

  const menuItems = [
    { id: 'business', label: 'AI For Business' },
    { id: 'government', label: 'AI For Government' },
    { id: 'coding', label: 'AI For Coding' },
    { 
      id: 'media', 
      label: 'AI For Media',
      hasDropdown: true,
      subItems: [
        { id: 'photos', label: 'AI For Photos' },
        { id: 'videos', label: 'AI For Videos' },
        { id: 'voice', label: 'AI For Voice' }
      ]
    },
  ];

  const handleMediaClick = (subItem) => {
    onNavigate('media');
    setIsMediaDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Fidelis AI
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsMediaDropdownOpen(true)}
                      onMouseLeave={() => setIsMediaDropdownOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate(item.id)}
                        className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:bg-gradient-to-r hover:from-[#f5b739] hover:to-[#e89a1b] hover:text-black hover:shadow-[0_0_20px_rgba(245,183,57,0.5)] ${
                          activeSection === item.id 
                            ? 'bg-gradient-to-r from-[#f5b739] to-[#e89a1b] text-black shadow-[0_0_20px_rgba(245,183,57,0.5)]' 
                            : 'text-gray-300 hover:text-black'
                        }`}
                      >
                        {item.label}
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isMediaDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-md shadow-lg border border-gray-700/50 animate-in fade-in-0 zoom-in-95">
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => handleMediaClick(subItem)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-[#f5b739] hover:to-[#e89a1b] hover:text-black transition-all duration-200"
                              >
                                {subItem.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:bg-gradient-to-r hover:from-[#f5b739] hover:to-[#e89a1b] hover:text-black hover:shadow-[0_0_20px_rgba(245,183,57,0.5)] ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-[#f5b739] to-[#e89a1b] text-black shadow-[0_0_20px_rgba(245,183,57,0.5)]' 
                          : 'text-gray-300 hover:text-black'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('consultation')}
              className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] hover:from-[#e89a1b] hover:to-[#f5b739] text-black font-semibold px-6 py-2 rounded-md shadow-lg hover:shadow-[0_0_25px_rgba(245,183,57,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => onNavigate('consultation')}
              className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] hover:from-[#e89a1b] hover:to-[#f5b739] text-black font-semibold px-4 py-2 rounded-md text-sm"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;