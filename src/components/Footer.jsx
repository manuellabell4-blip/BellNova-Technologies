import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>
            BellNova 🚀
          </h2>

          <p>
            Des solutions digitales modernes
            pour construire l'avenir.
          </p>
        </div>


        <div>
          <h3>
            Liens rapides
          </h3>

          <ul>
            <li>Accueil</li>
            <li>Services</li>
            <li>Projets</li>
            <li>Contact</li>
          </ul>
        </div>


        <div>
          <h3>
            Suivez-nous
          </h3>

          <p>
             LinkedIn
          </p>

          <p>
             Instagram
          </p>

          <p>
             TikTok
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        © 2026 BellNova. Tous droits réservés.

      </div>


    </footer>
  );
}

export default Footer;