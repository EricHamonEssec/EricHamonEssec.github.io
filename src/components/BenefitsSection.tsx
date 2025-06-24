import React from 'react';
import { TrendingUp, Clock, CheckSquare, ShieldCheck, RefreshCw as Refresh } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  percentage?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, percentage }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-50 rounded-lg mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          {percentage && <p className="text-blue-600 font-bold">{percentage}</p>}
        </div>
      </div>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            Radically Transform Your Development Economics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <BenefitCard 
              title="Cost Reduction"
              description="Significantly reduce development costs by automating repetitive tasks and minimizing errors across the development lifecycle."
              icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
              percentage="30-70%"
            />
            
            <BenefitCard 
              title="Cycle Acceleration"
              description="Drastically reduce your time to market through automation and workflow optimization, gaining a decisive competitive advantage."
              icon={<Clock className="w-6 h-6 text-blue-600" />}
              percentage="Up to 50%"
            />
            
            <BenefitCard 
              title="Quality & Compliance Improvement"
              description="Benefit from better consistency between different phases, complete traceability of decisions, and systematic verification against industry standards."
              icon={<CheckSquare className="w-6 h-6 text-blue-600" />}
            />
            
            <BenefitCard 
              title="Certification Risk Reduction"
              description="The integrated compliance approach drastically reduces certification risks and costs, which traditionally represent a significant portion of development budgets."
              icon={<ShieldCheck className="w-6 h-6 text-blue-600" />}
            />
            
            <BenefitCard 
              title="Regulatory Evolution Adaptability"
              description="Agents are regularly updated to remain compliant with regulatory developments, eliminating the need for major reconfigurations."
              icon={<Refresh className="w-6 h-6 text-blue-600" />}
            />
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-lg italic text-gray-700 mb-4">
              "Thanks to OrchestAll AI, we reduced our development cycle from 18 to 9 months while improving our compliance with A-SPICE standards. Our engineers can finally focus on innovation rather than regulatory paperwork."
            </p>
            <p className="text-gray-500 font-medium">— R&D Director, Automotive Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;