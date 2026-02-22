import { Link } from "react-router-dom";
import { ArrowRight, Code, Laptop, Users, CheckCircle, Award, Briefcase, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Java Code Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New Internship Batch Starting Soon
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Build Your Career in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Java Development
            </span>
            .
            <br />
            <span className="block mt-2 text-white">Learn. Code. Get Hired.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Master industry-standard Java development through hands-on live coding and real-world
            projects. We empower students with job-ready skills and provide free training campaigns
            for deserving candidates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link
              to="/campaigns"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Apply for Free Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-semibold rounded-lg text-slate-200 bg-slate-800/50 hover:bg-slate-800 hover:text-white md:text-lg transition-all"
            >
              Explore Courses
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full max-w-4xl mx-auto border-t border-slate-800 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">5000+</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">
                Students Trained
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">120+</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">Campaigns</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">
                Hiring Partners
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Students learning"
                className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Community Impact</p>
                    <p className="text-lg font-bold text-gray-900">Empowering Lives</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
                About Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Bridging the Gap Between Education & Industry
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are an educational tech company dedicated to transforming students and graduates
                into industry-ready professionals. Our mission goes beyond business—we believe in
                equal opportunity.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Through our unique{" "}
                <span className="font-semibold text-blue-700">Free Educational Campaigns</span>, we
                select deserving candidates from colleges, orphanages, and government communities to
                receive complete, high-quality training at no cost.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Job-oriented practical training",
                  "Social impact through free education",
                  "Mentorship from industry experts",
                  "Dedicated placement support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group"
              >
                Learn more about our mission
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Java Programs
            </h2>
            <p className="text-lg text-slate-600">
              From basics to advanced frameworks, our curriculum is designed to make you a
              full-stack developer ready for the modern tech landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-2 bg-blue-500"></div>
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <Code className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Core Java Mastery</h3>
                <p className="text-slate-600 mb-6">
                  Master the fundamentals of Java, OOPs concepts, Collections, and Multithreading
                  with hands-on examples.
                </p>
                <Link
                  to="/programs"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  View Curriculum &rarr;
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-2 bg-indigo-500"></div>
              <div className="p-8">
                <div className="bg-indigo-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                  <Zap className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Frameworks</h3>
                <p className="text-slate-600 mb-6">
                  Deep dive into Spring Boot, Hibernate, and Microservices architecture to build
                  scalable enterprise applications.
                </p>
                <Link
                  to="/programs"
                  className="text-indigo-600 font-semibold text-sm hover:underline"
                >
                  View Curriculum &rarr;
                </Link>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-2 bg-teal-500"></div>
              <div className="p-8">
                <div className="bg-teal-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                  <Laptop className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Full Stack & Tools</h3>
                <p className="text-slate-600 mb-6">
                  Complete your stack with React, SQL, Git, Docker, and Maven. Build end-to-end
                  real-world projects.
                </p>
                <Link
                  to="/programs"
                  className="text-teal-600 font-semibold text-sm hover:underline"
                >
                  View Curriculum &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              See All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2 block">
                Social Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Free Educational Campaigns</h2>
              <p className="text-lg text-slate-300 mb-6">
                We believe talent is everywhere, but opportunity is not. Our free campaigns identify
                bright minds from underrepresented communities and provide them with world-class
                training, completely free of cost.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2 rounded-lg shrink-0">
                    <Award className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Merit-Based Selection</h4>
                    <p className="text-sm text-slate-400">
                      Strict selection process to identify the most dedicated students.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-2 rounded-lg shrink-0">
                    <Briefcase className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">100% Placement Support</h4>
                    <p className="text-sm text-slate-400">
                      From resume building to interview prep, we guide you till you get hired.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  to="/campaigns"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-blue-900 bg-white hover:bg-slate-100 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-slate-800/50 backdrop-blur-sm p-2 rounded-2xl border border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Campaign Workshop"
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Career?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            If you've been selected through our campaign, register now for the upcoming internship
            batch. Seats are limited.
          </p>
          <Link
            to="/internship-registration"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all"
          >
            Register for Internship Batch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
