import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content" data-aos="fade-right">

<span className="hero-badge">
    🚀Innovation digitale
</span>
        <h1>
          Bienvenue chez BellNova 🚀
        </h1>

        <p>
          Des solutions digitales modernes pour accompagner
          les entreprises et entrepreneurs dans leur transformation numérique.
        </p>

        <button>
          Découvrir nos services
        </button>

<button className="secondary-btn">
    Voir nos projets
</button>

<div className="hero-stats">

  <div>
    <h3>50+</h3>
    <p>Projets réalisés</p>
  </div>

  <div>
    <h3>24/7</h3>
    <p>Support</p>
  </div>

  <div>
    <h3>100%</h3>
    <p>Engagement</p>
  </div>

</div>

      </div>


      <div className="hero-image" data-aos="fade-left">

        <img 
          src="https://illustrations.popsy.co/blue/digital-nomad.svg"
          alt="Solutions digitales"
        />

      </div>

    </section>
  );
}

export default Hero;