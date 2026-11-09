import React, { useState } from 'react';
import {
  CheckCircle2,
  TreePine,
  Sparkles,
  Ruler,
  Layers,
  ArrowRight,
  ShieldCheck,
  Calculator,
  Compass,
  Hammer,
} from 'lucide-react';
import { PageId } from '../types';
import { WOOD_TYPES, FINISH_TYPES, COMPANY_INFO } from '../data/companyData';

interface WoodenDoorsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const WoodenDoorsPage: React.FC<WoodenDoorsPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [selectedWood, setSelectedWood] = useState('Teak Wood');
  const [selectedFinish, setSelectedFinish] = useState('Polished Finish');
  const [doorType, setDoorType] = useState('Double Entrance Door');

  const woodSpecs = [
    {
      name: 'Teak Wood (Mtiki)',
      origin: 'Kilombero & Tanga Concessions, Tanzania',
      color: 'bg-amber-800',
      tag: 'Weatherproof & Termite-Proof',
      desc: 'Dense natural silica and essential oils provide unparalleled rot and moisture resistance. Ideal for grand external entryways exposed to sun and rain.',
      grain: 'Straight to wavy golden-brown grain with darker stripes',
    },
    {
      name: 'Mahogany Wood (Mninga / Mkangazi)',
      origin: 'Southern Highlands & Coastal Tanzania',
      color: 'bg-red-900',
      tag: 'Classic Executive Elegance',
      desc: 'Uniform medium-dense grain with warm reddish-brown undertones. Exceptional dimensional stability and resistance to warping under changing humidity.',
      grain: 'Fine, interlocking ribbon grain that polishes to deep luster',
    },
    {
      name: 'African Rosewood (Mvule / Palisander)',
      origin: 'Kilwa & Lindi Natural Forests',
      color: 'bg-stone-900',
      tag: 'Ultra-Dense Architectural Grade',
      desc: 'Very heavy, extraordinarily hard timber with deep violet-brown streaks. Chosen for bespoke security entrances and prestigious corporate suites.',
      grain: 'Pronounced contrasting wild figuring and glass-smooth texture',
    },
    {
      name: 'Indigenous Hardwood (Mvule / Mchongoma)',
      origin: 'Sustainable Forestry Plantations, Tanzania',
      color: 'bg-amber-950',
      tag: 'High Impact & Structural Framing',
      desc: 'Sustainably harvested Tanzanian hardwoods kiln-treated for heavy commercial use, high-traffic corridors, and school/hospital door frames.',
      grain: 'Coarse fibrous texture with superior screw and bolt holding strength',
    },
  ];

  const finishSpecs = [
    {
      name: 'Natural Satin Sealant',
      sheen: 'Low Sheen (15-20% Gloss)',
      badge: 'Interior / Contemporary',
      desc: 'Enhances raw timber organic color without yellowing. Breathable microporous finish preserving tactile wood feel.',
    },
    {
      name: 'Hand-Buffed Polished Gloss',
      sheen: 'High Luster (85-90% Gloss)',
      badge: 'Luxury Executive',
      desc: 'Multi-stage oil and resin polishing delivering mirror depth and radiant three-dimensional woodgrain brilliance.',
    },
    {
      name: 'Marine Polyurethane Varnish',
      sheen: 'Weather Shield (Satin or Gloss)',
      badge: 'Exterior & Coastal',
      desc: 'UV-absorbing inhibitors block sun fading while creating a flexible elastic barrier against monsoon rain.',
    },
    {
      name: 'Factory Spray Painted Enamel',
      sheen: 'Solid Architectural Coat',
      badge: 'Modern RAL Architectural',
      desc: 'Multi-coat electrostatic polyurethane spray available in charcoal, crisp white, deep bronze, or bespoke project palettes.',
    },
  ];

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
            <span className="text-slate-800 font-semibold">Wooden Door Manufacturing</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                Manufacturing Division · Arusha Workshop
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Wooden Door Manufacturing & Custom Joinery
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Order Custom Doors
            </button>
          </div>
        </div>

        {/* Division Hero Showcase with Authentic African Villa Entrance */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                Architectural Timber Engineering · Tanzania
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56] leading-tight">
                Architectural Timber Doors Built for Generations of Enduring Beauty
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>KGSONS COMPANY LIMITED</strong> crafts precision solid timber entrance systems, interior acoustic doors, and bespoke architectural frames for prestigious private residences, five-star safari lodges, commercial complexes, and public institutions across Tanzania.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Custom Grand Double Entrance Doors',
                  'Solid Panel & Modern Flush Doors',
                  'Kiln-Dried Sustainable Hardwoods',
                  'Traditional Mortise-and-Tenon Joints',
                  'Multi-Coat Tropical UV Protection',
                  'Turnkey On-Site Installation & Alignment',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0799C2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/concept_african_timber_doors_villa.jpg"
                  alt="Custom African Teak Wood Entrance Door Installed on Tanzania Residence"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Digital Wood Types & Finishes Conceptual Design (Interactive UI cards, no PDF crops) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Material Palette & Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56]">
              Certified Tanzanian Timber Species & Protective Finishes
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              Every timber plank is seasoned in our Arusha facility to maintain equilibrium moisture content (10–12%) tailored for East Africa's climate.
            </p>
          </div>

          {/* Timber Species Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <TreePine className="w-4 h-4 text-[#0799C2]" />
              <span>Sustainable Hardwood Species Selection</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {woodSpecs.map((wood, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#0799C2]/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full ${wood.color} shadow-xs ring-2 ring-slate-100`}></div>
                        <h3 className="font-bold text-base text-slate-900">{wood.name}</h3>
                      </div>
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        {wood.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {wood.desc}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
                      <div><strong>Grain Structure:</strong> {wood.grain}</div>
                      <div><strong>Sourcing Origin:</strong> {wood.origin}</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-[#0799C2] font-semibold border-t border-slate-100">
                    <span>Available in custom dimensions</span>
                    <button
                      onClick={() => {
                        setSelectedWood(wood.name.split(' ')[0]);
                        onOpenQuote();
                      }}
                      className="hover:underline flex items-center gap-1"
                    >
                      Inquire Timber
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protective Finishes Grid */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#F9B51B]" />
              <span>Multi-Stage Protective Surface Systems</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {finishSpecs.map((finish, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#0799C2] uppercase tracking-wider block">
                      {finish.badge}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900">{finish.name}</h4>
                    <span className="inline-block text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {finish.sheen}
                    </span>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {finish.desc}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-semibold text-slate-700 border-t border-slate-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>UV & Moisture Proof</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* African Master Joinery Workshop Showcase */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                <img
                  src="/assets/images/cnc_timber_machinery.jpg"
                  alt="Tanzanian Engineer Operating Computer-Guided CNC Timber Router Machine in Arusha"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                Arusha Workshop Master Joinery
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003B56]">
                Skilled Tanzanian Artisans & Modern Dimensioning Technology
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At our Arusha manufacturing center, our veteran master carpenters combine traditional mortise-and-tenon hand joinery with modern computer-guided planers and profile shapers. Each door is measured for squareness, structural rigidity, and seamless alignment before factory finishing.
              </p>
              <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 space-y-2">
                <div className="text-xs font-bold text-[#0799C2]">Standard & Bespoke Dimensions:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div>• Standard leaf heights: 2100mm, 2400mm</div>
                  <div>• Grand architectural custom heights up to 3200mm</div>
                  <div>• Solid leaf thicknesses: 45mm, 50mm, 55mm</div>
                  <div>• Rebated frames with acoustic & perimeter weatherseals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Door Estimation Configurator */}
        <section className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 border border-sky-900">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F9B51B] bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Timber Door Configurator</span>
            </div>
            <h3 className="text-2xl font-bold">Configure Your Door Requirements</h3>
            <p className="text-xs text-slate-300">
              Select your specifications below and send directly to our estimation team in Arusha.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-sky-950/70 p-6 rounded-2xl border border-sky-800 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Timber Species</label>
                <select
                  value={selectedWood}
                  onChange={(e) => setSelectedWood(e.target.value)}
                  className="w-full bg-[#003B56] border border-sky-700 text-white rounded-lg px-3 py-2 text-xs"
                >
                  <option value="Teak Wood">Teak Wood (Mtiki)</option>
                  <option value="Mahogany Wood">Mahogany Wood (Mninga)</option>
                  <option value="Rosewood">African Rosewood (Mvule)</option>
                  <option value="Hardwood">Indigenous Hardwood</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Finish Treatment</label>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full bg-[#003B56] border border-sky-700 text-white rounded-lg px-3 py-2 text-xs"
                >
                  <option value="Polished Finish">Hand-Buffed Polished Gloss</option>
                  <option value="Natural Finish">Natural Satin Sealant</option>
                  <option value="Varnish Finish">Marine Polyurethane Varnish</option>
                  <option value="Painted Finish">Factory Spray Painted Enamel</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Door Configuration</label>
                <select
                  value={doorType}
                  onChange={(e) => setDoorType(e.target.value)}
                  className="w-full bg-[#003B56] border border-sky-700 text-white rounded-lg px-3 py-2 text-xs"
                >
                  <option value="Single Solid Entrance">Single Solid Panel Door</option>
                  <option value="Double Entrance Door">Double Grand Entrance Door</option>
                  <option value="Interior Flush Door">Acoustic Interior Flush Door</option>
                  <option value="Glazed Timber Door">French Glazed Timber Door</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-sky-800 text-xs">
              <div className="text-slate-300">
                Selected: <strong className="text-[#F9B51B]">{doorType}</strong> in <strong className="text-white">{selectedWood}</strong> with <strong className="text-sky-200">{selectedFinish}</strong>.
              </div>
              <button
                onClick={onOpenQuote}
                className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold rounded-full uppercase tracking-wider transition-all whitespace-nowrap"
              >
                Request Itemized Bill of Quantities
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
