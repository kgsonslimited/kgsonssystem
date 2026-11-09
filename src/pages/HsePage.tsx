import React from 'react';
import {
  ShieldAlert,
  HardHat,
  Leaf,
  Recycle,
  CheckCircle2,
  HeartPulse,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface HsePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const HsePage: React.FC<HsePageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0799C2]">Home</button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Health, Safety & Environment</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                Workplace Safety & Environmental Stewardship
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Health, Safety & Environment (HSE)
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Request HSE Policy Manual
            </button>
          </div>
        </div>

        {/* HSE Hero Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                Safe Operations · Clean Industry · Greener Tomorrow
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] leading-tight">
                Our Commitment to a Safe, Healthy and Sustainable Future
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At <strong>KGSONS COMPANY LIMITED</strong>, we prioritize the health and safety of our people, our clients, and the natural environment. Our comprehensive HSE policy ensures responsible operations, strict compliance with Tanzanian OSHA guidelines, and ecological conservation across every workshop and site installation.
              </p>

              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-center gap-3">
                <Leaf className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="text-xs text-emerald-950 font-medium">
                  <strong>Zero-Harm Target:</strong> Rigorous daily safety briefings, mandatory PPE compliance, and zero tolerated safety shortcuts across all timber milling and electrical works.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/service_electrical_supplies.jpg"
                  alt="KGSONS Certified African Safety Engineer with PPE on Construction Site"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2 Core HSE Pillars (From PDF Page 18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Health & Safety Our Priority */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Health & Safety Our Priority</h3>
                <p className="text-xs text-slate-500">Personnel protection & accident prevention</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              {[
                { title: 'Strict Workplace Protocols', desc: 'Guarded wood joinery saws, dust extraction ventilation, and daily site checklists.' },
                { title: 'Continuous Safety Training', desc: 'Periodic OSHA safety workshops for carpenters, electricians, plumbers, and cleaning teams.' },
                { title: 'Mandatory PPE Enforcement', desc: 'Hard hats, safety boots, eye goggles, ear defenders, high-vis vests, and non-slip gloves.' },
                { title: 'Emergency Preparedness', desc: 'First aid trained site supervisors, wall-mounted extinguishers, and documented fire evacuation paths.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B51B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">{item.title}</strong>
                    <span className="text-slate-600 text-[11px]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Environment Our Responsibility */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Environment Our Responsibility</h3>
                <p className="text-xs text-slate-500">Eco-conscious timber & low-waste logistics</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              {[
                { title: 'Sustainable Timber Sourcing', desc: 'Procuring certified wood only from licensed Tanzanian forestry plantations with replanting programs.' },
                { title: 'Responsible Waste Disposal', desc: 'Wood sawdust briquetting for clean biofuel, PVC offcut recycling, and segregated municipal disposal.' },
                { title: 'Safe Chemical Management', desc: 'Eco-certified biodegradable detergents and low-VOC wood varnishes for healthier indoor air.' },
                { title: 'NEMC Regulatory Compliance', desc: 'Adhering to the National Environment Management Act regulations of Tanzania.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">{item.title}</strong>
                    <span className="text-slate-600 text-[11px]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 HSE Focus Areas Grid (From PDF Page 18) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Field Execution
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Our HSE Policy Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#003B56] text-white p-6 rounded-2xl border border-sky-800 space-y-2">
              <span className="text-2xl font-black text-[#F9B51B] block">01</span>
              <h3 className="font-bold text-sm">Workplace Safety & Training</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Routine toolbox talks before every shift and proactive hazard identification.
              </p>
            </div>
            <div className="bg-[#003B56] text-white p-6 rounded-2xl border border-sky-800 space-y-2">
              <span className="text-2xl font-black text-[#F9B51B] block">02</span>
              <h3 className="font-bold text-sm">Waste Management & Recycling</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Color-coded sorting bins deployed across our facilities and project sites.
              </p>
            </div>
            <div className="bg-[#003B56] text-white p-6 rounded-2xl border border-sky-800 space-y-2">
              <span className="text-2xl font-black text-[#F9B51B] block">03</span>
              <h3 className="font-bold text-sm">Safe Working Environment</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clean well-lit assembly spaces with ergonomic layout to prevent worker fatigue.
              </p>
            </div>
            <div className="bg-[#003B56] text-white p-6 rounded-2xl border border-sky-800 space-y-2">
              <span className="text-2xl font-black text-[#F9B51B] block">04</span>
              <h3 className="font-bold text-sm">Environmental Sustainability</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reducing carbon footprint through solar water heating and energy efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Motto Slogan */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 text-center space-y-2 border border-emerald-800">
          <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-widest block">
            HSE Creed
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold italic">
            "Together for a Safer, Greener and Healthier Tanzania"
          </h3>
        </div>
      </div>
    </div>
  );
};
