import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <span className="testimonials-badge">
        ⭐ Témoignages
      </span>

      <h2>
        Ce que nos clients pensent de nous
      </h2>

      <p className="testimonials-text">
        La satisfaction de nos clients est notre priorité.
      </p>


      <div className="testimonial-container">


        <div className="testimonial-card" data-aos="fade-up">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            "BellNova a transformé notre présence
            digitale avec un site moderne."
          </p>

          <h3>
            — Client Entreprise
          </h3>

        </div>



        <div className="testimonial-card" data-aos="fade-up">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            "Une équipe professionnelle et
            des solutions adaptées."
          </p>

          <h3>
            — Entrepreneur
          </h3>

        </div>



        <div className="testimonial-card" data-aos="fade-up">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            "Un accompagnement rapide et efficace."
          </p>

          <h3>
            — Client particulier
          </h3>

        </div>


      </div>

    </section>
  );
}

export default Testimonials;