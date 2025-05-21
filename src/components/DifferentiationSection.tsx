import React from 'react';
import { Check } from 'lucide-react';

interface ComparisonRowProps {
  competitor: string;
  theirApproach: string;
  ourDifference: string;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ competitor, theirApproach, ourDifference }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-semibold text-gray-900 mb-1">vs. {competitor}</h3>
      </div>
      
      <div className="p-4">
        <h4 className="text-sm uppercase text-gray-500 font-medium mb-1">Their Approach</h4>
        <p className="text-gray-700">{theirApproach}</p>
      </div>
      
      <div className="p-4 bg-blue-50 rounded-md">
        <h4 className="text-sm uppercase text-blue-700 font-medium mb-1">Our Difference</h4>
        <div className="flex">
          <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-blue-900">{ourDifference}</p>
        </div>
      </div>
    </div>
  );
};

const DifferentiationSection: React.FC = () => {
  return (
    <section id="differentiation" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            Why OrchestAll AI Surpasses Existing Approaches
          </h2>
          
          <div className="space-y-6">
            <ComparisonRow 
              competitor="Traditional Engineering Software Providers"
              theirApproach="Fragmented tools requiring manual integration"
              ourDifference="Unified platform with natively integrated compliance and intelligent end-to-end orchestration"
            />
            
            <ComparisonRow 
              competitor="Compliance Management Platforms"
              theirApproach="A posteriori compliance verification, separate from the development process"
              ourDifference="Proactive integration of regulatory requirements from design, automation of compliant deliverable production"
            />
            
            <ComparisonRow 
              competitor="AI Engineering Assistants"
              theirApproach="Generalist agents for isolated tasks, without deep knowledge of regulations"
              ourDifference="Specialized agents with integrated knowledge of standards, complete orchestration of the development cycle"
            />
            
            <ComparisonRow 
              competitor="Consulting Firms"
              theirApproach="Punctual interventions, dependence on human resources, high costs"
              ourDifference="Continuous assistance, perfect scalability, knowledge capitalization, significant cost reduction"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;