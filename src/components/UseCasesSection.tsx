import React from 'react';
import { Car, Plane, Stethoscope, Shield } from 'lucide-react';

interface UseCaseCardProps {
  title: string;
  challenges: string[];
  application: string;
  benefits: string[];
  icon: React.ReactNode;
  color: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  title, 
  challenges, 
  application, 
  benefits, 
  icon,
  color
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${color} h-full flex flex-col`}>
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm uppercase text-gray-500 font-medium mb-2">Challenges</h4>
        <ul className="space-y-1 text-gray-600">
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm uppercase text-gray-500 font-medium mb-2">Application</h4>
        <p className="text-gray-600">{application}</p>
      </div>
      
      <div>
        <h4 className="text-sm uppercase text-gray-500 font-medium mb-2">Benefits</h4>
        <ul className="space-y-1 text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            Applications in the Most Demanding Industries
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <UseCaseCard 
              title="Automotive"
              challenges={[
                "Compliance with A-SPICE, ISO 26262, WP.29, KGAS standards",
                "Increasing complexity of embedded systems"
              ]}
              application="Complete orchestration of automotive software development with systematic compliance verification"
              benefits={[
                "Reduction in development cycles",
                "Automated compliant documentation",
                "Perfect traceability for audits"
              ]}
              icon={<Car className="w-8 h-8 text-blue-500" />}
              color="border-blue-500"
            />
            
            <UseCaseCard 
              title="Aerospace"
              challenges={[
                "DO-178C standards",
                "Critical safety requirements",
                "Complex certification"
              ]}
              application="Specialized agents in aeronautical development processes and standards compliance"
              benefits={[
                "Certification risk reduction",
                "Quality improvement",
                "Development cycle acceleration"
              ]}
              icon={<Plane className="w-8 h-8 text-indigo-500" />}
              color="border-indigo-500"
            />
            
            <UseCaseCard 
              title="Medical"
              challenges={[
                "FDA regulations",
                "ISO 13485",
                "Exhaustive documentation required"
              ]}
              application="Automated production of regulatory documentation, requirements traceability"
              benefits={[
                "Accelerated time to market",
                "Reduced regulatory risks",
                "Guaranteed compliance"
              ]}
              icon={<Stethoscope className="w-8 h-8 text-green-500" />}
              color="border-green-500"
            />
            
            <UseCaseCard 
              title="Defense"
              challenges={[
                "Specific standards",
                "High security requirements",
                "Rigorous documentation"
              ]}
              application="Specialized agents in military standards and secure processes"
              benefits={[
                "Compliance with strict requirements",
                "Complete traceability",
                "Development cost reduction"
              ]}
              icon={<Shield className="w-8 h-8 text-red-500" />}
              color="border-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;