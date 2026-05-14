import { useInView } from "../hooks/useInView";

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20 bg-background px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <div ref={ref} className={`space-y-3 reveal ${inView ? "in-view" : ""}`}>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground section-heading"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            About Me
          </h2>
        </div>

        <div className={`space-y-5 reveal reveal-delay-1 ${inView ? "in-view" : ""}`}>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I am Rahul Adhikari, a passionate Software Engineer with practical experience in full-stack web development. I hold a Bachelor's degree in Computer Science (B.Sc CSIT) from Tribhuvan University, Kathmandu, Nepal. My expertise spans React.js, Next.js, Node.js, Express.js, NestJS, MongoDB, and PostgreSQL.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Currently an Associate Software Engineer contributing to multiple banking software systems supporting <span className="text-blue-400 font-semibold">200+ concurrent users</span>. I have direct client-facing experience through WFC (Work From Client) engagements, collaborating with banking institutions to build and maintain internal systems.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Beyond development, I'm passionate about mentoring — training developers in the MERN stack and guiding full-stack projects from architecture to deployment.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 reveal reveal-delay-2 ${inView ? "in-view" : ""}`}>
          {[
            { title: "Frontend", desc: "React.js, Next.js, TypeScript, Tailwind CSS", color: "blue" },
            { title: "Backend", desc: "Node.js, Express, REST APIs, Microservices", color: "amber" },
            { title: "Databases", desc: "MongoDB, PostgreSQL, Firebase", color: "blue" },
          ].map((item) => (
            <div key={item.title} className="glass-card p-5">
              <div className={`w-1.5 h-5 rounded-full mb-3 ${item.color === "blue" ? "bg-blue-500" : "bg-amber-500"}`} />
              <h3
                className={`text-sm font-bold mb-2 ${item.color === "blue" ? "text-blue-400" : "text-amber-400"}`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
