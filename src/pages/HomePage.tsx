import React, { useState } from 'react';
import {
  ArrowRight,
  PhoneCall,
  CheckCircle,
  Building,
  Trophy,
  Headphones,
  ShieldCheck,
  DoorClosed,
  Zap,
  Droplets,
  Sparkles,
  ChevronRight,
  FileText,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { PageId } from '../types';
import {
  COMPANY_INFO,
  DIVISIONS,
  KEY_METRICS,
  PROJECTS,
  CLIENT_SECTORS,
  COMPLIANCE_ITEMS,
} from '../data/companyData';
import { BrandAssetShowcase } from '../components/BrandAssetShowcase';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'doors' | 'utilities' | 'cleaning'>('all');

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION - Matching Sample Mockup & Company Profile */}
      <section className="relative bg-[#003B56] text-white overflow-hidden min-h-[540px] lg:min-h-[620px] flex items-center">
        {/* Background Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/official_office_aicc_arusha.jpg"
            alt="KGSONS Corporate Office Location - AICC Kilimanjaro Hall, Arusha, Tanzania"
            className="w-full h-full object-cover object-center brightness-95 contrast-105"
          />
          {/* Subtle gradient overlay to ensure WCAG AA text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B56]/95 via-[#003B56]/75 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl space-y-6">
            {/* National Trust Marker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs text-sky-200">
              <span className="w-2 h-2 rounded-full bg-[#F9B51B]"></span>
              <span className="font-semibold tracking-wide">
                Arusha, Tanzania · NeST Registered Supplier
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              BUILDING QUALITY.{' '}
              <span className="text-[#F9B51B] block mt-1">
                DELIVERING EXCELLENCE.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed max-w-xl">
              <strong>KGSONS COMPANY LIMITED</strong> delivers dependable timber door manufacturing, building utility supplies, and professional facility care solutions across the United Republic of Tanzania.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('wooden-doors')}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full border border-white/30 backdrop-blur-xs transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#F9B51B]" />
                <span>CONTACT US</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Wave Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
      </section>

      {/* 2. OUR CORE BUSINESS DIVISIONS - Matching Mockup 4 Cards */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Golden Dividers */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-0.5 w-12 bg-[#F9B51B]"></div>
              <h2 className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#003B56]">
                OUR CORE BUSINESS DIVISIONS
              </h2>
              <div className="h-0.5 w-12 bg-[#F9B51B]"></div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Comprehensive solutions for your building, utility, and facility needs
            </p>
          </div>

          {/* 4 Core Division Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIVISIONS.map((division) => (
              <div
                key={division.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-200/80 group"
              >
                {/* Image & Badge Lockup */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={division.thumbnail}
                    alt={division.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Division Badge with Icon */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#003B56]/90 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2.5 text-white border border-sky-400/30">
                    <div className="w-8 h-8 rounded-lg bg-[#0799C2] flex items-center justify-center text-white shrink-0">
                      {division.id === 'wooden-doors' && <DoorClosed className="w-4 h-4" />}
                      {division.id === 'electrical' && <Zap className="w-4 h-4 text-[#F9B51B]" />}
                      {division.id === 'plumbing' && <Droplets className="w-4 h-4" />}
                      {division.id === 'facility-care' && <Sparkles className="w-4 h-4 text-[#F9B51B]" />}
                    </div>
                    <span className="text-xs font-bold leading-tight line-clamp-2">
                      {division.name}
                    </span>
                  </div>
                </div>

                {/* Card Description & CTA */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {division.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate(division.pageId)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full transition-colors active:scale-95 shadow-xs"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COUNTER STATS STRIP - In Deep Blue (#003B56) Matching Mockup */}
      <section className="bg-[#003B56] text-white py-10 px-4 sm:px-6 lg:px-8 border-y-2 border-[#F9B51B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-sky-800/60">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0799C2]/20 border border-[#0799C2]/40 flex items-center justify-center text-[#F9B51B] shrink-0">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Commitment to Quality Materials
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0799C2]/20 border border-[#0799C2]/40 flex items-center justify-center text-[#F9B51B] shrink-0">
                <Building className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  3
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Core Business Divisions
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0799C2]/20 border border-[#0799C2]/40 flex items-center justify-center text-[#F9B51B] shrink-0">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  50+
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Projects Supported Across Tanzania
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0799C2]/20 border border-[#0799C2]/40 flex items-center justify-center text-[#F9B51B] shrink-0">
                <Headphones className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  24/7
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Dedicated Customer Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A TRUSTED PARTNER FOR QUALITY SOLUTIONS - With Tanzanian Ribbon Banner */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column: Team Picture */}
              <div className="lg:col-span-5 h-72 lg:h-96 relative">
                <img
                  src="/assets/images/kgsons_team_aicc_arusha.jpg"
                  alt="KGSONS Executive Leadership and Engineering Team at Arusha International Conference Centre (AICC) Flag Courtyard"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-slate-900/90 lg:to-slate-900"></div>
              </div>

              {/* Right Column: Mission Content & Slogan */}
              <div className="lg:col-span-7 p-8 sm:p-12 text-white space-y-6 relative">
                {/* Yellow Headline Accent */}
                <div className="flex items-center gap-3">
                  <div className="h-1 w-10 bg-[#F9B51B]"></div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#F9B51B]">
                    A TRUSTED PARTNER FOR QUALITY SOLUTIONS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  KGSONS COMPANY LIMITED is a diversified Tanzanian business enterprise committed to delivering reliable products and professional services.
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Based in Arusha, we serve individual homebuilders, commercial contractors, real estate developers, educational institutions, and public sector agencies nationwide with integrity and technical rigor.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('about')}
                    className="flex items-center gap-2 px-6 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full transition-all active:scale-95 shadow-md"
                  >
                    <span>About KGSONS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={COMPANY_INFO.profilePdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-full border border-white/20 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#0799C2]" />
                    <span>Download Full 2026 Profile</span>
                  </a>
                </div>

                {/* Tanzanian Flag Graphic Banner with Slogan */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="w-3 h-3 rounded-full bg-[#F9B51B]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#0799C2]"></span>
                    <span className="w-3 h-3 rounded-full bg-slate-950"></span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Official Corporate Motto</span>
                    <span className="text-sm sm:text-base font-semibold text-[#F9B51B] italic">
                      "{COMPANY_INFO.motto}"
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BRAND ASSET SHOWCASE - Both Logos Celebrated */}
      <BrandAssetShowcase />

      {/* 6. FEATURED PROJECT PORTFOLIO SPOTLIGHT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0799C2] uppercase tracking-wider mb-2">
                <span>Proven Field Execution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B56] tracking-tight">
                Featured Projects Across Tanzania
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0799C2] hover:text-[#003B56] transition-colors"
            >
              <span>View All 50+ Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 flex flex-col"
              >
                <div className="h-52 relative overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#003B56]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {project.location}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {project.status}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-[#0799C2] block mb-1">
                      {project.clientCategory}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">{project.year}</span>
                    <button
                      onClick={() => onNavigate('projects')}
                      className="text-[#0799C2] hover:underline font-semibold flex items-center gap-1"
                    >
                      Inspect Specs
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REGULATORY COMPLIANCE & PARTNERS STRIP */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Government Accreditation & Registration
            </span>
            <h3 className="text-lg font-bold text-[#003B56]">
              Fully Registered. Transparent. Audit-Ready.
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {/* 1. BRELA */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:border-[#0799C2]/50 hover:shadow-md transition-all">
              <div className="w-full h-20 bg-slate-50/60 rounded-xl p-2.5 border border-slate-100 flex items-center justify-center shrink-0">
                <img src="/assets/images/cert_brela.png" alt="BRELA - Business Registrations and Licensing Agency" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  Certificate of Incorporation
                </div>
                <div className="text-[11px] text-slate-500 mt-1">BRELA · Companies Act 2002</div>
              </div>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Active & Verified
              </span>
            </div>

            {/* 2. TRA */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:border-[#0799C2]/50 hover:shadow-md transition-all">
              <div className="w-full h-20 bg-slate-50/60 rounded-xl p-2 border border-slate-100 flex items-center justify-center shrink-0">
                <img src="/assets/images/cert_tra.png" alt="TRA - Tanzania Revenue Authority" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  Tax Clearance & TIN
                </div>
                <div className="text-[11px] text-slate-500 mt-1">TRA · Active Electronic Filing</div>
              </div>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Good Standing
              </span>
            </div>

            {/* 3. NeST */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:border-[#0799C2]/50 hover:shadow-md transition-all">
              <div className="w-full h-20 bg-slate-50/60 rounded-xl p-2 border border-slate-100 flex items-center justify-center shrink-0">
                <img src="/assets/images/cert_nest.png" alt="NeST - National e-Procurement System of Tanzania" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  National e-Procurement
                </div>
                <div className="text-[11px] text-slate-500 mt-1">NeST · Approved Vendor Status</div>
              </div>
              <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Certified Supplier
              </span>
            </div>

            {/* 4. CRB Tanzania / Standards */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:border-[#0799C2]/50 hover:shadow-md transition-all">
              <div className="w-full h-20 bg-slate-50/60 rounded-xl p-2 border border-slate-100 flex items-center justify-center shrink-0">
                <img src="/assets/images/cert_quality.png" alt="CRB Tanzania - Contractors Registration Board" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                  Contractors Registration Board
                </div>
                <div className="text-[11px] text-slate-500 mt-1">CRB Tanzania · Safety Aligned</div>
              </div>
              <span className="text-[10px] text-sky-800 font-bold bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Audited & Registered
              </span>
            </div>
          </div>

          {/* National Partner Strip */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium">
              Registered Supplier & Active Partner across Tanzanian Authorities:
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-700">
              <span className="hover:text-[#0799C2] transition-colors">NeST e-Procurement</span>
              <span>·</span>
              <span className="hover:text-[#0799C2] transition-colors">BRELA Tanzania</span>
              <span>·</span>
              <span className="hover:text-[#0799C2] transition-colors">TRA Tax Authority</span>
              <span>·</span>
              <span className="hover:text-[#0799C2] transition-colors">TANTRADE</span>
              <span>·</span>
              <span className="hover:text-[#0799C2] transition-colors">TANESCO & DAWASA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUICK ENGAGEMENT CTA */}
      <section className="bg-gradient-to-r from-[#003B56] to-[#0799C2] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <span className="text-xs font-bold tracking-widest text-[#F9B51B] uppercase block">
            Let's Build a Stronger Tanzania
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Begin Your Construction or Facility Project?
          </h2>
          <p className="text-xs sm:text-sm text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Connect with our technical estimation engineers in Arusha for rapid bill of quantities review, timber door custom manufacturing specs, or institutional cleaning contracts.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all active:scale-95"
            >
              Request Free Formal Quotation
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
