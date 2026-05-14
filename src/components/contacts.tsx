import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-20 bg-card px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div ref={ref} className={`space-y-3 reveal ${inView ? "in-view" : ""}`}>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground section-heading"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground pl-5 text-sm">
            Open to new opportunities, freelance projects, and interesting conversations.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-1 ${inView ? "in-view" : ""}`}>
          {/* Direct contact */}
          <div className="space-y-4">
            <a
              href="mailto:adrahul2014@gmail.com"
              className="glass-card flex items-center gap-4 p-5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Email</p>
                <p className="text-foreground font-semibold text-sm">adrahul2014@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+9779817977026"
              className="glass-card flex items-center gap-4 p-5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1">Phone</p>
                <p className="text-foreground font-semibold text-sm">+977 9817977026</p>
              </div>
            </a>
          </div>

          {/* Social + CTA */}
          <div className="glass-card p-6 space-y-5">
            <div>
              <h3
                className="text-lg font-bold text-foreground mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Connect With Me
              </h3>
              <p className="text-xs text-muted-foreground">Follow my work and stay in touch</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/rahulad12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition text-sm font-medium group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                  <Github className="w-4 h-4 text-blue-400" />
                </div>
                github.com/rahulad12
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition text-sm font-medium group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                linkedin.com/in/rahul-adhikari
              </a>
            </div>

            <a
              href="mailto:adrahul2014@gmail.com"
              className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm glow-blue"
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
