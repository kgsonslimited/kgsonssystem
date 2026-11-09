import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  Building,
  MessageCircle,
  FileText,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Corporate Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const waText = `*NEW CORPORATE INQUIRY*%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Subject:* ${encodeURIComponent(subject)}%0A` +
      `*Message:* ${encodeURIComponent(message)}`;
    
    window.open(`https://wa.me/255769328553?text=${waText}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0799C2]">Home</button>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Contact Us</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                Corporate Information & Inquiries
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003B56] tracking-tight">
                Contact KGSONS COMPANY LIMITED
              </h1>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-full shadow-md transition-all self-start sm:self-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Executive Handshake Banner (From PDF Page 20) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                Let's Partner for a Greater Tanzania
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B56]">
                Ready to Discuss Your Building, Utility or Facility Requirements?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you require high-grade architectural timber doors milled in our Arusha workshop, certified electrical supplies for a multi-story commercial complex, commercial plumbing fixtures, or turnkey facility care contracts, our management team is ready to assist.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
                  <span className="text-xs font-bold text-[#003B56] block">Corporate Headquarters</span>
                  <span className="text-xs text-slate-600">AICC Kilimanjaro Hall, Arusha</span>
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <span className="text-xs font-bold text-slate-900 block">Telephone Hotline</span>
                  <span className="text-xs text-slate-700 font-medium">+255 769 328 553</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/images/concept_african_boardroom_leadership.jpg"
                  alt="KGSONS African Executive Boardroom & Client Relations in Arusha"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Official Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official Corporate Data Sheet (From PDF Page 20) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#003B56] text-white rounded-3xl p-6 sm:p-8 border border-sky-900 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold text-[#F9B51B] uppercase tracking-wider block">
                  Verified Legal Entity
                </span>
                <h3 className="text-xl font-bold mt-1">Corporate Details</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="border-b border-sky-800/80 pb-3">
                  <span className="text-slate-400 block text-[11px]">Company Name</span>
                  <span className="font-bold text-white text-sm">{COMPANY_INFO.name}</span>
                </div>

                <div className="border-b border-sky-800/80 pb-3">
                  <span className="text-slate-400 block text-[11px]">Business Type</span>
                  <span className="font-semibold text-slate-100">{COMPANY_INFO.businessType}</span>
                </div>

                <div className="border-b border-sky-800/80 pb-3">
                  <span className="text-slate-400 block text-[11px]">Country of Operation</span>
                  <span className="font-semibold text-slate-100">{COMPANY_INFO.country}</span>
                </div>

                <div className="border-b border-sky-800/80 pb-3">
                  <span className="text-slate-400 block text-[11px]">Headquarters Address</span>
                  <span className="font-semibold text-slate-100 flex items-start gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#F9B51B] shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.physicalAddress}</span>
                  </span>
                </div>

                <div className="border-b border-sky-800/80 pb-3">
                  <span className="text-slate-400 block text-[11px]">Warehouse & Operations Center</span>
                  <span className="font-semibold text-[#F9B51B] flex items-start gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#0799C2] shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.warehouseAddress}</span>
                  </span>
                </div>

                <div className="border-b border-sky-800/80 pb-3 space-y-1.5">
                  <span className="text-slate-400 block text-[11px]">Official Contact Numbers</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="font-bold text-[#F9B51B] text-xs flex items-center justify-between hover:underline"
                  >
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{COMPANY_INFO.phone}</span>
                    </span>
                    <span className="text-[10px] font-normal text-slate-300">Arusha HQ Hotline</span>
                  </a>
                  <a
                    href="tel:255742296631"
                    className="font-bold text-sky-200 text-xs flex items-center justify-between hover:underline"
                  >
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>0742 296 631</span>
                    </span>
                    <span className="text-[10px] font-normal text-slate-300">Dodoma Desk</span>
                  </a>
                  <a
                    href="tel:255767172693"
                    className="font-bold text-sky-200 text-xs flex items-center justify-between hover:underline"
                  >
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>0767 172 693</span>
                    </span>
                    <span className="text-[10px] font-normal text-slate-300">Warehouse Desk</span>
                  </a>
                </div>

                <div className="border-b border-sky-800/80 pb-3">
                  <span className="text-slate-400 block text-[11px]">Email Address</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-sky-200 flex items-center gap-1.5 mt-0.5 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px]">Official Website</span>
                  <span className="font-medium text-slate-100 flex items-center gap-1.5 mt-0.5">
                    <Globe className="w-4 h-4 text-[#0799C2]" />
                    <span>{COMPANY_INFO.website}</span>
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-800 flex items-center gap-2 text-xs text-sky-200">
                <Clock className="w-4 h-4 text-[#F9B51B] shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Arusha AICC Map Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-[#003B56]">Headquarters Location Map</h4>
                <span className="text-[10px] font-bold text-[#0799C2] bg-sky-50 px-2 py-0.5 rounded">AICC Arusha</span>
              </div>

              {/* Official Office Building Photo Card representing AICC Kilimanjaro Hall */}
              <div className="h-56 rounded-2xl bg-slate-100 border border-slate-200 relative overflow-hidden group">
                <img
                  src="/assets/images/official_office_aicc_arusha.jpg"
                  alt="KGSONS Official Head Office - Arusha International Conference Centre (AICC)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003B56]/90 via-[#003B56]/30 to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-[#0799C2] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
                  Official Corporate Office
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <MapPin className="w-4 h-4 text-[#F9B51B] shrink-0" />
                    <span>AICC, Kilimanjaro Hall, Room 341</span>
                  </div>
                  <div className="text-[11px] text-slate-200">
                    Arusha International Conference Centre, Tanzania
                  </div>
                </div>
              </div>
            </div>

            {/* Dodoma Warehouse & Logistics Depot Location Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-[#003B56]">Dodoma Warehouse & Logistics Depot</h4>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Central Zone Hub</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#003B56] text-[#F9B51B] flex items-center justify-center shrink-0 shadow-xs">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Kizota-Mnada Mpya Hub</span>
                    <span className="text-xs text-slate-600 block">Dodoma, United Republic of Tanzania</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Central distribution warehouse for building supplies, timber door stocks, electrical cables, and bulk facility care products serving Dodoma and Central Tanzania.
                </p>

                <div className="pt-2 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <a
                    href="tel:255742296631"
                    className="font-bold text-[#003B56] hover:text-[#0799C2] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0799C2]" />
                    <span>0742 296 631</span>
                  </a>
                  <a
                    href="tel:255767172693"
                    className="font-bold text-[#003B56] hover:text-[#0799C2] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0799C2]" />
                    <span>0767 172 693</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message / Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#0799C2] uppercase tracking-wider block">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-bold text-[#003B56] mt-1">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in your details below and our corporate relations team will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{name}</strong>. Your inquiry has been routed to our corporate desk at AICC Arusha. A representative will contact you at <strong>{phone || email}</strong>.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-full flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full hover:bg-slate-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Castor Ndunguru"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.co.tz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject / Department
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden bg-white"
                      >
                        <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                        <option value="Wooden Doors Custom Order">Wooden Doors & Joinery</option>
                        <option value="Electrical Supplies Quotation">Electrical Supplies Quotation</option>
                        <option value="Plumbing Fixtures Inquiry">Plumbing Fixtures & Pipes</option>
                        <option value="Facility Cleaning Contract">Facility Care & Cleaning Contract</option>
                        <option value="NeST Government Tender">NeST Public Tender Bidding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message or Specification *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your project, required quantities, site location in Tanzania, or specific deadlines..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0799C2] focus:border-transparent outline-hidden resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500">
                      We protect your project confidentiality and respond within 24h.
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 bg-[#F9B51B] hover:bg-[#e5a412] text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Thank You Note (From PDF Page 20 & 21) */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-4">
          <h3 className="text-3xl font-extrabold text-[#003B56] italic">
            Thank You!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            For your trust and continued support. Together, we build a stronger, better Tanzania.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-[#0799C2]">
              <ShieldCheck className="w-4 h-4 text-[#F9B51B]" />
              <span>Partner with Us</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-[#0799C2]">
              <Building className="w-4 h-4 text-[#F9B51B]" />
              <span>Build Together</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-[#0799C2]">
              <CheckCircle2 className="w-4 h-4 text-[#F9B51B]" />
              <span>Grow Stronger</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
