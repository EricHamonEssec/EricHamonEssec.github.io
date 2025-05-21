import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      <div className={`mt-3 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number>(0);
  
  const faqs = [
    {
      question: "How does OrchestAll AI integrate with our existing tools?",
      answer: "OrchestAll AI is designed to integrate seamlessly with your existing engineering tools (PLM, ERP, CAD, simulation, compliance management tools). Our platform uses standard connectors and APIs to communicate with these systems, allowing for gradual adoption without disruption to your current processes."
    },
    {
      question: "What is the learning curve for adopting OrchestAll AI?",
      answer: "The platform has been designed for quick onboarding. A few days of initial training is generally sufficient for your teams to start leveraging OrchestAll AI's capabilities. Our progressive deployment approach allows integrating the solution step by step, starting with the use cases with the highest return on investment."
    },
    {
      question: "How do agents stay updated with evolving regulations?",
      answer: "We offer a regulatory update service that ensures our agents stay current with the latest developments in standards and regulations. Our team of experts continuously monitors regulatory changes and updates the agents' knowledge base accordingly."
    },
    {
      question: "What about data security with OrchestAll AI?",
      answer: "Security is a top priority. OrchestAll AI can be deployed in your secure environment or in a private cloud with appropriate data protection measures. All data is encrypted, and we adhere to the strictest security standards, including TISAX® for the automotive industry."
    },
    {
      question: "Does OrchestAll AI completely replace human teams?",
      answer: "No, OrchestAll AI is designed to augment your teams' capabilities, not replace them. Our solution automates repetitive, time-consuming, and low-value-added tasks, allowing your experts to focus on innovation, strategic decisions, and creative aspects of development."
    },
    {
      question: "What are the technical prerequisites for deploying OrchestAll AI?",
      answer: "Prerequisites vary depending on the chosen configuration, but generally, OrchestAll AI requires a modern environment capable of running containers, with connections to existing systems via standard APIs. Our technical team conducts a preliminary assessment to determine the specific needs for your context."
    }
  ];
  
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                toggleOpen={() => setOpenItem(openItem === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;