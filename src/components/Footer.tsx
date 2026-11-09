import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  Heart,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO, DIVISIONS } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#003B56] text-white pt-16 pb-8 border-t-4 border-[#F9B51B]">
      {/* Top Brand & Approved Assets Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-sky-950/60 rounded-2xl p-6 sm:p-8 border border-sky-800/50 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="bg-white p-3 rounded-xl shadow-md shrink-0">
              <img
                src={COMPANY_INFO.logos.primaryBlue}
                alt="KGSONS Primary Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F9B51B] block">
                Official Corporate Identity
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-slate-300 italic mt-0.5">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-[#F9B51B] hover:bg-[#e5a412] rounded-full transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Request Corporate Quote
            </button>
            <a
              href={COMPANY_INFO.profilePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-800/80 hover:bg-sky-700 rounded-full border border-sky-600 transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-[#F9B51B]" />
              <span>Download Company Profile (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sky-800/60">
          {/* Column 1: Corporate Profile & Approved Alternate Logo */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F9B51B]">
              Approved Brand Assets
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              KGSONS maintains brand continuity with both its newly supplied primary blue identity and its original official 2026 company profile artwork.
            </p>

            {/* Approved Alternate Logo Showcase Box */}
            <div className="bg-white/95 rounded-xl p-3 border border-sky-600/40 shadow-xs">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Alternate Approved Asset</span>
                <span className="text-[#00A8B5] font-semibold">Profile 2026</span>
              </div>
              <img
                src={COMPANY_INFO.logos.originalProfile}
                alt="KGSONS Original Profile Logo - Approved Brand Asset"
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-sky-200">
              <ShieldCheck className="w-4 h-4 text-[#F9B51B] shrink-0" />
              <span>NeST Registered & BRELA Incorporated</span>
            </div>
          </div>

          {/* Column 2: Core Divisions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F9B51B]">
              Core Business Divisions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <button
                    onClick={() => {
                      onNavigate(div.pageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#F9B51B] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#0799C2]" />
                    <span>{div.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors flex items-center gap-1.5 font-semibold text-sky-200"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#F9B51B]" />
                  <span>View Projects Portfolio Across Tanzania</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Corporate Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F9B51B]">
              Corporate Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  About Us & Chairman's Message
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('history');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  Company History & Milestones
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('vision-mission');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  Vision, Mission & Core Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('team');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  Management & Team Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('compliance');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  Compliance, BRELA & Tax Clearance
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('hse');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  Health, Safety & Environment (HSE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('future-strategy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  Future Strategy & Sustainability
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F9B51B]">
              Locations & Contact Lines
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F9B51B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Headquarters:</strong> AICC, Kilimanjaro Hall, Room 341, Arusha
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0799C2] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Warehouse Hub:</strong> Kizota-Mnada Mpya, Dodoma, Tanzania
                </div>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-sky-800/40">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F9B51B] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-[#F9B51B] font-bold text-white">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 pl-5 text-[11px]">
                  <a href="tel:255742296631" className="hover:text-[#F9B51B] text-sky-200">
                    0742 296 631
                  </a>
                  <span>·</span>
                  <a href="tel:255767172693" className="hover:text-[#F9B51B] text-sky-200">
                    0767 172 693
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0799C2] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#F9B51B] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-sky-800/40">
                <p>{COMPANY_INFO.workingHours}</p>
                <p className="text-amber-300 font-medium mt-0.5">
                  {COMPANY_INFO.emergencySupport}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Motto */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span className="text-[#F9B51B]">★</span>
            <span className="tracking-wide text-slate-200">
              {COMPANY_INFO.motto}
            </span>
            <span className="text-[#F9B51B]">★</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => {
                onNavigate('compliance');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              Regulatory Notice
            </button>
            <span>·</span>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              Arusha Headquarters
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
