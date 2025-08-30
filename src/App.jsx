import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      {/* Section lain */}
    </div>
  );
}

export default App;
