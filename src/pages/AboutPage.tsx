import React from 'react';
import {
  CheckCircle,
  Building2,
  Users,
  Award,
  ArrowRight,
  FileText,
  MapPin,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO, KEY_METRICS, CLIENT_SECTORS } from '../data/companyData';
import { BrandAssetShowcase } from '../components/BrandAssetShowcase';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0799C2]">
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">About Us</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Corporate Profile & Leadership
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                About KGSONS COMPANY LIMITED
              </h1>
            </div>
            <a
              href={COMPANY_INFO.profilePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003B56] hover:bg-[#0799C2] text-white text-xs font-semibold rounded-full transition-colors self-start sm:self-auto"
            >
              <FileText className="w-4 h-4 text-[#F9B51B]" />
              <span>Download Official Profile (PDF)</span>
            </a>
          </div>
        </div>

        {/* Chairman / Managing Director's Message */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* MD Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white max-w-sm w-full bg-slate-100">
                <img
                  src="/assets/images/african_executive_director.jpg"
                  alt="Chairman / Managing Director - KGSONS COMPANY LIMITED"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-[#003B56] p-3 text-center text-white">
                  <div className="font-bold text-sm tracking-wide">
                    Chairman / Managing Director
                  </div>
                  <div className="text-[11px] text-[#F9B51B] uppercase tracking-wider font-semibold">
                    KGSONS COMPANY LIMITED
                  </div>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-sky-50 text-[#0799C2] text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                Executive Leadership Statement
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] tracking-tight">
                Building a Better Tanzania Together
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-medium text-slate-900">
                  Welcome to <strong>KGSONS COMPANY LIMITED</strong>.
                </p>
                <p>
                  As a dynamic multi-sector enterprise based in Arusha, Tanzania, we take immense pride in shaping modern infrastructure, commercial spaces, and residential developments across our nation.
                </p>
                <p>
                  Our primary focus on precision wood door manufacturing, electrical utilities, plumbing solutions, and professional facility maintenance reflects our unwavering commitment to quality and longevity.
                </p>
                <p>
                  We look forward to partnering with contractors, developers, and institutions to deliver excellence on every project, upholding full regulatory compliance under NeST and Tanzanian law.
                </p>
              </div>

              {/* Signature block */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <img
                    src="/assets/images/md_signature.png"
                    alt="Chairman / Managing Director Hand Signature"
                    className="h-16 sm:h-20 w-auto object-contain mix-blend-multiply filter contrast-125"
                  />
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    Chairman / Managing Director
                  </div>
                  <div className="text-[11px] text-slate-500">
                    KGSONS COMPANY LIMITED
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                    Headquartered At
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    AICC Arusha, Tanzania
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Strategic Governance Photo & Operational Reach */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Diversified Industrial Enterprise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B56] tracking-tight">
                Reliable Manufacturing, Utility Supplies & Professional Care
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>KGSONS COMPANY LIMITED</strong> operates from the Arusha International Conference Centre (AICC), serving as a trusted partner for public institutions, private property developers, civil contractors, and homeowners.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By unifying precision timber joinery, certified electrical equipment, heavy-duty plumbing supplies, and dedicated commercial janitorial teams under one disciplined management structure, we provide streamlined procurement with guaranteed quality assurance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-[#0799C2] block">Local Tanzanian Manufacturing</span>
                  <p className="text-xs text-slate-600 mt-1">
                    100% sustainable domestic timber, hand-finished by master Tanzanian carpenters.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-[#F9B51B] block">National e-Procurement (NeST)</span>
                  <p className="text-xs text-slate-600 mt-1">
                    Accredited public vendor qualified for regional and government infrastructure tenders.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative group">
                <img
                  src="/assets/images/official_office_aicc_arusha.jpg"
                  alt="KGSONS Official Corporate Office — Arusha International Conference Centre (AICC)"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-[#003B56] p-2.5 text-center text-white text-xs font-semibold">
                  Headquarters: AICC, Kilimanjaro Hall, Room 341, Arusha
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 border border-sky-900">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block mb-1">
              Key Metrics & Achievements
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Strong Foundations for Sustainable Business Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="bg-sky-950/60 p-5 rounded-2xl border border-sky-800 text-center space-y-2"
              >
                <div className="text-3xl font-black text-[#F9B51B]">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-white">
                  {metric.label}
                </div>
                <p className="text-[11px] text-slate-300">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Sectors */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Serving Diverse Economic Sectors
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Trusted by Key Industries Across Tanzania
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLIENT_SECTORS.map((sector, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-[#0799C2]/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#0799C2] shrink-0" />
                  <h4 className="text-xs font-bold text-slate-800">
                    {sector.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand System Showcase */}
        <BrandAssetShowcase />

        {/* Bottom CTA */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Partner with KGSONS COMPANY LIMITED</h3>
            <p className="text-xs text-slate-300 mt-1">
              AICC, Kilimanjaro Hall, Room 341, Arusha · +255 769 328 553
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider transition-all"
          >
            Request Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
