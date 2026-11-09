import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HistoryPage } from './pages/HistoryPage';
import { VisionMissionPage } from './pages/VisionMissionPage';
import { WoodenDoorsPage } from './pages/WoodenDoorsPage';
import { ElectricalPage } from './pages/ElectricalPage';
import { PlumbingPage } from './pages/PlumbingPage';
import { CleaningPage } from './pages/CleaningPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';
import { CompliancePage } from './pages/CompliancePage';
import { HsePage } from './pages/HsePage';
import { StrategyPage } from './pages/StrategyPage';
import { ContactPage } from './pages/ContactPage';
import { GoogleDrivePage } from './pages/GoogleDrivePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteDivision, setQuoteDivision] = useState<string>('wooden-doors');

  const handleNavigate = (page: PageId, divisionKey?: string) => {
    setCurrentPage(page);
    if (divisionKey) {
      setQuoteDivision(divisionKey);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (division?: string) => {
    if (division) setQuoteDivision(division);
    setIsQuoteOpen(true);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#0799C2] selection:text-white">
      {/* 1. Official Top Information Bar */}
      <TopBar onNavigate={handleNavigate} />

      {/* 2. Main Navigation Header (features primary blue logo) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* 3. Main Page Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'history' && (
          <HistoryPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'vision-mission' && (
          <VisionMissionPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'wooden-doors' && (
          <WoodenDoorsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote('wooden-doors')}
          />
        )}

        {currentPage === 'electrical' && (
          <ElectricalPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote('electrical')}
          />
        )}

        {currentPage === 'plumbing' && (
          <PlumbingPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote('plumbing')}
          />
        )}

        {currentPage === 'facility-care' && (
          <CleaningPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote('facility-care')}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'team' && (
          <TeamPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'compliance' && (
          <CompliancePage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'hse' && (
          <HsePage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'future-strategy' && (
          <StrategyPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'google-drive' && (
          <GoogleDrivePage />
        )}
      </main>

      {/* 4. Official Corporate Footer (showcases both logo versions) */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* 5. Floating WhatsApp Concierge Desk */}
      <WhatsAppButton />

      {/* 6. Request a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedDivision={quoteDivision}
      />
    </div>
  );
}
