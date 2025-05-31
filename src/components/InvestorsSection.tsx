import React from 'react';
import { TrendingUp, Users, LineChart, Rocket } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const InvestorsSection: React.FC = () => {
  return (
    <section id="investors" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Investment Opportunity
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 text-center">
            Join us in revolutionizing complex product development with AI-powered orchestration
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <MetricCard
              title="Market Size"
              value="$50B+"
              description="Total addressable market in regulated product development"
              icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
            />
            
            <MetricCard
              title="Customer Base"
              value="500+"
              description="Potential enterprise customers identified in target sectors"
              icon={<Users className="w-6 h-6 text-blue-600" />}
            />
            
            <MetricCard
              title="Growth Potential"
              value="300%"
              description="Projected annual growth rate for next 3 years"
              icon={<LineChart className="w-6 h-6 text-blue-600" />}
            />
            
            <MetricCard
              title="Time to Market"
              value="50%"
              description="Average reduction in development cycles for customers"
              icon={<Rocket className="w-6 h-6 text-blue-600" />}
            />
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Why Invest in OrchestAll AI?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p className="text-blue-800">First-mover advantage in AI-powered development orchestration for regulated industries</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p className="text-blue-800">Proven leadership team with 25+ years of industry experience</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p className="text-blue-800">Patented technology combining AI agents with regulatory compliance</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p className="text-blue-800">Strong partnerships with industry leaders and regulatory bodies</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;