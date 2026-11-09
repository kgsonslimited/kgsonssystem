import React from 'react';
import {
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Boxes,
  Waves,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface PlumbingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const PlumbingPage: React.FC<PlumbingPageProps> = ({
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
            <span className="text-slate-800 font-semibold">Plumbing Fixtures & Fittings</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Plumbing & Hydraulic Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Plumbing Fixtures, Pipes & Hydraulic Fittings
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Order Plumbing Fixtures
            </button>
          </div>
        </div>

        {/* Division Hero Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-sky-50 text-[#0799C2] text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                Hydraulic Engineering & Sanitation
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] leading-tight">
                Modern Plumbing Solutions for Residential, Hospitality & Commercial Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                KGSONS supplies premium sanitary ceramics, high-pressure mixers, PPR hot & cold pressure pipes, PVC soil and waste networks, and water storage tanks engineered for effortless fluid flow and longevity.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-[#0799C2] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">High Quality</span>
                  <span className="text-[10px] text-slate-500">Brass & Ceramics</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Wrench className="w-5 h-5 text-[#F9B51B] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Durable & Reliable</span>
                  <span className="text-[10px] text-slate-500">Burst tested</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Boxes className="w-5 h-5 text-[#0799C2] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Wide Product Range</span>
                  <span className="text-[10px] text-slate-500">Turnkey fitouts</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Waves className="w-5 h-5 text-[#F9B51B] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Competitive Supply</span>
                  <span className="text-[10px] text-slate-500">Direct distributor</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/service_plumbing_fixtures.jpg"
                  alt="Certified Tanzanian Plumber Installing Precision Fixtures"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Catalog Grid (From PDF Page 11) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Complete Water Infrastructure
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Our Comprehensive Plumbing Lineup
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Sanitary Ware */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="h-44 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/assets/images/plumbing_sanitary_showroom.jpg"
                  alt="Luxury Sanitary Ware & Faucets Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-base text-slate-900">Sanitary Ware & Faucets</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Water-efficient dual flush water closets, wall-hung and pedestal ceramic basins, thermostatic shower heads, and chrome basin mixers.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2]" />
                  <span>Dual Flush Low-Water Closets</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2]" />
                  <span>Sensor & Touchless Faucets</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2]" />
                  <span>Luxury Hotel Vanity Basins</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Pipes & Hydraulic Networks */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="h-44 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/assets/images/african_plumber_installation.jpg"
                  alt="African Plumber Fitting PPR Pressure Pipes"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-base text-slate-900">Pipes, Fittings & Pressure Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-density PPR fusion-weld pressure pipes for potable water, PVC soil, waste & vent conduits, and industrial brass gate valves.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B51B]" />
                  <span>PN16 & PN20 Hot/Cold PPR Pipes</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B51B]" />
                  <span>Heavy-Duty PVC Soil & Drain Lines</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B51B]" />
                  <span>High-Pressure Brass Ball Valves</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Storage & Drainage */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="h-44 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/assets/images/service_plumbing_fixtures.jpg"
                  alt="Water Storage & Hydraulic Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-base text-slate-900">Tanks, Drainage & Pumps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                UV-stabilized polyethylene water storage reservoirs (500L to 10,000L), automatic pressure booster pumps, and subterranean drainage pits.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2]" />
                  <span>Multi-Layer Anti-Bacterial Tanks</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2]" />
                  <span>Automatic Pressure Booster Pumps</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2]" />
                  <span>Gully Traps & Floor Cleanouts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-sky-900">
          <div>
            <h3 className="text-xl font-bold">Have a plumbing bill of materials to quote?</h3>
            <p className="text-xs text-sky-200 mt-1">
              Upload your project specifications to receive competitive contractor pricing.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider transition-all"
          >
            Submit Plumbing BOM
          </button>
        </div>
      </div>
    </div>
  );
};
