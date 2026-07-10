import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <span className="projects-badge">
        🚀 Nos réalisations
      </span>

      <h2>
        Des projets qui font la différence
      </h2>

      <p className="projects-text">
        Découvrez quelques solutions digitales
        développées par BellNova.
      </p>


      <div className="projects-container">


        <div className="project-card" data-aos="fade-up">

          <div className="project-image">
            🌐
          </div>

          <h3>
            Site E-commerce
          </h3>

          <p>
            Une plateforme moderne pour vendre
            des produits en ligne.
          </p>

        </div>



        <div className="project-card" data-aos="fade-up">

          <div className="project-image">
            📱
          </div>

          <h3>
            Application Mobile
          </h3>

          <p>
            Des applications rapides et adaptées
            aux utilisateurs.
          </p>

        </div>



        <div className="project-card" data-aos="fade-up">

          <div className="project-image">
            💻
          </div>

          <h3>
            Application Web
          </h3>

          <p>
            Des outils digitaux pour optimiser
            les activités.
          </p>

        </div>



      </div>

    </section>
  );
}

export default Projects;