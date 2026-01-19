import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Cafeu",
    category: "Web Development",
    description:
      "Modern and responsive restaurant website using Next.js, Tailwind CSS, and Lucide React with elegant menu display and smooth navigation.",
    link: "https://restaurant-portfolio-sepia.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "Lucide React"],
  },
  {
    title: "XavsLab",
    category: "AI Integration",
    description:
      "Professional software development company website with an AI-powered chat assistant for visitor engagement and instant support.",
    link: "https://xavstech.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "AI Chat"],
  },
  {
    title: "Beatitude Ventures",
    category: "Corporate Website",
    description:
      "Professional software development company website highlighting services, solutions, and portfolio with focus on branding and usability.",
    link: "https://beatitude-ventures.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Supermarket Webapp",
    category: "Full-Stack App",
    description:
      "Full-stack web application for inventory management with Flask APIs, JWT authentication, and Next.js frontend for efficient product tracking.",
    link: "https://supermarket-chi.vercel.app",
    tech: ["Next.js", "Flask", "JWT", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="section-label">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Case Studies
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0">
            A selection of projects that showcase my expertise in building
            modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-3xl overflow-hidden hover-lift"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary to-cream-dark flex items-center justify-center">
                <span className="text-6xl font-display font-bold text-muted-foreground/30 group-hover:text-accent/50 transition-colors">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
