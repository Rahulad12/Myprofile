import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Contact from "./components/contacts";
import Sidebar from "./components/sidebar";
import Services from "./components/services";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTIONS = ["home", "about", "services", "experience", "work", "skills", "contact"];

function App() {
  const activeSection = useScrollSpy(SECTIONS);

  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar activeSection={activeSection} />

      <main className="flex-1 lg:ml-[220px]">
        <div className="pt-14 lg:pt-0">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="experience"><Experience /></section>
          <section id="work"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </div>

        <footer className="bg-card border-t border-border py-6 px-6">
          <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Rahul Adhikari. All rights reserved.</p>
          </div>
        </footer>
      </main>

      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
