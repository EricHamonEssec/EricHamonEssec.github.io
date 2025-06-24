import React from 'react';
import { Bot, CheckCircle } from 'lucide-react';

interface SolutionPointProps {
  title: string;
  description: string;
}

const SolutionPoint: React.FC<SolutionPointProps> = ({ title, description }) => {
  return (
    <div className="flex mb-6">
      <div className="mr-4 mt-1">
        <CheckCircle className="w-6 h-6 text-blue-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Revolutionary Approach: A Complete Virtual AI Team
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                OrchestAll AI offers an unprecedented approach based on agentive artificial intelligence technology, 
                specifically designed to address the challenges of technical development and regulatory compliance.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Our platform simulates a true virtual project team, where each activity of the development cycle 
                is handled by a specialized AI agent, equipped with integrated knowledge of relevant standards and regulations.
              </p>
              
              <p className="text-lg text-gray-700">
                From requirements analysis to final product validation, these agents collaborate in an orchestrated 
                manner to automatically or semi-automatically produce development deliverables that are inherently 
                compliant with standards such as A-SPICE, ISO 26262, and other industry-specific regulations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 shadow-sm flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-500 opacity-10 animate-pulse-slow"></div>
                </div>
                <Bot className="w-32 h-32 text-blue-600 relative z-10" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <SolutionPoint 
              title="A Complete Virtual Team"
              description="Each essential development role is represented by a specialized AI agent, forming a virtual team available 24/7."
            />
            
            <SolutionPoint 
              title="Integrated Regulatory Knowledge"
              description="Agents are programmed with deep knowledge of applicable standards and regulations, ensuring native compliance."
            />
            
            <SolutionPoint 
              title="Intelligent Orchestration"
              description="An 'AI project manager' coordinates the whole, manages interdependencies, optimizes workflows, and maintains continuous compliance monitoring."
            />
            
            <SolutionPoint 
              title="Automated Deliverable Production"
              description="Automatic or semi-automatic generation of documentation, code, tests, and other artifacts compliant with regulatory requirements."
            />
            
            <SolutionPoint 
              title="Integration with Existing Tools"
              description="Seamless connection with your CAD, simulation, ALM, PLM, and other engineering tools."
            />
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100 shadow-sm">
            <p className="text-lg italic text-blue-800">
              "We don't replace human expertise, we multiply it. OrchestAll AI allows engineers to focus on innovation 
              while our AI agents take care of rigor and compliance."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;