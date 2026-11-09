import React from 'react';
import {
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  Hammer,
  Zap,
  Droplets,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/companyData';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0799C2]">Home</button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Our Team</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Executive Leadership & Field Specialists
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Team Members & Operational Leadership
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Contact Our Engineers
            </button>
          </div>
        </div>

        {/* Group Photo Showcase */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900">
            <img
              src="/assets/images/kgsons_team_aicc_arusha.jpg"
              alt="KGSONS Company Limited Full Team & Executive Leadership at AICC Arusha Flag Courtyard"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                A Skilled, Dedicated & Professional Team
              </span>
              <h2 className="text-2xl font-bold text-[#003B56]">
                United by Craftsmanship, Safety and National Pride
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our success is driven by a multidisciplinary team of master timber carpenters, certified electrical engineers, professional hydraulic plumbers, and dedicated cleaning specialists committed to maintaining the highest standards of workmanship.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-around bg-sky-50 p-4 rounded-2xl border border-sky-100 text-center">
              <div>
                <span className="text-2xl font-black text-[#003B56]">100%</span>
                <span className="text-[10px] text-slate-600 block">Tanzanian Talent</span>
              </div>
              <div className="h-8 w-px bg-sky-200"></div>
              <div>
                <span className="text-2xl font-black text-[#F9B51B]">Continuous</span>
                <span className="text-[10px] text-slate-600 block">HSE Safety Drills</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Team Categories (From PDF Page 14) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Field Specialists
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Our Key Team Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Skilled Craft Specialists (Carpenters) */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="h-44 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src="/assets/images/african_carpenter_workshop.jpg"
                    alt="Master Wood Carpenter in Arusha Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Hammer className="w-4 h-4 text-[#F9B51B]" />
                  <h3 className="font-bold text-sm text-slate-900">
                    Skilled Craft Specialists (Carpenters)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Trained in hardwood milling, computer joinery, mortise fitting, and bespoke architectural wood door assembly.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-[#0799C2] pt-2 border-t border-slate-100">
                Arusha Timber Workshop Crew
              </div>
            </div>

            {/* 2. Certified Electrical Technicians */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="h-44 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src="/assets/images/african_electrician_switchgear.jpg"
                    alt="Certified Electrical Technician at Switchgear"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-[#0799C2]" />
                  <h3 className="font-bold text-sm text-slate-900">
                    Certified Electrical Technicians
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Licensed power distribution installers, three-phase switchgear assemblers, and TBS quality audit engineers.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-[#F9B51B] pt-2 border-t border-slate-100">
                Utilities Installation Unit
              </div>
            </div>

            {/* 3. Professional Plumbers */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="h-44 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src="/assets/images/african_plumber_installation.jpg"
                    alt="Professional Plumber Installing PPR Pipes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Droplets className="w-4 h-4 text-[#0799C2]" />
                  <h3 className="font-bold text-sm text-slate-900">
                    Professional Plumbers
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Specialists in PPR fusion welding, high-pressure booster systems, sanitary fitting, and complex subterranean drainage.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-[#0799C2] pt-2 border-t border-slate-100">
                Hydraulic Network Technicians
              </div>
            </div>

            {/* 4. Cleaning Specialists */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="h-44 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src="/assets/images/african_cleaning_team_office.jpg"
                    alt="Facility Cleaning Specialists in Arusha Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#F9B51B]" />
                  <h3 className="font-bold text-sm text-slate-900">
                    Cleaning Specialists
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Expertly trained in post-construction handover scrubbing, floor crystallization, high-rise glass care, and green sanitization.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-emerald-600 pt-2 border-t border-slate-100">
                Facility Care Services Crew
              </div>
            </div>
          </div>
        </section>

        {/* Operational Pillars */}
        <section className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 border border-sky-900">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="space-y-2">
              <span className="text-2xl font-bold text-[#F9B51B] block">01</span>
              <span className="text-xs font-bold">Experienced Team</span>
              <p className="text-[11px] text-slate-300">Decades of combined technical expertise</p>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-bold text-[#F9B51B] block">02</span>
              <span className="text-xs font-bold">Professionalism</span>
              <p className="text-[11px] text-slate-300">Exemplary site protocol & presentation</p>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-bold text-[#F9B51B] block">03</span>
              <span className="text-xs font-bold">Commitment to Quality</span>
              <p className="text-[11px] text-slate-300">Zero tolerance for compromised materials</p>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-bold text-[#F9B51B] block">04</span>
              <span className="text-xs font-bold">Customer Focus</span>
              <p className="text-[11px] text-slate-300">Responsive communication & flexibility</p>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <span className="text-2xl font-bold text-[#F9B51B] block">05</span>
              <span className="text-xs font-bold">Innovation</span>
              <p className="text-[11px] text-slate-300">Adopting modern precision tooling</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
