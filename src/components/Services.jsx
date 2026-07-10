import "../styles/Services.css";

function Services() {
  return (
    <section id="services" className="services">

      <span className="services-badge">
        💻 Nos services
      </span>

      <h2>
        Des solutions adaptées à vos besoins
      </h2>

      <p className="services-text">
        BellNova propose des solutions digitales modernes
        pour accompagner vos projets.
      </p>


      <div className="services-cards">

        <div className="service-card" data-aos="fade-up">

          <h3>🌐 Création de sites web</h3>

          <p>
            Des sites modernes, rapides et adaptés
            à tous les appareils.
          </p>

        </div>


        <div className="service-card" data-aos="fade-up">

          <h3>📱 Applications mobiles</h3>

          <p>
            Des applications performantes pour
            développer vos activités.
          </p>

        </div>


        <div className="service-card" data-aos="fade-up">

          <h3>🎨 Design & UI/UX</h3>

          <p>
            Des interfaces élégantes et faciles
            à utiliser.
          </p>

        </div>


        <div className="service-card" data-aos="fade-up">

          <h3>🔧 Maintenance</h3>

          <p>
            Assistance et amélioration continue
            de vos solutions.
          </p>

        </div>


      </div>

    </section>
  );
}

export default Services;