import React, { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ContactForm } from "../types";
import { socialLinks } from "../data/constant";

interface ContactSectionProps {
  showToast: (message: string, type: "success" | "error") => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ showToast }) => {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState<ContactForm>({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contact,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        showToast("Email sent successfully!", "success");
        setContact({ email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        showToast("Failed to send email.", "error");
        setLoading(false);
      });
  };

  return (
    <section className="py-20 px-4 bg-slate-900" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:adrahul2014@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">
                      adrahul2014@gmail.com
                    </div>
                  </div>
                </a>

                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      {link.icon === "github" && (
                        <Github size={24} className="text-white" />
                      )}
                      {link.icon === "linkedin" && (
                        <Linkedin size={24} className="text-white" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{link.name}</div>
                      <div className="text-white font-medium">
                        {link.name === "GitHub"
                          ? "@rahulad12"
                          : "Rahul Adhikari"}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
