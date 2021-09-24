import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact">
      <h1>KONTAKT</h1>
      <div>
        <h5>
          Norderende 156 <br />
          Insel Hiddensee
        </h5>
        <p>unsere Öffnungszeiten</p>
        <p>telefon</p>
        <a href="mailto:meer@sommerpalasthiddensee.de" id="mailto">
          meer@sommerpalasthiddensee.de
        </a>
        <br />
      </div>
      <div className="footer">
        <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
        <Link to="/impressum">Impressum</Link>
      </div>
    </section>
  );
};

export default Contact;
