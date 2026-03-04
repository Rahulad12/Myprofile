import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Contact from "./components/contacts";

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
          <p>
            © {new Date().getFullYear()} Rahul Adhikari. All rights reserved.
          </p>
        </div>
      </footer>
      <ToastContainer />
    </main>
  );
}

export default App;
