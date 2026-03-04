import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Rahul Adhikari. All rights reserved.</p>
        </div>
      </footer>
      <ToastContainer />
    </main>
  );
}

export default App;
