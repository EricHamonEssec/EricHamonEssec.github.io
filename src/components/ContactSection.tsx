import React, { useState } from 'react';
import Button from './Button';
import { Mail, MessageSquare, Calendar, Users } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@orchestallai.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Development Process?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join leading companies already revolutionizing their product development with AI-powered orchestration. 
              Let's discuss how OrchestAll AI can transform your specific challenges.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get Started Today</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your current development challenges and what you'd like to achieve..."
                    required
                  ></textarea>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="grid gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-xl mr-4">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Schedule a Demo</h3>
                  </div>
                  <p className="text-gray-600">
                    See OrchestAll AI in action with a personalized demonstration tailored to your industry and use cases.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-50 rounded-xl mr-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Join the PoC Program</h3>
                  </div>
                  <p className="text-gray-600">
                    Participate in our Proof of Concept program and be among the first to experience the future of development.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-50 rounded-xl mr-4">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Expert Consultation</h3>
                  </div>
                  <p className="text-gray-600">
                    Speak with our team of AI and compliance experts to discuss your specific requirements and challenges.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
                <p className="text-blue-100">
                  We're dedicated to transforming regulated product development. Our team combines 25+ years 
                  of industry expertise with cutting-edge AI technology to deliver solutions that truly make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;