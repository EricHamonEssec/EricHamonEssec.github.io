import React from 'react';
import { Layers, Code, Database } from 'lucide-react';

interface DimensionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const DimensionCard: React.FC<DimensionCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${color}`}>
      <div className="flex items-start mb-4">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            A Unique Three-Dimensional Architecture
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <DimensionCard 
              title="Dimension 1: Business Role"
              description="Each agent is programmed according to a specific business role (architect, validator, compliance manager, planner...), with corresponding skills and responsibilities."
              icon={<Layers className="w-8 h-8 text-blue-500" />}
              color="border-blue-500"
            />
            
            <DimensionCard 
              title="Dimension 2: Technical & Regulatory Expertise"
              description="Agents possess a knowledge repository of technical and regulatory expertise adapted to their area of intervention, including standards, models, tools, and certification requirements."
              icon={<Code className="w-8 h-8 text-indigo-500" />}
              color="border-indigo-500"
            />
            
            <DimensionCard 
              title="Dimension 3: Tool Integration"
              description="Each agent is capable of using connected engineering tools (CAD, simulation, ALM, PLM...) to produce, verify, and validate deliverables."
              icon={<Database className="w-8 h-8 text-purple-500" />}
              color="border-purple-500"
            />
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Advantage</h3>
            <p className="text-lg text-blue-800">
              This three-dimensional structure faithfully reflects the organization of a human team, but with the power, 
              speed, and systematic compliance verification that only artificial intelligence can offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;