import { useState } from "react";
import {
  ChevronDown,
  Wrench,
  AlertTriangle,
  Lightbulb,
  Trophy,
} from "lucide-react";

interface ExperienceDetail {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  techStack: string[];
  challenges: string[];
  solutions: string[];
  achievements: string[];
}

const experiences: ExperienceDetail[] = [
  {
    period: "Oct 2024 — Oct 2025",
    role: "Frontend Developer",
    company: "Innorik",
    type: "Full-time",
    description:
      "Part of the frontend team building web applications and user-friendly websites. Worked with CI/CD pipelines using GitHub for streamlined deployments.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
      "Vercel",
      "REST APIs",
    ],
    challenges: [
      "Managing complex state across multiple interconnected components",
      "Ensuring consistent UI/UX across different browsers and devices",
      "Integrating with various backend services with different API structures",
    ],
    solutions: [
      "Implemented Zustand for efficient global state management with minimal boilerplate",
      "Established a component library with Tailwind CSS ensuring cross-browser compatibility",
      "Created reusable API service layers with TypeScript interfaces for type-safe integrations",
    ],
    achievements: [
      "Reduced page load times by 40% through code splitting and lazy loading",
      "Delivered 5+ client projects on schedule with positive feedback",
      "Streamlined deployment process, reducing release time from hours to minutes",
    ],
  },
  {
    period: "Nov 2023 — Mar 2024",
    role: "Full Stack Developer",
    company: "STMA, Takoradi",
    type: "Internship",
    description:
      "Designed, developed, and managed a full web application and data collection site. Built interfaces with HTML, CSS, JavaScript, React, and Flask.",
    techStack: [
      "React",
      "Flask",
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
      "PostgreSQL",
      "REST APIs",
    ],
    challenges: [
      "Building a complete application from scratch with limited resources",
      "Designing a data collection system that non-technical staff could easily use",
      "Ensuring data integrity and security for sensitive government information",
    ],
    solutions: [
      "Adopted an agile approach, delivering MVP first then iterating based on feedback",
      "Created an intuitive UI with clear form validation and helpful error messages",
      "Implemented role-based access control and data encryption for security",
    ],
    achievements: [
      "Successfully delivered a full-stack application handling 1000+ records",
      "Reduced manual data entry time by 60% through automated workflows",
      "Received commendation from department head for exceptional work quality",
    ],
  },
  {
    period: "Nov 2022 — Jan 2023",
    role: "IT Intern",
    company: "GPHA MIS Department",
    type: "Internship",
    description:
      "Gained comprehensive understanding of networking, management, and software development in a professional environment.",
    techStack: [
      "Network Administration",
      "Windows Server",
      "SQL",
      "Hardware Troubleshooting",
      "IT Support",
    ],
    challenges: [
      "Understanding complex enterprise network infrastructure",
      "Troubleshooting hardware and software issues under time pressure",
      "Learning multiple systems and protocols simultaneously",
    ],
    solutions: [
      "Created detailed documentation of network topology for future reference",
      "Developed a systematic troubleshooting checklist to improve efficiency",
      "Dedicated extra hours to self-study and hands-on practice",
    ],
    achievements: [
      "Resolved 50+ IT support tickets during the internship period",
      "Documented standard operating procedures for common issues",
      "Gained strong foundation in enterprise IT operations",
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="section-label">CAREER PATH</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Experience
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 text-sm">
            Click on any experience to see more details
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-accent shadow-lg"
                    : "border-border hover:border-accent/50"
                }`}
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-2xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </p>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 border-t border-border/50 pt-6">
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Wrench className="w-5 h-5 text-accent" />
                          <h4 className="font-semibold">Tech Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-muted text-sm rounded-lg font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Challenges */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-5 h-5 text-orange-500" />
                            <h4 className="font-semibold">Challenges Faced</h4>
                          </div>
                          <ul className="space-y-2">
                            {exp.challenges.map((challenge, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="w-5 h-5 text-green-500" />
                            <h4 className="font-semibold">How I Solved Them</h4>
                          </div>
                          <ul className="space-y-2">
                            {exp.solutions.map((solution, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <h4 className="font-semibold">Key Achievements</h4>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2 bg-muted/50 p-3 rounded-lg"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education */}
        <div className="mt-16">
          <span className="section-label">EDUCATION</span>
          <h3 className="text-3xl font-display font-bold mt-4 mb-8">
            Academic Background
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-2">2020 — 2024</p>
              <h4 className="text-lg font-bold mb-1">
                Takoradi Technical University
              </h4>
              <p className="text-muted-foreground">
                Bachelor of Technology in Information Technology
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-2">2018 — 2019</p>
              <h4 className="text-lg font-bold mb-1">MobileCare</h4>
              <p className="text-muted-foreground">
                Hardware Support and Maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
