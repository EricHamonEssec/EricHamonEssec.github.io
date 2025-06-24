import React from 'react';
import { Bot, Zap, Shield, Workflow } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-6">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Virtual AI Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OrchestAll AI transforms complex product development with specialized AI agents that work together 
              as a complete virtual team, ensuring compliance and accelerating innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-blue-600" />}
              title="AI Specialists"
              description="Each role in your development process is handled by a dedicated AI agent with deep domain expertise."
              features={[
                "Requirements analysts",
                "System architects", 
                "Compliance validators",
                "Test engineers"
              ]}
            />
            
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-600" />}
              title="Built-in Compliance"
              description="Regulatory knowledge is embedded in every agent, ensuring native compliance throughout development."
              features={[
                "A-SPICE standards",
                "ISO 26262 safety",
                "DO-178C aerospace",
                "FDA medical devices"
              ]}
            />
            
            <FeatureCard
              icon={<Workflow className="w-8 h-8 text-purple-600" />}
              title="Smart Orchestration"
              description="An AI project manager coordinates all agents, optimizing workflows and maintaining perfect traceability."
              features={[
                "Automated task routing",
                "Dependency management",
                "Progress monitoring",
                "Quality assurance"
              ]}
            />
            
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-orange-600" />}
              title="Tool Integration"
              description="Seamlessly connects with your existing engineering tools and automatically generates compliant deliverables."
              features={[
                "CAD/PLM systems",
                "Simulation tools",
                "Testing platforms",
                "Documentation systems"
              ]}
            />
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-12 rounded-3xl border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The OrchestAll AI Advantage
              </h3>
              <p className="text-lg text-gray-700">
                We don't replace human expertise—we amplify it. Our AI agents handle the repetitive, 
                compliance-heavy tasks so your engineers can focus on innovation and creative problem-solving.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700">Always available virtual team</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700">Consistent compliance checking</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
                <div className="text-gray-700">Unlimited scalability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;