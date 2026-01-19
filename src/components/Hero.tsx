import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
              Hello! <span className="text-blue-800">I'm Godfred</span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl md:text-2xl font-medium">
                Full-Stack Engineer
              </span>
              <span className="text-accent">✦</span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Detail-oriented Full-Stack Engineer with 4 years of experience
              designing and building scalable, user-friendly, and visually
              engaging web applications. Passionate about leveraging the latest
              frameworks and technologies to drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="mailto:godfredquarm83@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover-lift"
              >
                Let's Talk
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Projects <ArrowDown size={18} />
              </a>
            </div>

            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Building scalable web
                applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Clean, efficient, and
                well-documented code
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Seamless front-end &
                back-end integration
              </li>
            </ul>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-105 md:h-105 rounded-3xl overflow-hidden bg-linear-to-br from-accent/20 to-cream-dark animate-float">
                <Image
                  src={"/images/animatedProfile.png"}
                  alt="Godfred Agyekum Quarm"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-2xl font-bold">4+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
