import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      <div
        className="h-full w-full absolute top-0 left-0 z-10"
        style={{
          backgroundImage: 'url("/images/bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "rotate(180deg)",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center gap-2 mb-6 border border-blue-50 backdrop-blur-md w-fit justify-center px-3 py-1 rounded-full">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm text-white">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 text-white">
              Hello! <span className="text-yellow-600">I'm Godfred</span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl md:text-2xl text-white font-medium">
                Full-Stack Engineer
              </span>
              <span className="text-accent">✦</span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Detail-oriented Full-Stack Engineer with 4 years of experience
              designing and building scalable, user-friendly, and visually
              engaging web applications. Passionate about leveraging the latest
              frameworks and technologies to drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="mailto:godfredquarm83@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-600 text-primary-foreground rounded-full font-medium hover:bg-yellow-500/90 transition-all hover-lift"
              >
                Let's Talk
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-600 text-white rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Projects <ArrowDown size={18} />
              </Link>
            </div>

            <ul className="space-y-2 pb-10 text-muted-foreground">
              <li className="flex items-center text-gray-300 gap-2">
                <span className="text-yellow-600">✓</span> Building scalable web
                applications
              </li>
              <li className="flex items-center text-gray-300 gap-2">
                <span className="text-yellow-600">✓</span> Clean, efficient, and
                well-documented code
              </li>
              <li className="flex items-center text-gray-300 gap-2">
                <span className="text-yellow-600">✓</span> Seamless front-end &
                back-end integration
              </li>
            </ul>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-137.5 md:h-137.5 rounded-3xl overflow-hidden">
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
              <div className="absolute -bottom-6 -left-6 border border-yellow-600 rounded-2xl px-6 py-4 shadow-lg bg-primary">
                <p className="text-sm text-white">Experience</p>
                <p className="text-2xl font-bold text-white">4+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
