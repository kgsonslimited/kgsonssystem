import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const defaultMessage =
    'Hello KGSONS COMPANY LIMITED, I would like to inquire about your products and services.';

  const handleSend = (text?: string) => {
    const messageToSend = encodeURIComponent(text || userMsg || defaultMessage);
    const waUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${messageToSend}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const quickPrompts = [
    'Wooden Doors quote & custom dimensions',
    'Electrical supplies bulk price inquiry',
    'Plumbing fittings & sanitary fixtures',
    'Corporate facility cleaning contract',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="bg-[#003B56] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight">KGSONS Support</h4>
                <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Official WhatsApp Desk · Arusha
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 text-xs text-slate-700 shadow-xs leading-relaxed">
              Habari! Welcome to <strong>KGSONS COMPANY LIMITED</strong>. How may we assist your project today?
            </div>

            {/* Quick choices */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Quick Service Inquiries:
              </span>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left text-xs bg-white hover:bg-sky-50 hover:text-[#0799C2] hover:border-[#0799C2]/30 border border-slate-200 p-2 rounded-lg transition-all text-slate-700"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your inquiry..."
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  className="flex-1 text-xs border border-slate-300 rounded-lg px-3 py-2 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0799C2]"
                />
                <button
                  onClick={() => handleSend()}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white p-2 rounded-lg flex items-center justify-center transition-transform active:scale-95"
                  aria-label="Send via WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>Official: +255 769 328 553</span>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="text-[#0799C2] hover:underline flex items-center gap-1 font-semibold"
              >
                <PhoneCall className="w-3 h-3" /> Call Directly
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-emerald-200"
        aria-label="Chat with KGSONS on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
