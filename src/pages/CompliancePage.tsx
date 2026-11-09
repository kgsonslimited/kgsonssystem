import React, { useState } from 'react';
import {
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  Building2,
  Landmark,
  Scale,
  FileText,
  Lock,
  ExternalLink,
  Award,
  BadgeCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface CompliancePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tenders' | 'tax'>('all');

  const statutoryCredentials = [
    {
      id: 'brela',
      authority: 'Business Registrations and Licensing Agency (BRELA)',
      title: 'Certificate of Incorporation',
      badge: 'Limited Liability Enterprise',
      regNumber: 'Incorporated under Companies Act 2002',
      status: 'Active & Good Standing',
      badgeImage: '/assets/images/cert_brela.png',
      description:
        'Officially incorporated as KGSONS COMPANY LIMITED under the laws of the United Republic of Tanzania, empowered to engage in manufacturing, construction supply, and facility maintenance.',
      verification: 'Verified BRELA Corporate Register',
    },
    {
      id: 'tra',
      authority: 'Tanzania Revenue Authority (TRA)',
      title: 'Tax Clearance Certificate & TIN',
      badge: 'Fiscal Compliance Verified',
      regNumber: 'Active Taxpayer Identification Number (TIN)',
      status: 'Current & Fully Compliant',
      badgeImage: '/assets/images/cert_tra.png',
      description:
        'Complete tax compliance profile, active Electronic Fiscal Device (EFD) invoicing, and annual tax clearance certificates issued by TRA for public and private contract execution.',
      verification: 'TRA Taxpayer Electronic Clearance',
    },
    {
      id: 'nest',
      authority: 'National e-Procurement System of Tanzania (NeST)',
      title: 'Accredited Government Supplier',
      badge: 'Public Sector Bidding Qualified',
      regNumber: 'NeST Certified Vendor Profile',
      status: 'Accredited Supplier',
      badgeImage: '/assets/images/cert_nest.png',
      description:
        'Enrolled on the national NeST e-procurement platform, authorizing KGSONS to participate in institutional tenders, municipal construction supplies, and national public framework agreements.',
      verification: 'Government NeST Registry Certified',
    },
    {
      id: 'standards',
      authority: 'Contractors Registration Board (CRB Tanzania)',
      title: 'Contractors Registration & Safety Standards',
      badge: 'Registered Contractor & Certified Inputs',
      regNumber: 'CRB Registered & TBS Aligned',
      status: 'Inspected & Registered',
      badgeImage: '/assets/images/cert_quality.png',
      description:
        'Registered under Contractors Registration Board (CRB Tanzania). All electrical cabling, joinery, and plumbing pressure pipes comply with TBS safety guidelines.',
      verification: 'CRB & TBS Compliance Verified',
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
            <span className="text-slate-800 font-semibold">Compliance & Certifications</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Statutory Governance & Compliance
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Certifications & Regulatory Compliance
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

        {/* Legal Overview Card */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
              Fully Compliant · Transparent Governance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56]">
              A Legally Validated Partner for Public & Private Contracts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>KGSONS COMPANY LIMITED</strong> is fully registered under the laws of the United Republic of Tanzania, with complete tax clearance (TIN), official incorporation under BRELA, and accredited active vendor credentials in the <strong>National e-Procurement System of Tanzania (NeST)</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We operate with audited transparency, maintaining verified credentials that allow government ministries, municipal councils, parastatal authorities, and multilateral agencies to procure our timber manufacturing, electrical utilities, and facility management services with confidence.
            </p>
          </div>
        </section>

        {/* Bespoke Digital Credential Cards (Modern UI without PDF page scans) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block mb-1">
              Verified Legal Credentials
            </span>
            <h2 className="text-2xl font-bold text-[#003B56]">
              Statutory Approvals & Official Registrations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {statutoryCredentials.map((cred) => (
              <div
                key={cred.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0799C2]/40 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-white p-2 border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                        <img src={cred.badgeImage} alt={cred.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {cred.authority}
                        </span>
                        <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                          {cred.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-sky-50 text-[#003B56] font-semibold border border-sky-100">
                      {cred.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-mono text-[11px]">
                      {cred.regNumber}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cred.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{cred.status}</span>
                  </div>
                  <span className="text-slate-400 text-[11px] font-mono">
                    {cred.verification}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Institutional Integrity Checklist */}
        <section className="bg-[#003B56] text-white rounded-3xl p-8 sm:p-10 border border-sky-900">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
              Audited Standards
            </span>
            <h3 className="text-2xl font-bold">Our Compliance Commitments</h3>
            <p className="text-xs text-sky-200">
              Maintaining continuous adherence across operational, fiscal, and labor regulations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-xs text-slate-200">
            {[
              {
                title: 'BRELA Registration & Corporate Filing',
                desc: 'Compliant with Tanzanian corporate filings, annual returns, and memorandum of association regulations.',
              },
              {
                title: 'TIN & Comprehensive Tax Clearance',
                desc: 'Active Taxpayer Identification Number, VAT compliance, and electronic EFD invoice issuances.',
              },
              {
                title: 'NeST Vendor Supplier Status',
                desc: 'Verified access to Tanzanian national public procurement bidding, contracts, and execution frameworks.',
              },
              {
                title: 'Strict Adherence to Industry Standards',
                desc: 'Timber moisture limits, TBS electrical cable conductivity ratings, and pipe pressure tolerance codes.',
              },
              {
                title: 'Ethical Business Practices',
                desc: 'Anti-bribery protocols, fair worker compensation, non-discriminatory recruitment, and transparent supplier bidding.',
              },
              {
                title: 'OSHA & Environmental Stewardship',
                desc: 'Certified workplace safety protocols, PPE usage, and environmentally compliant chemical waste disposals.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-sky-950/60 rounded-2xl border border-sky-800">
                <CheckCircle2 className="w-5 h-5 text-[#F9B51B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tender Engagement CTA */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Need Verification Documents for an Upcoming Tender?
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Our legal and compliance team can furnish certified true copies of our BRELA, TRA, and NeST certificates.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs rounded-full uppercase tracking-wider transition-all whitespace-nowrap"
          >
            Request Compliance Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
