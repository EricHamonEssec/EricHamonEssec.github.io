import React from 'react';
import { AlertTriangle, Clock, DollarSign, Users } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-red-50 rounded-xl mr-4">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-red-600">{value}</div>
          <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{label}</div>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Hidden Cost of 
              <span className="text-red-600"> Complex Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In regulated industries, product development has become a costly obstacle course. 
              Every project faces the same critical challenges that drain resources and delay innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <StatCard
              icon={<DollarSign className="w-8 h-8 text-red-600" />}
              value="45%"
              label="Budget Overrun"
              description="Average cost increase from initial estimates in regulated development projects"
            />
            
            <StatCard
              icon={<Clock className="w-8 h-8 text-red-600" />}
              value="60%"
              label="Schedule Delays"
              description="Typical timeline extension beyond planned delivery dates"
            />
            
            <StatCard
              icon={<AlertTriangle className="w-8 h-8 text-red-600" />}
              value="73%"
              label="Compliance Issues"
              description="Projects experiencing regulatory compliance problems during development"
            />
            
            <StatCard
              icon={<Users className="w-8 h-8 text-red-600" />}
              value="40%"
              label="Resource Waste"
              description="Time spent on manual, repetitive compliance tasks instead of innovation"
            />
          </div>
          
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Traditional Approaches Fail
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fragmented Workflows</h4>
                    <p className="text-gray-600">Disconnected tools and processes create information silos, leading to errors and inefficiencies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Manual Compliance</h4>
                    <p className="text-gray-600">Reactive compliance checking after development phases, causing costly rework and delays.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Resource Constraints</h4>
                    <p className="text-gray-600">Dependence on scarce, highly specialized human resources that become bottlenecks.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Evolving Regulations</h4>
                    <p className="text-gray-600">Constant regulatory changes require expensive reconfigurations and expert consultations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;