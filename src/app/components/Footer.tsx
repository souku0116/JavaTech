import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

import devoraMarkUrl from "@/assets/devora-mark.svg";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={devoraMarkUrl}
                alt="Devora"
                className="h-11 w-11 rounded-lg shadow-sm ring-1 ring-white/10"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">Devora</span>
                <span className="text-xs text-slate-400 font-medium tracking-wide">EDUTECH SOLUTIONS</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of developers with industry-ready skills. Bridging the gap between education and employment through hands-on training and social impact campaigns.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Our Programs</Link></li>
              <li><Link to="/campaigns" className="hover:text-blue-400 transition-colors">Free Campaigns</Link></li>
              <li><Link to="/internship-registration" className="hover:text-blue-400 transition-colors">Internship Batch</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Java Full Stack</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Core Java Mastery</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Spring Boot & Microservices</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">DevOps Tools</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Live Projects</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>123 Tech Park, Innovation Hub,<br />Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>admissions@javatech.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Devora Edutech Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
