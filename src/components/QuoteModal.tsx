import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Building2, Phone } from 'lucide-react';
import { COMPANY_INFO, DIVISIONS } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDivision?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedDivision,
}) => {
  const [selectedDivision, setSelectedDivision] = useState(
    preselectedDivision || 'wooden-doors'
  );
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Arusha');
  const [projectType, setProjectType] = useState('Commercial');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `KGS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setIsSubmitted(true);

    // Auto-dispatch quotation records directly to official WhatsApp line +255769328553
    const text = `*NEW QUOTE REQUEST [Ref: ${generatedRef}]*%0A` +
      `*Client:* ${encodeURIComponent(fullName)}%0A` +
      `*Company:* ${encodeURIComponent(company || 'Private Client')}%0A` +
      `*Division:* ${encodeURIComponent(selectedDivision)}%0A` +
      `*Project Type:* ${encodeURIComponent(projectType)}%0A` +
      `*Location:* ${encodeURIComponent(location)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Email:* ${encodeURIComponent(email || 'N/A')}%0A` +
      `*Details:* ${encodeURIComponent(description || 'Standard catalog quotation requested.')}`;
    
    window.open(`https://wa.me/255769328553?text=${text}`, '_blank');
  };

  const handleSendToWhatsApp = () => {
    const text = `*NEW QUOTE REQUEST [Ref: ${refNumber}]*%0A` +
      `*Client:* ${encodeURIComponent(fullName)}%0A` +
      `*Company:* ${encodeURIComponent(company || 'Private Client')}%0A` +
      `*Division:* ${encodeURIComponent(selectedDivision)}%0A` +
      `*Project Type:* ${encodeURIComponent(projectType)}%0A` +
      `*Location:* ${encodeURIComponent(location)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Email:* ${encodeURIComponent(email || 'N/A')}%0A` +
      `*Details:* ${encodeURIComponent(description || 'Standard catalog quotation requested.')}`;
    
    window.open(`https://wa.me/255769328553?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#003B56] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#F9B51B] text-slate-900 flex items-center justify-center font-bold text-sm">
              KG
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Request an Official Quote</h3>
              <p className="text-xs text-sky-200">
                KGSONS COMPANY LIMITED · Arusha HQ & Dodoma Warehouse
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                  Quote Request Received
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  Thank You, {fullName || 'Valued Partner'}!
                </h4>
                <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                  Your corporate inquiry has been dispatched to our sales & estimation engineering team in Arusha under Reference:
                </p>
                <div className="mt-3 inline-block bg-slate-100 border border-slate-300 px-4 py-1.5 rounded-lg font-mono font-bold text-sm text-[#003B56]">
                  {refNumber}
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 text-xs text-slate-700 text-left space-y-1.5">
                <p><strong>Next steps:</strong></p>
                <p>• Our technical team will review specifications and material bills.</p>
                <p>• You will receive a formalized itemized PDF quotation within 24 hours.</p>
                <p>• For urgent procurement or NeST government tenders, connect via WhatsApp below.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Spec directly via WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Division */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Business Division *
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {DIVISIONS.map((div) => (
                    <button
                      key={div.id}
                      type="button"
                      onClick={() => setSelectedDivision(div.id)}
                      className={`p-2.5 text-left rounded-xl border transition-all ${
                        selectedDivision === div.id
                          ? 'border-[#0799C2] bg-sky-50 text-[#003B56] font-semibold ring-2 ring-[#0799C2]/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                      }`}
                    >
                      {div.name.split('&')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Eng. Juma Mwalimu"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Summit Contractors Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+255 7XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="procurement@company.co.tz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden"
                  />
                </div>
              </div>

              {/* Location & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Location in Tanzania
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden bg-white"
                  >
                    <option value="Arusha">Arusha & Northern Zone</option>
                    <option value="Dar es Salaam">Dar es Salaam & Coastal</option>
                    <option value="Dodoma">Dodoma (Capital Region)</option>
                    <option value="Mwanza">Mwanza & Lake Zone</option>
                    <option value="Zanzibar">Zanzibar & Islands</option>
                    <option value="Other">Other Region in Tanzania</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Classification
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden bg-white"
                  >
                    <option value="Commercial">Commercial / Tower / Office</option>
                    <option value="Government / NeST">Government / NeST Tender</option>
                    <option value="Residential Estate">Residential Estate / Villa</option>
                    <option value="Hospitality / Resort">Hotel / Safari Lodge / Resort</option>
                    <option value="Institutional">School / University / Hospital</option>
                  </select>
                </div>
              </div>

              {/* Requirement Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Scope, Quantity or Specifications
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., Need quotation for 40 Teak solid timber doors with frames, or 500m armoured electrical cable..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">
                  Response within 24 working hours
                </span>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-900 bg-[#F9B51B] hover:bg-[#e5a412] rounded-xl shadow-md transition-all active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
