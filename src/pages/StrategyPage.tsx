import React from 'react';
import {
  TrendingUp,
  Cpu,
  Globe2,
  Users2,
  TreePine,
  Sun,
  Leaf,
  Recycle,
  ArrowRight,
  Handshake,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface StrategyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const StrategyPage: React.FC<StrategyPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0799C2]">Home</button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Future Strategy & Sustainability</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Corporate Roadmap & Vision 2030
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Future Strategy & Sustainability
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Partner with KGSONS
            </button>
          </div>
        </div>

        {/* Hero Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-sky-50 text-[#0799C2] text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                Innovating Today for a Stronger Tomorrow
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] leading-tight">
                Sustainable Industrial Expansion Anchored in East African Development
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>KGSONS COMPANY LIMITED</strong> is committed to long-term sustainable growth, technological modernization, and ecological stewardship—ensuring enduring value for our clients, local communities, and future generations across Tanzania.
              </p>
              <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-center gap-3">
                <Sun className="w-6 h-6 text-[#F9B51B] shrink-0" />
                <div className="text-xs text-slate-700">
                  <strong>Green Vision 2030:</strong> Modernizing timber manufacturing through renewable power, zero-waste timber recovery, and digital supply chain integrations.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/concept_african_construction_site.jpg"
                  alt="KGSONS Engineers and Planners Shaping Sustainable Infrastructure in Tanzania"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5 Strategic Pillars (From PDF Page 19) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Growth Architecture
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Our 5 Strategic Growth Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Advanced Joinery Machinery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Investing in automated multi-axis CNC timber routing and laser dimensional calibration in our Arusha production hub to increase output capacity by 200%.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0799C2]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                East Africa Market Presence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Broadening distribution networks from Northern Tanzania down the central corridor to Dar es Salaam, Dodoma, Zanzibar, and neighboring EAC markets.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Digital Client Solutions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Implementing instant web-based quotation tools, NeST digital catalog integration, and real-time logistics tracking for construction sites.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Strategic Supply Chains
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strengthening partnerships with international electrical and hydraulic component manufacturers to guarantee uninterrupted inventory availability.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3 md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#F9B51B]">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Workforce Skills & Vocational Apprenticeships
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Partnering with vocational training institutes in Arusha and Kilimanjaro to train young Tanzanian artisans in master carpentry, CNC machinery, and electrical safety engineering.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Sustainability Commitments */}
        <section className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 border border-sky-900 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block mb-1">
              Ecological Stewardship
            </span>
            <h3 className="text-2xl font-bold">Our Sustainability Commitments</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-sky-950/60 p-5 rounded-2xl border border-sky-800 text-center space-y-2">
              <TreePine className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-sm">Responsible Timber</h4>
              <p className="text-xs text-slate-300">Certified sustainable plantations with chain-of-custody tracking.</p>
            </div>
            <div className="bg-sky-950/60 p-5 rounded-2xl border border-sky-800 text-center space-y-2">
              <Recycle className="w-8 h-8 text-[#F9B51B] mx-auto" />
              <h4 className="font-bold text-sm">Proper Waste Management</h4>
              <p className="text-xs text-slate-300">Full sawdust re-use for bio-fuel briquettes and recyclable packaging.</p>
            </div>
            <div className="bg-sky-950/60 p-5 rounded-2xl border border-sky-800 text-center space-y-2">
              <Sun className="w-8 h-8 text-amber-300 mx-auto" />
              <h4 className="font-bold text-sm">Energy Efficiency</h4>
              <p className="text-xs text-slate-300">High-efficiency LED systems and solar factory illumination.</p>
            </div>
            <div className="bg-sky-950/60 p-5 rounded-2xl border border-sky-800 text-center space-y-2">
              <Leaf className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-sm">Greener Environment</h4>
              <p className="text-xs text-slate-300">Biodegradable chemical agents for all commercial cleaning contracts.</p>
            </div>
          </div>
        </section>

        {/* Closing Slogan Banner */}
        <div className="bg-gradient-to-r from-emerald-800 to-[#003B56] text-white rounded-3xl p-8 text-center space-y-2">
          <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-widest block">
            Forward Horizon
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold italic">
            "Together for a Sustainable Tanzania"
          </h3>
        </div>
      </div>
    </div>
  );
};
