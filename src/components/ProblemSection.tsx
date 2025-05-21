import React from 'react';

interface ProblemPointProps {
  title: string;
  description: string;
}

const ProblemPoint: React.FC<ProblemPointProps> = ({ title, description }) => {
  return (
    <div className="mb-6 md:mb-8">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Complex Product Development: A Costly and Risky Challenge
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 text-center">
            In today's industrial world, developing complex technical products represents a genuine obstacle course. 
            Mechatronic systems, vehicles, industrial equipment, and other technical products must comply with a multitude 
            of regulations and development standards that require costly, lengthy, and risky processes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <ProblemPoint 
              title="High Costs and Endless Cycles"
              description="Technical projects mobilize multidisciplinary teams composed of rare and highly qualified profiles, resulting in substantial budgets and extended timelines."
            />
            
            <ProblemPoint 
              title="Fragmentation into Silos"
              description="The separation of activities into silos creates breaks in the flow of information and complicates coordination between different development phases."
            />
            
            <ProblemPoint 
              title="Lack of Traceability"
              description="The absence of rigorous traceability between requirements, design, implementation, and testing generates risks of non-compliance and difficulties during audits."
            />
            
            <ProblemPoint 
              title="Dependence on Manual Processes"
              description="Many critical steps still rely on manual processes, sources of errors and inefficiencies."
            />
            
            <ProblemPoint 
              title="Increasing Complexity"
              description="The constant evolution of products and regulatory frameworks exponentially increases project complexity."
            />
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100 shadow-sm">
            <p className="text-lg font-medium text-blue-800 mb-2">Impact Statistic</p>
            <p className="text-xl md:text-2xl font-bold text-blue-900">
              Technical projects in regulated environments experience an average of 45% budget overrun and 60% delay on initial schedules.
            </p>
          </div>
          
          <p className="mt-8 text-gray-700 italic">
            Traditional project management methods are reaching their limits in the face of these challenges. 
            A radically new approach is necessary to transform the economics of complex product development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;