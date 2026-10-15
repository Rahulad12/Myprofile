import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./section-heading";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 md:py-24 bg-card px-6">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${inView ? "in-view" : ""}`}>
        <SectionHeading
          index="07"
          title="Get In Touch"
          subtitle="Open to new opportunities, freelance projects, and interesting conversations."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <a href="mailto:rahul.adhikari2058@gmail.com" className="glass-card flex items-center gap-4 p-5 group">
              <div className="w-11 h-11 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Email</p>
                <p className="text-foreground font-semibold text-sm break-all">rahul.adhikari2058@gmail.com</p>
              </div>
            </a>

            <a href="tel:+447345131450" className="glass-card flex items-center gap-4 p-5 group">
              <div className="w-11 h-11 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Phone</p>
                <p className="text-foreground font-semibold text-sm">+44 7345 131450</p>
              </div>
            </a>

            <div className="glass-card flex items-center gap-4 p-5">
              <div className="w-11 h-11 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Location</p>
                <p className="text-foreground font-semibold text-sm">SE18 5AJ, London, UK</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Connect With Me
              </h3>
              <p className="text-xs text-muted-foreground">Follow my work and stay in touch</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/rahulad12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition text-sm font-medium group"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                github.com/rahulad12
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition text-sm font-medium group"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary border border-primary/20 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                linkedin.com/in/rahul-adhikari
              </a>
            </div>

            <a
              href="mailto:rahul.adhikari2058@gmail.com"
              className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold transition-colors text-sm"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
