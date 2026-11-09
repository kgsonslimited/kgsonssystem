import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Building,
  ArrowRight,
  Filter,
  Eye,
  Briefcase,
} from 'lucide-react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, COMPANY_INFO } from '../data/companyData';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [filter, setFilter] = useState<'all' | 'doors' | 'electrical' | 'plumbing' | 'cleaning'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.division === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0799C2]">Home</button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Projects Portfolio</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Proven Engineering & Supply Delivery
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Projects Portfolio Across Tanzania
              </h1>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              Discuss Your Project
            </button>
          </div>
        </div>

        {/* Feature Hero: African Engineers on Site in Tanzania */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                Turnkey Execution & Procurement
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56]">
                Building Modern Commercial & Residential Landmarks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                KGSONS COMPANY LIMITED partners directly with tier-1 civil contractors, property developers, and government institutions. From custom hardwood entrance installations in Arusha to multi-tier power distribution switchgear in Dar es Salaam, our project teams uphold strict engineering milestones.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0799C2]" />
                  <span>50+ Successful Site Handouts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B51B]" />
                  <span>On-Budget Material Deliveries</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% TBS Safety Alignment</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/concept_african_construction_site.jpg"
                  alt="Black African Civil Engineers and Architects Reviewing Blueprints on Tanzania Site"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'doors', label: 'Wooden Doors' },
            { id: 'electrical', label: 'Electrical Supplies' },
            { id: 'plumbing', label: 'Plumbing Works' },
            { id: 'cleaning', label: 'Facility Cleaning' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#003B56] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-56 relative overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#003B56]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  {project.location}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {project.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
                    {project.clientCategory}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0799C2] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.year}</span>
                  </div>
                  <span className="text-[#0799C2] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
              <div className="relative h-64 sm:h-72 bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4 bg-[#003B56] text-white text-xs font-bold px-3 py-1 rounded-lg">
                  {selectedProject.location} · {selectedProject.year}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider">
                    {selectedProject.clientCategory}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Scope Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0799C2] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-slate-500 hover:text-slate-800"
                  >
                    Close Inspection
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuote();
                    }}
                    className="px-5 py-2.5 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider"
                  >
                    Quote Similar Scope
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
