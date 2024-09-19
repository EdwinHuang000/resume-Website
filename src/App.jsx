import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar className="fixed" />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
