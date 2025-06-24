import React from 'react';
import { TrendingDown, Clock, CheckCircle, Shield, Repeat } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, value, description, color }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center mb-6">
        <div className={`p-4 ${color} rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="text-3xl font-bold text-blue-600 mt-1">{value}</div>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="text-green-600"> Development Economics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience dramatic improvements in cost, speed, and quality while maintaining 
              perfect regulatory compliance across your entire development lifecycle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <BenefitCard
              icon={<TrendingDown className="w-8 h-8 text-green-600" />}
              title="Cost Reduction"
              value="30-70%"
              description="Dramatically reduce development costs by automating repetitive tasks and eliminating costly rework cycles."
              color="bg-green-50"
            />
            
            <BenefitCard
              icon={<Clock className="w-8 h-8 text-blue-600" />}
              title="Faster Time-to-Market"
              value="Up to 50%"
              description="Accelerate your development cycles through intelligent automation and parallel processing capabilities."
              color="bg-blue-50"
            />
            
            <BenefitCard
              icon={<CheckCircle className="w-8 h-8 text-purple-600" />}
              title="Quality Improvement"
              value="99.9%"
              description="Achieve consistent quality with automated verification, complete traceability, and systematic compliance checking."
              color="bg-purple-50"
            />
            
            <BenefitCard
              icon={<Shield className="w-8 h-8 text-indigo-600" />}
              title="Certification Risk"
              value="85% Lower"
              description="Minimize certification risks with built-in compliance verification and automated regulatory documentation."
              color="bg-indigo-50"
            />
            
            <BenefitCard
              icon={<Repeat className="w-8 h-8 text-orange-600" />}
              title="Regulatory Updates"
              value="Automatic"
              description="Stay current with evolving regulations through continuous agent updates and knowledge base maintenance."
              color="bg-orange-50"
            />
          </div>
          
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl font-medium text-gray-900 mb-8 text-center italic">
                "OrchestAll AI transformed our development process. We reduced our automotive software 
                development cycle from 18 to 9 months while improving A-SPICE compliance. Our engineers 
                now focus on innovation instead of regulatory paperwork."
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marie Dubois</div>
                  <div className="text-gray-600">R&D Director, Automotive Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;