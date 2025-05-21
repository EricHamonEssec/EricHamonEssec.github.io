import React from 'react';
import Button from './Button';

interface RoadmapItemProps {
  title: string;
  description: string;
  current?: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, description, current = false }) => {
  return (
    <div className={`relative pl-10 pb-10 ${current ? '' : 'opacity-80'}`}>
      {/* Timeline connector */}
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-200"></div>
      
      {/* Timeline circle */}
      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 ${
        current 
          ? 'bg-blue-500 border-blue-600 animate-pulse' 
          : 'bg-white border-blue-300'
      }`}></div>
      
      <h3 className={`text-xl font-semibold mb-2 ${current ? 'text-blue-700' : 'text-gray-800'}`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            Our Vision and Next Steps
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
            <div className="mb-6">
              <RoadmapItem 
                title="Current Phase: Demonstration Prototype"
                description="Development of a functional prototype on a concrete case in the automotive sector, implementing A-SPICE and ISO 26262 compliance."
                current={true}
              />
              
              <RoadmapItem 
                title="Next Step: First Customer Pilots"
                description="Close collaboration with pioneering customers to test and refine our solution in real industrial environments."
              />
              
              <RoadmapItem 
                title="6-12 Month Horizon: Complete Platform"
                description="Development of the complete platform with all agents and orchestration functionalities."
              />
              
              <RoadmapItem 
                title="Long-term Vision: Expansion"
                description="Extension to other regulated industries and creation of a low-code/no-code platform allowing customers to configure AI profiles according to their specific needs."
              />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Join us in this transformative journey that redefines the boundaries of modern engineering.</h3>
            <Button 
              variant="primary" 
              size="lg" 
              href="#contact"
              className="mt-4"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;