import React from 'react';
import Button from './Button';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white z-0 opacity-70">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 bg-fixed bg-cover"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              OrchestAll - Your First AI Product Development Team Experts
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto">
              Reduce development costs by up to 70% and timelines by up to 50% while ensuring perfect regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button 
                variant="primary" 
                size="lg" 
                href="#contact"
                className="font-semibold animate-pulse-slow"
              >
                Request a Demo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                href="#solution"
                className="group"
              >
                Learn More 
                <ChevronRight className="inline-block ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-wave-pattern opacity-80"></div>
    </section>
  );
};

export default HeroSection;