const About = () => {
  return (
    <section id="about" className="py-20 bg-card px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </div>

        <div className="space-y-6 text-foreground">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am Rahul Adhikari, a passionate Software Engineer with practical
            experience in full-stack web development, I hold a Bachelor’s degree
            in Computer Science (B.Sc CSIT) from Tribhuvan University,
            Kathmandu, Nepal. My technical expertise includes modern JavaScript
            technologies such as React.js, Next.js, Node.js, Express.js, and
            NestJS, along with experience working with databases such as MongoDB
            and PostgreSQL.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Currently, I work as an Associate Software Engineer where I
            contribute to the development of multiple banking software systems
            that support 200+ concurrent users. In my role, I primarily develop
            frontend applications using React.js. I have also gained valuable
            experience working directly with clients through WFC (Work From
            Client) engagements, collaborating with a banking institution to
            develop and maintain internal systems.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            In addition to my professional experience, I have developed multiple
            projects using the MERN stack (MongoDB, Express.js, React.js, and
            Node.js), building scalable web applications and RESTful APIs.
            Earlier in my career, I gained hands-on industry experience through
            internships as a Node.js Developer and React.js Developer during my
            university studies, where I strengthened my understanding of
            full-stack development and modern application architecture
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Beyond development, I am passionate about mentoring and knowledge
            sharing. I have provided part-time mentorship to secondary-level
            students and have trained aspiring developers in the MERN stack,
            guiding them in building full-stack applications and backend
            projects using Node.js.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="bg-background p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Frontend
            </h3>
            <p className="text-muted-foreground">
              React.js, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-primary mb-2">Backend</h3>
            <p className="text-muted-foreground">
              Node.js, Express, REST APIs, Microservices
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Databases
            </h3>
            <p className="text-muted-foreground">MongoDB, PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
