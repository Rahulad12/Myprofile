import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contacts";
import Header from "./components/header";
import Services from "./components/services";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTIONS = ["home", "about", "services", "experience", "education", "work", "skills", "contact"];

function App() {
  const activeSection = useScrollSpy(SECTIONS);

  return (
    <div className="bg-background min-h-screen">
      <Header activeSection={activeSection} />

      <main className="pt-16">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="work"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="bg-[#0b1220] text-[#aebfca] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rahul Adhikari
          </p>
          <p className="text-xs tracking-wide">rahul.adhikari2058@gmail.com · SE18 5AJ, London, UK</p>
        </div>
      </footer>

      <ToastContainer theme="light" />
    </div>
  );
}

export default App;
