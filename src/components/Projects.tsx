import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cafeu",
    category: "Web Development",
    description:
      "Modern and responsive restaurant website using Next.js, Tailwind CSS, and Lucide React with elegant menu display and smooth navigation.",
    link: "https://restaurant-portfolio-sepia.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "Lucide React"],
    image: "/projects/cafe.png",
  },
  {
    title: "Berto Store",
    category: "Full-Stack E-commerce",
    description:
      "Full-stack e-commerce application with Next.js frontend, Flask backend, and Stripe payment integration for seamless shopping experience.",
    link: "https://bertostore.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Lucide React", "Flask", "Stripe"],
    image: "/projects/bertostore.png",
  },
  {
    title: "Portfolio One",
    category: "Web Development",
    description:
      "This was my first portfolio website built using Next.js and Tailwind CSS to showcase my projects and skills effectively.",
    link: "https://godfredquarm-omega.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Lucide React"],
    image: "/projects/portfolio1.png",
  },
  {
    title: "Navida",
    category: "Web Development",
    description:
      "Modern and responsive restaurant website using Next.js, Tailwind CSS, and Lucide React with elegant menu display and smooth navigation.",
    link: "https://navida-mu.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Lucide React"],
    image: "/projects/navida.png",
  },
  {
    title: "SafoAi",
    category: "AI Integration",
    description:
      "AI-powered personal assistant web app using Next.js and Tailwind CSS, featuring natural language processing for enhanced user interaction.",
    link: "https://safo-ai.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Lucide React"],
    image: "/projects/safoai.png",
  },
  {
    title: "Product Ordering App",
    category: "Full-Stack App",
    description:
      "Full-stack product ordering application with Next.js frontend and Flask backend, enabling users to browse, order, and manage products efficiently.",
    link: "https://pomegrid-order-zeta.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Lucide React", "Flask"],
    image: "/projects/pomegrid-order.png",
  },
  {
    title: "XavsLab",
    category: "Corporate Website",
    description:
      "Corporate website for XavsTech showcasing services, team, and portfolio with a focus on modern design and user experience.",
    link: "https://xavstech.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "AI Chat"],
    image: "/projects/xavslab.png",
  },
  {
    title: "Beatitude Ventures",
    category: "Corporate Website",
    description:
      "Professional software development company website highlighting services, solutions, and portfolio with focus on branding and usability.",
    link: "https://beatitude-ventures.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/beatitudes.png",
  },
  {
    title: "Supermarket Webapp",
    category: "Full-Stack App",
    description:
      "Full-stack web application for inventory management with Flask APIs, JWT authentication, and Next.js frontend for efficient product tracking.",
    link: "https://supermarket-chi.vercel.app",
    tech: ["Next.js", "Flask", "JWT", "MongoDB"],
    image: "/projects/Procurement.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="section-label">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mt-4">
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
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-3xl overflow-hidden hover-lift"
            >
              <div className=" flex items-center justify-center">
                {project?.image && (
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                )}
                {/* <Image src={project?.image} alt="" width={1000} height={1000} /> */}
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-900 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-secondary group-hover:bg-blue-900 rounded-full flex items-center justify-center group-hover:text-accent-foreground transition-colors">
                    <ArrowUpRight
                      size={20}
                      className="group-hover:text-yellow-500"
                    />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
