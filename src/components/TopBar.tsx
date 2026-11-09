import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Cloud } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';

interface TopBarProps {
  onNavigate?: (page: PageId) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#003B56] text-white text-xs border-b border-sky-950/40 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Contact Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-200">
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-[#F9B51B] transition-colors"
              title="Call Main Office Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#0799C2]" />
              <span className="font-semibold tracking-wide">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href="tel:255742296631"
              className="hover:text-[#F9B51B] transition-colors font-medium text-[11px]"
              title="Call Dodoma Office"
            >
              0742 296 631
            </a>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <a
              href="tel:255767172693"
              className="hover:text-[#F9B51B] transition-colors font-medium text-[11px] hidden sm:inline"
              title="Call Warehouse Desk"
            >
              0767 172 693
            </a>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-[#F9B51B] transition-colors"
            title="Email KGSONS"
          >
            <Mail className="w-3.5 h-3.5 text-[#0799C2]" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#F9B51B]" />
            <span>Arusha HQ & Dodoma Warehouse</span>
          </div>
        </div>

        {/* Right side: NeST Badge & Socials */}
        <div className="flex items-center gap-4 text-slate-300">
          <div className="hidden sm:flex items-center gap-2 text-[11px] bg-[#0799C2]/20 border border-[#0799C2]/30 px-2.5 py-0.5 rounded text-sky-200">
            <span className="font-semibold text-[#F9B51B]">NeST</span>
            <span>Registered Supplier</span>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('google-drive')}
              className="hidden md:flex items-center gap-1.5 text-[11px] bg-white/10 hover:bg-white/20 border border-white/20 px-2.5 py-0.5 rounded text-sky-200 transition-colors cursor-pointer"
              title="Google Drive Cloud Storage & Codebase Backup"
            >
              <Cloud className="w-3 h-3 text-[#F9B51B]" />
              <span>Google Drive</span>
            </button>
          )}

          <div className="flex items-center gap-2.5 border-l border-slate-700/60 pl-3">
            <a
              href={COMPANY_INFO.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F9B51B] transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={COMPANY_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F9B51B] transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={COMPANY_INFO.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F9B51B] transition-colors p-1"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
