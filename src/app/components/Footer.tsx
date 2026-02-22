import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  type LucideIcon,
} from "lucide-react";

import { Brand } from "@/app/components/Brand";
import {
  BRAND_NAME,
  CONTACT_DETAILS,
  FOOTER_QUICK_LINKS,
  PROGRAM_LINKS,
  SOCIAL_LINKS,
  type SocialLink,
} from "@/app/config/site";

const socialIconById: Record<SocialLink["id"], LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Brand
              logoClassName="shadow-sm ring-1 ring-white/10"
              nameClassName="text-white"
              taglineClassName="text-slate-400"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of developers with industry-ready skills. Bridging the
              gap between education and employment through hands-on training and social impact
              campaigns.
            </p>
            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map((socialLink) => {
                const Icon = socialIconById[socialLink.id];

                return (
                  <a
                    key={socialLink.id}
                    aria-label={socialLink.label}
                    href={socialLink.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3 text-sm">
              {PROGRAM_LINKS.map((programLink) => (
                <li key={programLink.label}>
                  <Link to={programLink.to} className="hover:text-blue-400 transition-colors">
                    {programLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  {CONTACT_DETAILS.addressLine1}
                  <br />
                  {CONTACT_DETAILS.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{CONTACT_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{CONTACT_DETAILS.admissionsEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME} Edutech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
