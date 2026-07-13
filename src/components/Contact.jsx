import { useRef, useState } from "react"
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

import "../styles/Contact.css";

function Contact() {

  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs.sendForm(

import .meta.env.VITE_EMAILJS_SERVICE_ID,

import .meta.env.VITE_EMAILJS_TEMPLATE_ID,
e.target,    
      
import .meta.env.VITE_EMAILJS_PUBLIC_KEY
    

    )
    .then(() => {
      setMessageSent(true);
      setIsSending(false);
      form.current.reset();

      setTimeout(() => {
        setMessageSent(false);
      }, 4000);
    })
    .catch((error) => {
      console.log(error);
      setIsSending(false);
      alert("Erreur lors de l'envoi 😞");
    });

  };

  return (
    <section id="contact" className="contact">

      <span className="contact-badge">
        📩 Contactez-nous
      </span>

      <h2>
        Parlons de votre projet
      </h2>

      <p>
        Une idée ? Un projet digital ? 
        BellNova est là pour vous accompagner.
      </p>

{messageSent && (
  <div className="success-message">
    ✅ Message envoyé avec succès 🚀
  </div>
)}

      <form 
        ref={form} 
        className="contact-form"
        onSubmit={sendEmail}
      >

       
       <input 
  type="text"
  name="user_name"
  placeholder="Votre nom"
  required
/>

<input 
  type="email"
  name="user_email"
  placeholder="Votre email"
  required
/>

<textarea
  name="message"
  placeholder="Votre message"
  required
></textarea>


        <button type="submit" disabled={isSending}>
  {isSending ? "Envoi en cours... ⏳" : "Envoyer le message 🚀"}
</button>

      </form>

    </section>
  );
}

export default Contact;