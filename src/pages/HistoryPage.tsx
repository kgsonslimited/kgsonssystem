import React from 'react';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, Factory, Handshake } from 'lucide-react';
import { PageId } from '../types';
import { MILESTONES, COMPANY_INFO } from '../data/companyData';

interface HistoryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0799C2]">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('about')} className="hover:text-[#0799C2]">About Us</button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">History & Milestones</span>
          </div>
          <div>
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
              Corporate Evolution & Milestones
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
              Company History & Key Milestones
            </h1>
          </div>
        </div>

        {/* Story Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                The Journey of KGSONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56]">
                From Humble Beginnings to a Multi-Division Industrial Enterprise
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Founded with a vision to revolutionize local manufacturing and building supplies, <strong>KGSONS COMPANY LIMITED</strong> has evolved from a dedicated supplier into an advanced specialized timber door producer and facility support provider.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our journey is marked by consistent growth, strong partnerships, and an unwavering commitment to quality materials. Based at the prestigious Arusha International Conference Centre (AICC), we have expanded our manufacturing and logistics network to service commercial developments, civil projects, and civic infrastructure nationwide.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0799C2]">
                  <Factory className="w-4 h-4" />
                  <span>Arusha Workshop Expansion</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>NeST Verified Contractor</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative group">
                <img
                  src="/assets/images/cnc_timber_machinery.jpg"
                  alt="KGSONS Advanced CNC Timber Router Machinery Milling Hardwood Doors in Arusha"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-[#003B56] p-3 text-center text-white text-xs font-semibold">
                  Advanced Computer-Guided CNC Router & Precision Milling Facility
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Growth Path & Strategic Benchmarks
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Key Milestones in Our Corporate Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-[#0799C2] ml-4 md:ml-32 space-y-8 pb-4">
            {MILESTONES.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Node marker */}
                <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#F9B51B] group-hover:scale-125 transition-transform"></div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                  <span className="inline-block bg-[#003B56] text-[#F9B51B] text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <div className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-sky-900">
          <div>
            <h3 className="text-xl font-bold">Discover our manufacturing capabilities</h3>
            <p className="text-xs text-sky-200 mt-1">
              Learn how our modern Arusha woodworking workshop handles custom projects.
            </p>
          </div>
          <button
            onClick={() => onNavigate('wooden-doors')}
            className="px-6 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider flex items-center gap-2"
          >
            <span>View Door Manufacturing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
