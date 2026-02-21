import { Users, Target, Rocket, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About JavaTech</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are a mission-driven EdTech company committed to democratizing technology education.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At JavaTech, we believe that quality education should be accessible to everyone, regardless of their financial background. Our mission is to bridge the gap between academic learning and industry requirements.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We combine professional corporate training with social responsibility, ensuring that for every paid enrollment, we contribute towards our free educational campaigns for underprivileged students.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Target className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Job Ready</h3>
              <p className="text-sm text-slate-600 mt-2">Focus on employability</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <Heart className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Social Impact</h3>
              <p className="text-sm text-slate-600 mt-2">Free campaigns</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <Users className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Community</h3>
              <p className="text-sm text-slate-600 mt-2">Strong alumni network</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <Rocket className="h-10 w-10 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Innovation</h3>
              <p className="text-sm text-slate-600 mt-2">Modern tech stack</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
               <div className="text-4xl font-bold text-blue-900 mb-2">5000+</div>
               <div className="text-slate-600 font-medium">Students Trained</div>
             </div>
             <div>
               <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
               <div className="text-slate-600 font-medium">College Partners</div>
             </div>
             <div>
               <div className="text-4xl font-bold text-blue-900 mb-2">120+</div>
               <div className="text-slate-600 font-medium">Free Campaigns</div>
             </div>
             <div>
               <div className="text-4xl font-bold text-blue-900 mb-2">300+</div>
               <div className="text-slate-600 font-medium">Placements</div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
