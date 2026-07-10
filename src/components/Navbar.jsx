import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <h2>BellNova 🚀</h2>

<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✖" : "☰"}
</div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>À propos</a></li>
<li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
<li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
<li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;