import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Leaf,
  Clock,
  Building,
  Brush,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface CleaningPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const CleaningPage: React.FC<CleaningPageProps> = ({
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
            <span className="text-slate-500">Core Divisions</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Facility Care & Cleaning</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Facility Care & Hygiene Division
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Building & Compound Cleaning Services
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Book Cleaning Service
            </button>
          </div>
        </div>

        {/* Division Hero Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                Clean Spaces. Healthy Environment.
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] leading-tight">
                Corporate Janitorial & Specialized Facility Care Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                KGSONS delivers dedicated professional cleaning for corporate headquarters, newly constructed buildings prior to handover, hospitality premises, and multi-acre compound grounds across Tanzania.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-[#0799C2] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Professional</span>
                  <span className="text-[10px] text-slate-500">Uniformed & vetted</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Users className="w-5 h-5 text-[#F9B51B] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Skilled Crew</span>
                  <span className="text-[10px] text-slate-500">Trained supervisors</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Leaf className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Eco-Friendly</span>
                  <span className="text-[10px] text-slate-500">Green chemicals</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Clock className="w-5 h-5 text-[#0799C2] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">On-Time SLA</span>
                  <span className="text-[10px] text-slate-500">Guaranteed shifts</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/service_facility_cleaning.jpg"
                  alt="KGSONS Professional African Cleaning Specialists"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6 Cleaning Service Offerings (From PDF Page 12) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Scope of Maintenance
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Our Cleaning & Hygiene Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Air Conditioner High-Pressure Washing & Maintenance */}
            <div className="bg-white rounded-3xl p-6 border-2 border-[#0799C2]/40 shadow-md flex flex-col justify-between space-y-4 hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#F9B51B] text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                Popular Facility Service
              </div>

              <div className="space-y-3">
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100 relative group">
                  <img
                    src="/assets/images/ac_pressure_wash_cleaning.jpg"
                    alt="Technician Speed-Water Spray Washing Air Conditioner Heat Sink & Evaporator Coil"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white text-[11px] font-bold">
                    Speed Spray Coil Flushing & Dust Removal
                  </div>
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  Air Conditioner Speed Spray Washing & Coil Deep Cleaning
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-pressure speed water jet spray washing for indoor split and cassette AC units. Our technicians attach protective catchment bags to wash deep inside aluminum heat-sink fins, flushing out years of trapped dust, lint, mold, and airborne debris to restore maximum cooling efficiency.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#0799C2]">High-Pressure Heat Sink Washing</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  Up to 30% Energy Savings
                </span>
              </div>
            </div>

            {/* 2. Commercial & Office Cleaning */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/assets/images/african_cleaning_team_office.jpg"
                    alt="Commercial & Office Cleaning Specialists in Arusha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-base text-slate-900">Commercial & Office Cleaning</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily janitorial contracts, workstation sanitization, boardroom carpet shampooing, and restroom hygiene management.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-[#0799C2] pt-2 border-t border-slate-100">
                Scheduled Daily or Weekly Shifts
              </div>
            </div>

            {/* 3. Post-Construction Cleanup */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/assets/images/service_facility_cleaning.jpg"
                    alt="Post-Construction Handover Cleanup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-base text-slate-900">Post-Construction Cleanup</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy debris removal, paint splatter removal, mortar haze scrubbing on tiles, and deep sanitization for handover readiness.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-[#F9B51B] pt-2 border-t border-slate-100">
                Architectural Handover Certification
              </div>
            </div>

            {/* 4. Window & Facade Cleaning */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
              <h3 className="font-bold text-base text-slate-900">Window & Glass Facade Cleaning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Streak-free interior and exterior architectural glass cleaning, storefront polishing, and safety-harnessed high-level washing.
              </p>
              <div className="text-[11px] font-semibold text-[#0799C2] pt-2 border-t border-slate-100">
                Trained Working-at-Height Specialists
              </div>
            </div>

            {/* 5. Compound Maintenance */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
              <h3 className="font-bold text-base text-slate-900">Compound Grounds & Landscape Maintenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paved driveway pressure washing, curb sweeping, perimeter clearing, and landscape beautification for corporate premises.
              </p>
              <div className="text-[11px] font-semibold text-emerald-600 pt-2 border-t border-slate-100">
                Pristine Outdoor Aesthetics
              </div>
            </div>

            {/* 6. Floor Polishing & Care */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
              <h3 className="font-bold text-base text-slate-900">Floor Polishing & Crystallization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diamond-pad terrazzo grinding, marble restoration, parquet waxing, and non-slip protective sealing for high-traffic corridors.
              </p>
              <div className="text-[11px] font-semibold text-[#0799C2] pt-2 border-t border-slate-100">
                Industrial Floor Machines
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Annual Air Conditioner Maintenance Contract (AMC) & Support Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
              Annual Corporate Support SLA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B56]">
              Annual AC Maintenance Contracts (AMC)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ensure continuous climate comfort and prevent costly compressor burnouts with KGSONS annual preventative maintenance contracts tailored for corporate offices, banks, hotels, and schools across Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#0799C2] transition-colors">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#0799C2] uppercase tracking-wider block">
                  Quarterly Care Package
                </span>
                <h3 className="font-bold text-base text-slate-900">Standard Preventative AMC</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  4 scheduled visits per year. Includes high-pressure water jet heat sink coil washing, air filter deep cleaning, electrical terminal check, and condensate drain flushing.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2] shrink-0" />
                  <span>4x Speed Water Jet Heat Sink Washes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2] shrink-0" />
                  <span>Blower Fan & Filter Sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2] shrink-0" />
                  <span>Drain Pan Slime Treatment</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 border-2 border-[#F9B51B] flex flex-col justify-between space-y-4 shadow-lg relative">
              <div className="absolute -top-3 right-4 bg-[#F9B51B] text-slate-900 text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider">
                Recommended for Corporate HQ
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#F9B51B] uppercase tracking-wider block">
                  Comprehensive AMC Package
                </span>
                <h3 className="font-bold text-base text-white">Full Chemical & Gas AMC</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  4 speed-wash services plus 2 deep chemical evaporator flushings, refrigerant pressure top-ups (R22/R410a/R32), and complete electrical capacitor diagnostics.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-200 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B51B] shrink-0" />
                  <span>High-Pressure Chemical Coil Wash</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B51B] shrink-0" />
                  <span>Free Refrigerant Gas Top-Up</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B51B] shrink-0" />
                  <span>Priority Breakdown Dispatch SLA</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#0799C2] transition-colors">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#0799C2] uppercase tracking-wider block">
                  Commercial Fleet / Multi-Unit
                </span>
                <h3 className="font-bold text-base text-slate-900">Custom Industrial AC AMC</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored SLA contracts for large facilities with 10+ split/VRF/chiller units. Dedicated resident technician options for hotel resorts and multi-story towers.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Multi-Unit Volume Discount Pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dedicated On-Call AC Technician</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Log Book & Performance Audit Reports</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              Request Annual AC Maintenance Proposal
            </button>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-sky-900">
          <div>
            <h3 className="text-xl font-bold">Request an On-Site Facility Audit</h3>
            <p className="text-xs text-sky-200 mt-1">
              Our cleaning operations manager will inspect your property in Arusha or surrounding regions.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider transition-all"
          >
            Request Facility Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
