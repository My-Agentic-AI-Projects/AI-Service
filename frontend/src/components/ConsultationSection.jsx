import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceInterest: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock implementation)
    setTimeout(() => {
      toast({
        title: "Consultation Request Submitted!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        serviceInterest: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  const consultationBenefits = [
    {
      icon: '🎯',
      title: 'Strategic Planning',
      description: 'Develop a comprehensive AI strategy tailored to your specific business needs and goals.'
    },
    {
      icon: '🚀',
      title: 'Implementation Roadmap',
      description: 'Get a detailed step-by-step plan for implementing AI solutions in your organization.'
    },
    {
      icon: '💡',
      title: 'Technology Assessment',
      description: 'Evaluate the best AI tools and platforms for your use case and budget.'
    },
    {
      icon: '📊',
      title: 'ROI Analysis',
      description: 'Understand the potential return on investment and cost-benefit analysis of AI adoption.'
    },
    {
      icon: '🔧',
      title: 'Technical Guidance',
      description: 'Receive expert technical advice on AI development, deployment, and maintenance.'
    },
    {
      icon: '🎓',
      title: 'Training & Support',
      description: 'Get training recommendations and ongoing support strategies for your team.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f5b739] to-[#e89a1b] bg-clip-text text-transparent">
              Book Your AI Consultation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your specific needs and create a customized solution that drives real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Consultation Benefits */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              What You'll Get from Our Consultation
            </h3>
            <div className="space-y-6">
              {consultationBenefits.map((benefit, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-md border-gray-700/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4 flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Consultation Process */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#f5b739]/10 to-[#e89a1b]/10 rounded-lg border border-[#f5b739]/20">
              <h4 className="text-2xl font-bold text-white mb-4">Consultation Process</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f5b739] to-[#e89a1b] rounded-full flex items-center justify-center text-black font-bold mr-3">1</div>
                  <span className="text-gray-300">Initial Discovery Call (30 minutes)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f5b739] to-[#e89a1b] rounded-full flex items-center justify-center text-black font-bold mr-3">2</div>
                  <span className="text-gray-300">Detailed Analysis & Strategy Session (60 minutes)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f5b739] to-[#e89a1b] rounded-full flex items-center justify-center text-black font-bold mr-3">3</div>
                  <span className="text-gray-300">Customized Proposal & Implementation Plan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="bg-white/5 backdrop-blur-md border-gray-700/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">Get Started Today</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-[#f5b739] focus:ring-[#f5b739]"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-[#f5b739] focus:ring-[#f5b739]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Service Interest *</label>
                    <Select 
                      value={formData.serviceInterest} 
                      onValueChange={(value) => handleSelectChange('serviceInterest', value)}
                    >
                      <SelectTrigger className="bg-white/10 border-gray-600 text-white focus:border-[#f5b739] focus:ring-[#f5b739]">
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="business">AI for Business</SelectItem>
                        <SelectItem value="government">AI for Government</SelectItem>
                        <SelectItem value="coding">AI for Coding</SelectItem>
                        <SelectItem value="photos">AI for Photos</SelectItem>
                        <SelectItem value="videos">AI for Videos</SelectItem>
                        <SelectItem value="voice">AI for Voice</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                      <Select 
                        value={formData.budget} 
                        onValueChange={(value) => handleSelectChange('budget', value)}
                      >
                        <SelectTrigger className="bg-white/10 border-gray-600 text-white focus:border-[#f5b739] focus:ring-[#f5b739]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-plus">$100,000+</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Timeline</label>
                      <Select 
                        value={formData.timeline} 
                        onValueChange={(value) => handleSelectChange('timeline', value)}
                      >
                        <SelectTrigger className="bg-white/10 border-gray-600 text-white focus:border-[#f5b739] focus:ring-[#f5b739]">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                          <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long-term (6+ months)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Project Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, and specific challenges you're facing..."
                      required
                      rows={4}
                      className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-[#f5b739] focus:ring-[#f5b739]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#f5b739] to-[#e89a1b] hover:from-[#e89a1b] hover:to-[#f5b739] text-black font-semibold py-3 rounded-md shadow-lg hover:shadow-[0_0_30px_rgba(245,183,57,0.6)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book My Consultation'}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-sm text-center">
                    Free initial consultation • No commitment required • Response within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;