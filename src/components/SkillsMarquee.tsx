const skills = [
  "HTML",
  "CSS",
  "TAILWIND",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "REACT NATIVE",
  "PYTHON",
  "FLASK",
  "NODE.JS",
  "MONGODB",
  "SQL",
  "C#",
  "ZUSTAND",
  "REDUX",
  "POSTMAN",
  "DOCKER",
  "GIT",
];

const SkillsMarquee = () => {
  return (
    <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className="flex items-center gap-6 mx-6">
              <span className="text-sm md:text-base font-medium tracking-wide">
                {skill}
              </span>
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
