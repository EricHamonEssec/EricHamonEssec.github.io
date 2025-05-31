import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ArchitectureSection from './components/ArchitectureSection';
import BenefitsSection from './components/BenefitsSection';
import DifferentiationSection from './components/DifferentiationSection';
import UseCasesSection from './components/UseCasesSection';
import FaqSection from './components/FaqSection';
import RoadmapSection from './components/RoadmapSection';
import ContactSection from './components/ContactSection';
import ReqIfViewerSection from './components/ReqIfViewerSection';
import InvestorsSection from './components/InvestorsSection';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  React.useEffect(() => {
    document.title = "OrchestAll AI - AI Team Orchestration Platform";
    
    const favicon: HTMLLinkElement | null = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/vite.svg";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureSection />
      <BenefitsSection />
      <DifferentiationSection />
      <UseCasesSection />
      <InvestorsSection />
      <FaqSection />
      <RoadmapSection />
      <ReqIfViewerSection />
      <ContactSection />
      <Footer />
    </div>
  );
}