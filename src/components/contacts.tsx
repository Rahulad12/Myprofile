"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities,
              collaboration, or just having a chat about technology and
              innovation. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition"
              >
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">
                    adrahul2014@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition"
              >
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">
                    +977 9817977026
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/rahulad12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition font-medium"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition font-medium"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
