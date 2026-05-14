import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

interface SidebarProps {
  activeSection: string;
}

function NavDots({ activeSection, onClose }: { activeSection: string; onClose?: () => void }) {
  return (
    <nav className="flex flex-col gap-5">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onClose}
            className="group flex items-center gap-3"
          >
            <span
              className={`relative flex-shrink-0 w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 border-blue-400 dot-active scale-125"
                  : "bg-transparent border-muted-foreground/40 group-hover:border-blue-400 group-hover:bg-blue-500/30"
              }`}
            />
            <span
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-blue-400" : "text-muted-foreground group-hover:text-foreground"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[220px] flex-col justify-between py-10 px-6 bg-sidebar border-r border-sidebar-border z-40">
        {/* Identity */}
        <div className="space-y-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-1.5">
              Portfolio
            </p>
            <p
              className="text-lg font-bold text-foreground leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Rahul
              <br />
              <span className="text-gradient">Adhikari</span>
            </p>
            <p className="text-[11px] text-muted-foreground mt-1.5 font-medium tracking-wide">
              Full Stack Developer
            </p>
          </div>

          <div className="h-px bg-sidebar-border" />
          <NavDots activeSection={activeSection} />
        </div>

        {/* Bottom */}
        <div className="space-y-4">
          <div className="h-px bg-sidebar-border" />
          <div className="flex gap-4">
            <a
              href="https://github.com/rahulad12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] text-muted-foreground/40">
            © {new Date().getFullYear()} Rahul Adhikari
          </p>
        </div>

        {/* Right edge gradient line */}
        <div className="absolute right-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-5 bg-sidebar/95 backdrop-blur-sm border-b border-sidebar-border z-50">
        <p
          className="text-base font-bold text-gradient"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Rahul Adhikari
        </p>
        <button onClick={() => setMobileOpen(true)} className="text-foreground p-1" aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-72 bg-sidebar border-r border-sidebar-border z-50 flex flex-col justify-between py-10 px-6 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8">
          <div className="flex items-start justify-between">
            <div>
              <p
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Rahul <span className="text-gradient">Adhikari</span>
              </p>
              <p className="text-xs text-muted-foreground">Full Stack Developer</p>
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-px bg-sidebar-border" />
          <NavDots activeSection={activeSection} onClose={() => setMobileOpen(false)} />
        </div>
        <div className="space-y-4">
          <div className="h-px bg-sidebar-border" />
          <div className="flex gap-4">
            <a href="https://github.com/rahulad12" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/rahul-adhikari-7b2a87214/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
