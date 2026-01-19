import { Code, Smartphone, Database, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Creating robust APIs and server-side solutions with Node.js, Python, Flask, and Express.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native for iOS and Android platforms.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing and optimizing databases with MongoDB, SQL, and efficient data modeling.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="section-label">MY SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              What I'm
              <br />
              Offering
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0">
            From concept to deployment, I provide end-to-end solutions for your
            digital needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
