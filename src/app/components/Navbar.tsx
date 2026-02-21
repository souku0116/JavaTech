import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

import devoraMarkUrl from "@/assets/devora-mark.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <img
                src={devoraMarkUrl}
                alt="Devora"
                className="h-11 w-11 rounded-lg shadow-sm ring-1 ring-black/5"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">Devora</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">EDUTECH SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200 border-b-2 py-1",
                  isActive(link.path)
                    ? "text-blue-700 border-blue-700"
                    : "text-slate-600 border-transparent hover:text-blue-600 hover:border-blue-200"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
              <Link
                to="/internship-registration"
                className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
              >
                Internship Batch
              </Link>
              <Link
                to="/campaigns"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                Apply for Free
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0 z-40 animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block px-3 py-3 rounded-md text-base font-medium",
                  isActive(link.path)
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-gray-50 hover:text-blue-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2 pt-2">
              <Link
                to="/internship-registration"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50 hover:text-blue-700"
              >
                Internship Registration
              </Link>
              <Link
                to="/campaigns"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-3 px-5 py-3 rounded-md text-base font-semibold text-white bg-blue-700 hover:bg-blue-800"
              >
                Apply for Free Campaign
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
