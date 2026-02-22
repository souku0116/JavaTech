import { BookOpen, Check, Code, Database, Server, Terminal, Layers, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    {
      title: "Core Java Development",
      description:
        "Build a strong foundation in Java programming. Perfect for beginners and refreshers.",
      icon: <Code className="h-6 w-6 text-orange-500" />,
      color: "border-orange-500",
      bg: "bg-orange-50",
      topics: [
        "Java Basics & OOPs Concepts",
        "Exception Handling & Collections",
        "Multithreading & Concurrency",
        "Java 8+ Features (Lambdas, Streams)",
        "File Handling & I/O",
        "JDBC & Database Connectivity",
      ],
    },
    {
      title: "Advanced Java Frameworks",
      description: "Master enterprise-level development with Spring Boot and Hibernate.",
      icon: <Server className="h-6 w-6 text-green-500" />,
      color: "border-green-500",
      bg: "bg-green-50",
      topics: [
        "Spring Core & Dependency Injection",
        "Spring Boot & REST APIs",
        "Hibernate & JPA",
        "Microservices Architecture",
        "Spring Security & JWT",
        "Unit Testing with JUnit & Mockito",
      ],
    },
    {
      title: "Full Stack Java Developer",
      description:
        "Become a complete developer by mastering both frontend and backend technologies.",
      icon: <Layers className="h-6 w-6 text-purple-500" />,
      color: "border-purple-500",
      bg: "bg-purple-50",
      topics: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "React.js & State Management",
        "Tailwind CSS & Responsive Design",
        "Integrating React with Spring Boot",
        "Deployment (AWS/Azure Basics)",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Tools & DevOps",
      description: "Learn the essential tools that every modern developer needs to know.",
      icon: <Terminal className="h-6 w-6 text-blue-500" />,
      color: "border-blue-500",
      bg: "bg-blue-50",
      topics: [
        "Git & GitHub Version Control",
        "Maven & Gradle Build Tools",
        "Docker & Containerization",
        "Jenkins & CI/CD",
        "Postman for API Testing",
        "Linux Basics",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Training Programs</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Industry-aligned curriculum designed to transform you from a student to a professional
            developer.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 ${program.color} border-x border-b border-gray-100`}
            >
              <div
                className={`w-14 h-14 ${program.bg} rounded-xl flex items-center justify-center mb-6`}
              >
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
              <p className="text-slate-600 mb-8">{program.description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                  What you'll learn:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Projects Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-World Live Projects</h2>
            <p className="text-lg text-slate-600">
              Apply your knowledge by building complex applications that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-40 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <Globe className="h-16 w-16 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">E-Commerce Platform</h3>
              <p className="text-sm text-slate-600 mb-4">
                Build a full-featured shopping cart with payment gateway integration using Spring
                Boot and React.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  Spring Boot
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">React</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-40 bg-indigo-100 rounded-lg mb-6 flex items-center justify-center">
                <Database className="h-16 w-16 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Hospital Management System</h3>
              <p className="text-sm text-slate-600 mb-4">
                Create a secure patient management system with appointment booking and record
                keeping.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  Hibernate
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">MySQL</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-40 bg-teal-100 rounded-lg mb-6 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-teal-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">LMS Dashboard</h3>
              <p className="text-sm text-slate-600 mb-4">
                Develop a learning management system for schools to manage students, courses, and
                exams.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  Microservices
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
        <div className="flex gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Enquire Now
          </Link>
          <Link
            to="/internship-registration"
            className="border border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
          >
            Join Internship
          </Link>
        </div>
      </div>
    </div>
  );
}
