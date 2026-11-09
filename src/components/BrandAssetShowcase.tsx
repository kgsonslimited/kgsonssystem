import React from 'react';
import { ShieldCheck, Award, FileCheck, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const BrandAssetShowcase: React.FC = () => {
  return (
    <div className="bg-slate-50 border-y border-slate-200/80 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0799C2] uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Corporate Identity & Continuity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] tracking-tight">
            Official Brand System & Authenticated Assets
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            KGSONS COMPANY LIMITED operates under a dual-asset corporate brand architecture ensuring unbroken continuity between our verified 2026 Company Profile and modern digital touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Primary Redesigned Horizontal Brand Logo */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-[#0799C2] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Official Redesigned Master Logo
            </div>

            <div>
              <div className="space-y-4 mb-6">
                {/* Daylight Web Header Version */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-center justify-center">
                  <img
                    src={COMPANY_INFO.logos.primaryBlue}
                    alt="KGSONS Official Redesigned Horizontal Logo"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </div>

                {/* Dark Navy Contrast Version */}
                <div className="bg-[#003B56] p-4 rounded-xl border border-sky-900 flex items-center justify-center">
                  <img
                    src={COMPANY_INFO.logos.primaryWhite}
                    alt="KGSONS Official High-Contrast White Logo"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                Official Redesigned Horizontal Brand Mark
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Engineered with high-resolution vector precision, featuring the interconnected globe-and-handshake icon, radiant energy lightbulb, warm golden-yellow <strong>KGSONS</strong> logotype, and verified <strong>COMPANY LIMITED</strong> subtitle in corporate teal.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-500">
                <span>Color Palette:</span>
                <span className="font-semibold text-slate-700">Golden Yellow (#F9B51B) · Corporate Teal (#0A9396) · Deep Navy</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Usage Scope:</span>
                <span className="font-semibold text-[#0799C2]">Website Navigation Header & Official Corporate Touchpoints</span>
              </div>
            </div>
          </div>

          {/* Card 2: Stacked & Approved Heritage Assets */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-100 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-[#00A8B5] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Stacked & Heritage Assets
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Vertical Stacked Logo */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center">
                  <img
                    src={COMPANY_INFO.logos.stackedColor}
                    alt="KGSONS Official Stacked Emblem Logo"
                    className="h-20 w-auto object-contain mb-2"
                  />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Vertical Stacked
                  </span>
                </div>

                {/* 2026 Profile Heritage Logo */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center">
                  <img
                    src={COMPANY_INFO.logos.originalProfile}
                    alt="KGSONS Original Profile 2026 Logo"
                    className="h-20 w-auto object-contain mb-2"
                  />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Profile 2026 Heritage
                  </span>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                Emblem Suite & Verified Profile Seal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Provides versatile brand deployment across mobile screens, square avatars, printed packaging stamps, and legal procurement submissions while honoring the <strong>KGSONS Company Profile 2026</strong> heritage.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-500">
                <span>Asset Formats:</span>
                <span className="font-semibold text-slate-700">Transparent Vector Masters & High-DPI Retina Exports</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Continuity Status:</span>
                <span className="font-semibold text-[#00A8B5]">Approved Corporate Brand Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Slogan Ribbon */}
        <div className="mt-8 bg-[#003B56] text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-[#F9B51B] shrink-0" />
            <div>
              <span className="text-[11px] text-sky-200 uppercase tracking-widest font-semibold block">
                Official Corporate Tagline
              </span>
              <p className="text-sm font-bold text-white tracking-wide">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold bg-sky-950/80 px-4 py-2 rounded-lg border border-sky-800">
            <ShieldCheck className="w-4 h-4 text-[#F9B51B]" />
            <span>United Republic of Tanzania · Arusha AICC</span>
          </div>
        </div>
      </div>
    </div>
  );
};
