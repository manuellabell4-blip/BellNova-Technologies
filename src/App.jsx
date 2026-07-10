import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;

