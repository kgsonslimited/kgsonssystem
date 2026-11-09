import React from 'react';
import {
  Eye,
  Target,
  Shield,
  Award,
  Clock,
  Briefcase,
  Lightbulb,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_VALUES, COMPANY_INFO } from '../data/companyData';

interface VisionMissionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const VisionMissionPage: React.FC<VisionMissionPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const valueIcons = [
    <Shield className="w-5 h-5 text-[#0799C2]" />,
    <Award className="w-5 h-5 text-[#F9B51B]" />,
    <Clock className="w-5 h-5 text-[#0799C2]" />,
    <Briefcase className="w-5 h-5 text-[#F9B51B]" />,
    <Lightbulb className="w-5 h-5 text-[#0799C2]" />,
    <HeartHandshake className="w-5 h-5 text-[#F9B51B]" />,
  ];

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
            <span className="text-slate-800 font-semibold">Vision, Mission & Values</span>
          </div>
          <div>
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
              Corporate Purpose & Core Values
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
              Our Vision, Mission & Core Values
            </h1>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0799C2]/15 flex items-center justify-center text-[#0799C2]">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#0799C2] uppercase tracking-widest block">
                Strategic Outlook
              </span>
              <h2 className="text-2xl font-bold text-[#003B56]">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                "To become a trusted and recognized industry partner in timber manufacturing, building utilities, and facility care—known for craftsmanship, reliability, and innovation across Tanzania and East Africa."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Anchored in Tanzanian industrial growth and sustainable manufacturing.
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#003B56] text-white rounded-3xl p-8 border border-sky-900 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F9B51B]/20 flex items-center justify-center text-[#F9B51B]">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#F9B51B] uppercase tracking-widest block">
                Daily Purpose
              </span>
              <h2 className="text-2xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                "To manufacture durable wooden doors and provide dependable electrical, plumbing, and cleaning solutions that meet client needs and support sustainable growth for our communities and nation."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-800 text-xs text-sky-200">
              Delivering verified quality across public and private infrastructure.
            </div>
          </div>
        </div>

        {/* 6 Core Values - From PDF Page 5 */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Ethical Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B56]">
              Our 6 Core Corporate Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every timber cut, cable pulled, fixture installed, and facility cleaned is governed by these foundational principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#0799C2]/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      {valueIcons[idx % valueIcons.length]}
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#003B56]">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {val.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-semibold text-[#0799C2] flex items-center gap-1">
                  <span>Non-negotiable Standard</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Slogan Banner */}
        <div className="bg-gradient-to-r from-[#003B56] via-[#0799C2] to-[#003B56] text-white rounded-3xl p-8 text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#F9B51B] uppercase block">
            National Commitment
          </span>
          <h3 className="text-2xl sm:text-3xl font-black italic">
            "{COMPANY_INFO.slogan}"
          </h3>
          <p className="text-xs text-sky-100 max-w-lg mx-auto">
            From the slopes of Mount Kilimanjaro to projects across Tanzania, KGSONS stands for enduring craftsmanship and patriotic industrial development.
          </p>
        </div>
      </div>
    </div>
  );
};
