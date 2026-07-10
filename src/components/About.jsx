import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">

      <span className="about-badge">
        💡 À propos de BellNova
      </span>

      <h2>
        Pourquoi choisir BellNova ?
      </h2>

      <p>
        BellNova accompagne les particuliers, les entreprises et
        les entrepreneurs dans leur transformation digitale grâce
        à des solutions modernes, rapides et sécurisées.
      </p>


      <div className="about-cards">

        <div className="about-card" data-aos="fade-up">
          <h3>🚀 Innovation</h3>
          <p>
            Nous créons des solutions adaptées aux besoins modernes.
          </p>
        </div>


        <div className="about-card" data-aos="fade-up">
          <h3>🔒 Sécurité</h3>
          <p>
            Vos données et vos projets sont protégés.
          </p>
        </div>


        <div className="about-card" data-aos="fade-up">
          <h3>⚡ Performance</h3>
          <p>
            Des solutions rapides et efficaces.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;