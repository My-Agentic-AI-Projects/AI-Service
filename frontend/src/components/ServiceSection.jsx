import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const ServiceSection = ({ data, sectionId }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5b739] to-[#e89a1b] rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={data.image}
              alt={data.title}
              className="relative w-full h-80 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {data.subtitle}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {data.detailedDescription}
            </p>
            
            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Key Expertise:</h4>
              <ul className="space-y-3">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#f5b739] to-[#e89a1b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-gray-700/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(245,183,57,0.2)]">
              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-gradient-to-r from-[#f5b739]/20 to-[#e89a1b]/20 text-[#f5b739] border-[#f5b739]/30 hover:bg-gradient-to-r hover:from-[#f5b739]/30 hover:to-[#e89a1b]/30 transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Subsections for Media */}
        {sectionId === 'media' && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent">
                Specialized Media AI Services
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {data.specialServices.map((specialService, index) => (
                <Card key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border-gray-700/50 hover:from-white/10 hover:to-white/15 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#f5b739] to-[#e89a1b] rounded-full flex items-center justify-center">
                      <span className="text-2xl">{specialService.icon}</span>
                    </div>
                    <CardTitle className="text-white text-xl">
                      {specialService.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center mb-4">
                      {specialService.description}
                    </p>
                    <ul className="space-y-2">
                      {specialService.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#f5b739] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;