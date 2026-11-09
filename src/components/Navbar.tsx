import React, { useState } from 'react';
import { ChevronDown, Send, Menu, X, FileText, PhoneCall, Cloud } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [complianceDropdownOpen, setComplianceDropdownOpen] = useState(false);

  const handlePageSelect = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setComplianceDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAboutActive = ['about', 'history', 'vision-mission'].includes(currentPage);
  const isServicesActive = ['wooden-doors', 'electrical', 'plumbing', 'facility-care'].includes(currentPage);
  const isComplianceActive = ['compliance', 'hse', 'future-strategy'].includes(currentPage);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo - Newly supplied Blue Logo as Primary Website Logo */}
          <div
            onClick={() => handlePageSelect('home')}
            className="cursor-pointer shrink-0 flex items-center py-2 group"
          >
            <img
              src={COMPANY_INFO.logos.primaryBlue}
              alt="KGSONS COMPANY LIMITED Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
            {/* Home */}
            <button
              onClick={() => handlePageSelect('home')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'home'
                  ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                  : 'hover:text-[#0799C2] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handlePageSelect('about')}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                  isAboutActive
                    ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                    : 'hover:text-[#0799C2] hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#0799C2]" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <button
                    onClick={() => handlePageSelect('about')}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-[#0799C2] flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">Company Overview</span>
                    <span className="text-slate-500 text-[11px]">Enterprise background & MD message</span>
                  </button>
                  <button
                    onClick={() => handlePageSelect('history')}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-[#0799C2] flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">Company History & Milestones</span>
                    <span className="text-slate-500 text-[11px]">Growth journey since foundation</span>
                  </button>
                  <button
                    onClick={() => handlePageSelect('vision-mission')}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-[#0799C2] flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">Vision, Mission & Core Values</span>
                    <span className="text-slate-500 text-[11px]">6 pillars of organizational integrity</span>
                  </button>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                  isServicesActive
                    ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                    : 'hover:text-[#0799C2] hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Core Business Divisions
                  </div>
                  <button
                    onClick={() => handlePageSelect('wooden-doors')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-amber-50 hover:text-[#003B56] flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-[#0799C2]">
                        Wooden Door Manufacturing
                      </div>
                      <div className="text-[11px] text-slate-500">Custom joinery & timber solutions</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handlePageSelect('electrical')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-amber-50 hover:text-[#003B56] flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-[#0799C2]">
                        Electrical Supplies
                      </div>
                      <div className="text-[11px] text-slate-500">Cables, switchgear & panels</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handlePageSelect('plumbing')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-amber-50 hover:text-[#003B56] flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-[#0799C2]">
                        Plumbing Supplies
                      </div>
                      <div className="text-[11px] text-slate-500">Pipes, fittings & sanitary ware</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handlePageSelect('facility-care')}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-amber-50 hover:text-[#003B56] flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-[#0799C2]">
                        Facility Care & Cleaning
                      </div>
                      <div className="text-[11px] text-slate-500">Commercial & compound maintenance</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Projects */}
            <button
              onClick={() => handlePageSelect('projects')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'projects'
                  ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                  : 'hover:text-[#0799C2] hover:bg-slate-50'
              }`}
            >
              Projects
            </button>

            {/* Our Team */}
            <button
              onClick={() => handlePageSelect('team')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'team'
                  ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                  : 'hover:text-[#0799C2] hover:bg-slate-50'
              }`}
            >
              Our Team
            </button>

            {/* Compliance Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setComplianceDropdownOpen(true)}
              onMouseLeave={() => setComplianceDropdownOpen(false)}
            >
              <button
                onClick={() => handlePageSelect('compliance')}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                  isComplianceActive
                    ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                    : 'hover:text-[#0799C2] hover:bg-slate-50'
                }`}
              >
                <span>Compliance</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {complianceDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <button
                    onClick={() => handlePageSelect('compliance')}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-[#0799C2] flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">Certifications & Approvals</span>
                    <span className="text-slate-500 text-[11px]">BRELA, TRA TIN & NeST Supplier</span>
                  </button>
                  <button
                    onClick={() => handlePageSelect('hse')}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-[#0799C2] flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">Health, Safety & Environment</span>
                    <span className="text-slate-500 text-[11px]">HSE policy & safe workplace</span>
                  </button>
                  <button
                    onClick={() => handlePageSelect('future-strategy')}
                    className="w-full text-left px-4 py-2.5 text-xs hover:bg-sky-50 hover:text-[#0799C2] flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">Future Strategy & Sustainability</span>
                    <span className="text-slate-500 text-[11px]">Machinery expansion & green vision</span>
                  </button>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handlePageSelect('contact')}
              className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'contact'
                  ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                  : 'hover:text-[#0799C2] hover:bg-slate-50'
              }`}
            >
              Contact
            </button>

            {/* Google Drive Cloud Sync */}
            <button
              onClick={() => handlePageSelect('google-drive')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                currentPage === 'google-drive'
                  ? 'text-[#0799C2] font-bold border-b-2 border-[#0799C2]'
                  : 'hover:text-[#0799C2] hover:bg-slate-50'
              }`}
              title="Google Drive Cloud Storage & Codebase Backup"
            >
              <Cloud className="w-4 h-4 text-[#0799C2]" />
              <span>Google Drive</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.profilePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              title="Download KGSONS Company Profile 2026 PDF"
            >
              <FileText className="w-3.5 h-3.5 text-[#0799C2]" />
              <span>PDF Profile</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-[#F9B51B] hover:bg-[#e5a412] active:scale-95 rounded-full shadow-md hover:shadow-lg transition-all tracking-wider uppercase whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>GET A QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="sm:hidden flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-900 bg-[#F9B51B] rounded-full"
            >
              <span>QUOTE</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0799C2] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handlePageSelect('home')}
            className={`w-full text-left px-3 py-2 rounded-md font-semibold text-sm ${
              currentPage === 'home' ? 'bg-sky-50 text-[#0799C2]' : 'text-slate-800'
            }`}
          >
            Home
          </button>

          <div className="py-1 border-t border-slate-100">
            <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
              About KGSONS
            </div>
            <button
              onClick={() => handlePageSelect('about')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              About Company & MD Message
            </button>
            <button
              onClick={() => handlePageSelect('history')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Company History & Milestones
            </button>
            <button
              onClick={() => handlePageSelect('vision-mission')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Vision, Mission & Core Values
            </button>
          </div>

          <div className="py-1 border-t border-slate-100">
            <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Core Divisions
            </div>
            <button
              onClick={() => handlePageSelect('wooden-doors')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Wooden Door Manufacturing
            </button>
            <button
              onClick={() => handlePageSelect('electrical')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Electrical Equipment & Supplies
            </button>
            <button
              onClick={() => handlePageSelect('plumbing')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Plumbing Fixtures & Fittings
            </button>
            <button
              onClick={() => handlePageSelect('facility-care')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Facility Care & Cleaning Services
            </button>
          </div>

          <button
            onClick={() => handlePageSelect('projects')}
            className={`w-full text-left px-3 py-2 rounded-md font-semibold text-sm ${
              currentPage === 'projects' ? 'bg-sky-50 text-[#0799C2]' : 'text-slate-800'
            }`}
          >
            Projects Portfolio
          </button>

          <button
            onClick={() => handlePageSelect('team')}
            className={`w-full text-left px-3 py-2 rounded-md font-semibold text-sm ${
              currentPage === 'team' ? 'bg-sky-50 text-[#0799C2]' : 'text-slate-800'
            }`}
          >
            Our Team & Leadership
          </button>

          <div className="py-1 border-t border-slate-100">
            <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Governance & Strategy
            </div>
            <button
              onClick={() => handlePageSelect('compliance')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Compliance & Certifications
            </button>
            <button
              onClick={() => handlePageSelect('hse')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Health, Safety & Environment (HSE)
            </button>
            <button
              onClick={() => handlePageSelect('future-strategy')}
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:text-[#0799C2]"
            >
              Future Strategy & Sustainability
            </button>
          </div>

          <button
            onClick={() => handlePageSelect('contact')}
            className={`w-full text-left px-3 py-2 rounded-md font-semibold text-sm ${
              currentPage === 'contact' ? 'bg-sky-50 text-[#0799C2]' : 'text-slate-800'
            }`}
          >
            Contact Information
          </button>

          <button
            onClick={() => handlePageSelect('google-drive')}
            className={`w-full text-left px-3 py-2 rounded-md font-semibold text-sm flex items-center gap-2 ${
              currentPage === 'google-drive' ? 'bg-sky-50 text-[#0799C2]' : 'text-slate-800'
            }`}
          >
            <Cloud className="w-4 h-4 text-[#0799C2]" />
            <span>Google Drive & Cloud Sync</span>
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-[#003B56] rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-[#F9B51B]" />
              <span>Call +255 769 328 553</span>
            </a>
            <a
              href={COMPANY_INFO.profilePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
            >
              <FileText className="w-4 h-4 text-[#0799C2]" />
              <span>Download Official PDF Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
