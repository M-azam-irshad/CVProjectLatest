import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  MapPin,
  Linkedin,
  Code,
  Star,
  Trophy,
  Target,
  Download,
  BookOpen,
  Award,
} from "lucide-react";

const ModernCVPreview = () => {
  const [completionScore] = useState(85);
  const [activeSection, setActiveSection] = useState("profile");

  const cvData = {
    name: "Azan Irshad",
    email: "irshadazan709@gmail.com",
    location: "Bahawalpur",
    linkedin: "Azan Irshad",
    title: "Mechanics Engineer",
    avatar: "/api/placeholder/150/150",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
    experience: [
      {
        title: "Frontend Developer",
        company: "Tech Solutions",
        duration: "2023 - Present",
        description:
          "Building responsive web applications using React and modern technologies.",
      },
      {
        title: "Junior Developer",
        company: "StartupXYZ",
        duration: "2022 - 2023",
        description:
          "Developed user interfaces and collaborated with design teams.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Engineering",
        institution: "University of Engineering",
        duration: "2018 - 2022",
        gpa: "3.8/4.0",
      },
    ],
  };

  // Intersection Observer for scroll-based section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const ProgressRing = ({ progress }) => {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f9fbfe] to-[#eef2f9]">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-700">{progress}%</span>
        </div>
      </div>
    );
  };

  const SkillBadge = ({ skill, level = 90 }) => (
    <div className="group relative">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-4 py-2 border border-blue-100 hover:border-blue-200 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-100/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">{skill}</span>
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
    </div>
  );

  const NavigationDot = ({ sectionId, isActive, label }) => (
    <a
      href={`#${sectionId}`}
      className={`group flex items-center gap-3 p-2 rounded-xl transition-all duration-300 ${
        isActive ? "bg-white/20" : "hover:bg-white/10"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isActive ? "bg-white scale-125" : "bg-white/50"
        }`}
      ></div>
      <span
        className={`text-sm font-medium transition-all duration-300 ${
          isActive
            ? "text-white opacity-100"
            : "text-white/70 opacity-0 group-hover:opacity-100"
        }`}
      >
        {label}
      </span>
    </a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CV Preview
              </h1>
              <p className="text-gray-600 text-sm">
                Your professional profile showcase
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <ProgressRing progress={completionScore} />
                <p className="text-xs text-gray-500 mt-1">Complete</p>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 flex items-center gap-2">
                <Download size={16} />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Dots - Fixed */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-gradient-to-b from-blue-500 to-purple-500 rounded-full p-4 shadow-lg backdrop-blur-sm">
          <div className="space-y-4">
            <NavigationDot
              sectionId="profile"
              isActive={activeSection === "profile"}
              label="Profile"
            />
            <NavigationDot
              sectionId="skills"
              isActive={activeSection === "skills"}
              label="Skills"
            />
            <NavigationDot
              sectionId="experience"
              isActive={activeSection === "experience"}
              label="Experience"
            />
            <NavigationDot
              sectionId="education"
              isActive={activeSection === "education"}
              label="Education"
            />
            <NavigationDot
              sectionId="achievements"
              isActive={activeSection === "achievements"}
              label="Achievements"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Sidebar - Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/20">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {cvData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                      {cvData.name}
                    </h2>
                    <p className="text-blue-600 font-medium mb-4">
                      {cvData.title}
                    </p>
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
                        <span className="text-sm font-medium text-gray-700">
                          Level 5 Profile
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail size={16} className="text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600 flex-1">
                        {cvData.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin size={16} className="text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-600 flex-1">
                        {cvData.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Linkedin size={16} className="text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600 flex-1">
                        {cvData.linkedin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="lg:col-span-2 space-y-12">
              {/* Profile Section */}
              <section id="profile" data-section className="scroll-mt-32 bg-white rounded-3xl p-8 shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Profile Overview
                    </h3>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Passionate Mechanics Engineer with expertise in modern web
                      technologies. Skilled in creating responsive and
                      user-friendly applications using React, JavaScript, and
                      modern CSS frameworks. Always eager to learn and tackle
                      new challenges in the ever-evolving tech landscape.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 px-4 py-3 rounded-xl border border-blue-100 text-center">
                      <div className="text-2xl font-bold text-blue-600">2+</div>
                      <div className="text-sm text-gray-600">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-purple-50 px-4 py-3 rounded-xl border border-purple-100 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        15+
                      </div>
                      <div className="text-sm text-gray-600">
                        Projects Completed
                      </div>
                    </div>
                    <div className="bg-green-50 px-4 py-3 rounded-xl border border-green-100 text-center">
                      <div className="text-2xl font-bold text-green-600">4</div>
                      <div className="text-sm text-gray-600">Core Skills</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" data-section className="scroll-mt-32 bg-white rounded-3xl p-8 shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Code size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Technical Skills
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {cvData.skills.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Skill Achievements
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-yellow-500" />
                        <span className="text-sm text-gray-600">
                          React Specialist Badge
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-yellow-500" />
                        <span className="text-sm text-gray-600">
                          JavaScript Expert Level
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" data-section className="scroll-mt-32 bg-white rounded-3xl p-8 shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Trophy size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Work Experience
                  </h3>
                </div>
                <div className="relative border-l-4 border-blue-100 ml-4 space-y-8">
                  {cvData.experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="relative pl-8 pb-4 before:content-[''] before:absolute before:left-[-10px] before:top-2 before:w-4 before:h-4 before:bg-blue-500 before:rounded-full shadow-[inset_6px_6px_10px_#d1d9e6,inset_-6px_-6px_10px_#ffffff] p-6 rounded-2xl bg-white"
                    >
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <p className="text-blue-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                      <p className="mt-2 text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section id="education" data-section className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  {cvData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="shadow-[inset_6px_6px_10px_#d1d9e6,inset_-6px_-6px_10px_#ffffff] bg-white rounded-3xl p-6"
                    >
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-purple-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">
                        {edu.duration} | GPA: {edu.gpa}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements Section */}
              <section id="achievements" data-section className="scroll-mt-32">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Award size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Achievements
                    </h3>
                  </div>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target size={24} className="text-gray-400" />
                    </div>
                    <p className="text-gray-500 mb-4">
                      No achievements added yet
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300">
                      Add Achievement
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCVPreview;
