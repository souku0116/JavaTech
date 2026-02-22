import { Handshake, Heart, Users, School, Building2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Campaigns() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Social Initiative
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Coding for Everyone</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We partner with colleges, orphanages, and government institutions to provide free,
            high-quality technical training to deserving students who lack financial resources.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Our Campaign Works</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">1. Partnership</h3>
                  <p className="text-slate-600">
                    We collaborate with educational institutions and NGOs to identify potential
                    candidates.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-full h-fit">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">2. Selection</h3>
                  <p className="text-slate-600">
                    Candidates undergo a screening process (Aptitude + Basic Logic) to ensure
                    dedication and learning potential.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-full h-fit">
                  <School className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">3. Training</h3>
                  <p className="text-slate-600">
                    Selected students receive 3-6 months of intensive training in Java Development
                    completely free of cost.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-full h-fit">
                  <Handshake className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">4. Placement</h3>
                  <p className="text-slate-600">
                    We assist them in securing internships and full-time jobs with our hiring
                    partners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Eligibility Criteria</h3>
            <ul className="space-y-4 mb-8">
              {[
                "Students from economically weaker sections",
                "Graduates (B.Tech, BCA, B.Sc Computer Science)",
                "Minimum 60% in academic records",
                "Clearance of our scholarship entrance test",
                "Referral from partner institution or NGO",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-slate-900 mb-2">Are you an Institution?</h4>
              <p className="text-sm text-slate-600 mb-4">
                Partner with us to bring this opportunity to your students.
              </p>
              <Link to="/contact" className="text-blue-600 font-semibold text-sm hover:underline">
                Contact our Partnership Team &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Make an Impact</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            If you represent a college, NGO, or government body and want to organize a campaign for
            your students, let's talk.
          </p>
          <Link
            to="/contact"
            className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
