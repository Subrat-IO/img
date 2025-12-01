import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Code,
  Server,
  Database,
  Cloud,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function ModernResume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header with Gradient Background */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-2 tracking-tight">
              Subrat Sethi
            </h1>
            <p className="text-2xl font-light mb-6 text-purple-100">
              Full Stack Developer
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Phone size={16} />
                <span>+91 63722 69905</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Mail size={16} />
                <span>subratsethi@example.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Linkedin size={16} />
                <span>subrat-sethi</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Github size={16} />
                <span>subratsethi</span>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg backdrop-blur-sm">
                <MapPin size={16} />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Professional Summary */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-purple-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Professional Summary
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed border-l-4 border-purple-600 pl-4 bg-purple-50 p-4 rounded-r-lg">
              Full Stack Developer with 1+ year of experience designing,
              developing, and deploying scalable web applications using the MERN
              stack. Proven expertise in cloud infrastructure (AWS, Docker),
              CI/CD automation, and building production-ready systems. Strong
              foundation in modern frontend frameworks (React, Next.js) and
              backend architecture with focus on performance optimization and
              scalability.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Technical Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                <h3 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                  <Code size={18} /> Frontend
                </h3>
                <p className="text-sm text-gray-700">
                  HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Redux,
                  Tailwind CSS, Bootstrap
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                  <Server size={18} /> Backend
                </h3>
                <p className="text-sm text-gray-700">
                  Node.js, Express.js, REST API, JWT Authentication, WebSockets
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                <h3 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                  <Database size={18} /> Databases
                </h3>
                <p className="text-sm text-gray-700">MongoDB, MySQL</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
                <h3 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                  <Cloud size={18} /> Cloud & DevOps
                </h3>
                <p className="text-sm text-gray-700">
                  Docker, Kubernetes, AWS EC2, Render, CI/CD Pipelines, Linux
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-green-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-6 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Full Stack Developer (MERN)
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      AdSquare Tech Solutions
                    </p>
                  </div>
                  <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                    Nov 2025 - Present
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Bengaluru, Karnataka
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    Developing and maintaining full-stack web applications using
                    MongoDB, Express.js, React.js, and Node.js
                  </li>
                  <li>
                    Building RESTful APIs and integrating third-party services
                    for enhanced application functionality
                  </li>
                  <li>
                    Collaborating with cross-functional teams to deliver
                    high-quality, scalable solutions
                  </li>
                  <li>
                    Implementing responsive UI components and optimizing
                    application performance
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Full Stack Developer
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      Nirmalya Metropolis
                    </p>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    Apr 2024 - Mar 2025
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Bengaluru, India</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    Maintained and enhanced frontend of CSKart e-commerce
                    platform with responsive design
                  </li>
                  <li>
                    Managed server operations including cPanel configurations
                    and deployment pipelines
                  </li>
                  <li>
                    Collaborated with cross-functional teams to optimize
                    application performance
                  </li>
                  <li>
                    Implemented bug fixes and feature enhancements improving
                    site stability
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-cyan-600 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Full Stack Development Training
                    </h3>
                    <p className="text-cyan-600 font-semibold">Apna College</p>
                  </div>
                  <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                    May 2025 - Present
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Remote</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    Developed industry-standard clone applications (LinkedIn,
                    ChatGPT, Airbnb)
                  </li>
                  <li>
                    Gained hands-on experience with Dockerized deployments to
                    AWS EC2 and Render
                  </li>
                  <li>
                    Implemented CI/CD pipelines with automated testing and
                    monitoring
                  </li>
                  <li>
                    Mastered REST API design, state management, and server-side
                    rendering
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-orange-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Key Projects</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Airbnb Clone - Full-Stack Property Booking Platform
                </h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Built comprehensive property booking application with search,
                  filtering, real-time availability, and secure booking system.
                  Implemented admin dashboard for managing listings and user
                  analytics with interactive map integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                    Node.js
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    React.js
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    MongoDB
                  </span>
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs">
                    Docker
                  </span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">
                    AWS
                  </span>
                </div>
                <p className="text-sm font-semibold text-purple-700">
                  ✨ Impact: Fully functional booking system with authentication
                  & payment-ready architecture
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  LinkedIn Clone - Professional Networking Platform
                </h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Developed social networking platform with profile management,
                  posts feed, connection requests, and real-time messaging.
                  Leveraged Next.js for SSR to improve SEO and performance with
                  WebSocket-powered notifications.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    Next.js
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Node.js
                  </span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                    MongoDB
                  </span>
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs">
                    WebSockets
                  </span>
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs">
                    Tailwind CSS
                  </span>
                </div>
                <p className="text-sm font-semibold text-blue-700">
                  ✨ Features: User profiles, media uploads, connection
                  management, real-time chat
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  ChatGPT Clone - AI-Powered Conversational Interface
                </h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Created AI-powered chat application with secure
                  authentication, session management, and conversation history.
                  Integrated OpenAI API for natural language processing with
                  user session tracking and conversation persistence.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Next.js
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    Express.js
                  </span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                    MongoDB
                  </span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">
                    OpenAI API
                  </span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                    JWT Auth
                  </span>
                </div>
                <p className="text-sm font-semibold text-green-700">
                  ✨ Highlights: Real-time messaging, secure sessions,
                  responsive design, conversation threading
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-indigo-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Bachelor of Technology in Computer Science & Engineering
                  </h3>
                  <p className="text-indigo-600 font-semibold">
                    Gandhi Engineering College
                  </p>
                </div>
                <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">
                  2020 - 2024
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Bhubaneswar, Odisha</p>
              <p className="text-lg font-bold text-indigo-700 mb-2">
                CGPA: 8.5/10
              </p>
              <p className="text-sm text-gray-700">
                Relevant Coursework: Data Structures, Algorithms, Database
                Management, Operating Systems, Computer Networks
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-yellow-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Certifications & Strengths
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <h3 className="font-bold text-yellow-700 mb-2">
                  Certifications
                </h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Full Stack Web Development - Apna College (2024)</li>
                  <li>✓ Docker and Kubernetes for Developers</li>
                  <li>⏳ AWS Cloud Practitioner Essentials (In Progress)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <h3 className="font-bold text-green-700 mb-2">
                  Core Strengths
                </h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Strong problem-solving & clean code practices</li>
                  <li>✓ Agile workflows & Git version control</li>
                  <li>✓ Excellent team collaboration skills</li>
                  <li>✓ Quick learner passionate about emerging tech</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-center text-white">
          <p className="text-sm">
            Languages: English (Fluent) | Hindi (Fluent) | Odia (Native)
          </p>
        </div>
      </div>
    </div>
  );
}
