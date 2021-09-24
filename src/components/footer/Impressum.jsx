import React from 'react';
import Back from '../Back'

const impressum = () => {
    return (
      <section id="impressum">
        <Back/>
        <h1>IMPRESSUM</h1>
        <div class="textInfo">
          <p>
            <b>Sommerpalast Hiddensee UG</b>
            <br />
            Norderende 156 | 18565 Vitte | Insel Hiddensee
          </p>
          <p>
            Vertreten durch: <br />
            Geschäftsführerin Almut Stier
          </p>
          <p>
            Verantwortlich für Inhalte: <br />
            Sommerpalast Hiddensee UG
          </p>
          <p>
            Telefon: 03 83 00 – 60 39 51
            <br />
            <a href="mailto:meer@sommerpalasthiddensee.de" id="mailto">
              meer@sommerpalasthiddensee.de
            </a>
            <br />
            www.sommerpalasthiddensee.de
          </p>
          <p>Eintragung im Handelsregister.</p>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
          </p>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </div>
      </section>
    );
}

export default impressum
