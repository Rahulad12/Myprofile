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
            Software Engineer with 1+ year of experience in full-stack MERN
            development and enterprise banking applications. Experienced in
            building secure, scalable React.js frontends and Node.js/Express
            backends, integrating REST APIs, authentication mechanisms, and
            security controls. Hands-on experience with regulated banking
            systems, biometric integration, and secure data handling.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Beyond coding, I'm committed to continuous learning and staying
            updated with the latest industry trends. I believe in writing
            maintainable code, fostering collaboration, and creating solutions
            that make a real impact.
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
            <p className="text-muted-foreground">
              MongoDB, PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
