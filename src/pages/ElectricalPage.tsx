import React from 'react';
import {
  Zap,
  ShieldCheck,
  Cpu,
  Cable,
  Lightbulb,
  CheckCircle2,
  Clock,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ElectricalPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ElectricalPage: React.FC<ElectricalPageProps> = ({
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
            <span className="text-slate-800 font-semibold">Electrical Supplies</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Electrical Utilities Division
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Electrical Equipment, Components & Distribution
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Request Electrical Quote
            </button>
          </div>
        </div>

        {/* Division Hero Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-sky-50 text-[#0799C2] text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                Certified Infrastructure Supplies
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] leading-tight">
                Reliable Electrical Solutions for Homes, Businesses and Infrastructure Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                KGSONS supplies heavy-duty electrical components, installation materials, industrial distribution panels, and safety switchgear tested for high-reliability commercial, civic, and residential applications throughout Tanzania.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-[#0799C2] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Safety First</span>
                  <span className="text-[10px] text-slate-500">IEC & TBS rated</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Cpu className="w-5 h-5 text-[#F9B51B] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Certified Quality</span>
                  <span className="text-[10px] text-slate-500">High-grade copper</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Truck className="w-5 h-5 text-[#0799C2] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">Dependable Supply</span>
                  <span className="text-[10px] text-slate-500">Bulk logistics</span>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Clock className="w-5 h-5 text-[#F9B51B] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">On-Time Delivery</span>
                  <span className="text-[10px] text-slate-500">Project sync</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/african_electrician_switchgear.jpg"
                  alt="Certified KGSONS African Electrical Engineer Testing Tanzania Power Distribution Board"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2 Core Product Clusters */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cluster 1: Installation Supplies */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0799C2]">
                <Cable className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Electrical Installation Supplies</h3>
                <p className="text-xs text-slate-500">Wiring networks, containment & architectural fixtures</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              <img
                src="/assets/images/service_electrical_supplies.jpg"
                alt="Coiled Copper Wires, Circuit Breakers & Switchgear"
                className="w-full h-auto object-cover max-h-56"
              />
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {[
                'Pure Copper Single & Multi-Core Wires (1.5mm² to 35mm²)',
                'Armoured XLPE Underground Feeders & Flexible Cords',
                'High-Impact PVC & Galvanized Steel Conduits & Bends',
                'Modular Architectural Switches, Sockets & Faceplates',
                'Commercial Energy-Efficient LED Downlights & Panels',
                'Earthing Rods, Surge Diverters & Lightning Protectors',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0799C2] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cluster 2: Components & Distribution */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Components & Power Distribution</h3>
                <p className="text-xs text-slate-500">Main panels, switchgear & protection devices</p>
              </div>
            </div>

            <div className="p-4 bg-sky-950 text-white rounded-xl space-y-2">
              <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                Industrial Standard Testing
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                All switchgear boards and circuit breakers are fully tested to withstand tropical thermal fluctuations, high humidity, and regional voltage variances.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {[
                'Miniature Circuit Breakers (MCB) 6A – 63A Curves B, C, D',
                'Molded Case Circuit Breakers (MCCB) up to 800A',
                'Residual Current Circuit Breakers (RCCB / RCBO) 30mA Protection',
                'Custom Surface & Flush Distribution Boards (4 to 36 Ways)',
                'Heavy-Duty Industrial Changeover Switches (Automatic & Manual)',
                'Motor Starters, Contactors, Thermal Overload Relays & Isolators',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B51B] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-sky-900">
          <div>
            <h3 className="text-xl font-bold">Need bulk electrical supplies for your construction site?</h3>
            <p className="text-xs text-sky-200 mt-1">
              Contact our sales desk for contractor discounts and prompt regional dispatch.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider transition-all"
          >
            Request Electrical Price List
          </button>
        </div>
      </div>
    </div>
  );
};
