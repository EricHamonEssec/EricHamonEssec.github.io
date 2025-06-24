import React from 'react';
import Button from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Development Orchestration
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Your First
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"> AI Product Development</span>
            <br />Team Experts
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Reduce development costs by up to <span className="text-blue-400 font-semibold">70%</span> and 
            timelines by up to <span className="text-purple-400 font-semibold">50%</span> while ensuring 
            perfect regulatory compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              variant="primary" 
              size="lg" 
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg group"
            >
              Request a Demo
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              href="#solution"
              className="border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;