import React from 'react';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="text-2xl font-bold">OrchestAll AI</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transforming complex product development with AI-powered orchestration. 
                Reduce costs, accelerate timelines, and ensure perfect regulatory compliance.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/orchestall-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Visit OrchestAll AI on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/orchestallai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Visit OrchestAll AI on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@orchestallai.com"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Email OrchestAll AI"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-4">
                <li><a href="#solution" className="text-gray-300 hover:text-white transition-colors">Solution</a></li>
                <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Industries</a></li>
                <li><a href="#reqif-viewer" className="text-gray-300 hover:text-white transition-colors">ReqIF Viewer</a></li>
                <li><a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#investors" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 OrchestAll AI. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;