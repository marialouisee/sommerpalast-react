import React from 'react'
import logoImage from '../../img/logoWithBg.png'

const Home = () => {
  return (
    <section id="home">
      <h1>WILLKOMMEN im SOMMERPALAST</h1>
      <p>
        Im herrlichen Halbschatten einer wunderbaren Platane steht mitten in
        Vitte auf der Insel Hiddensee in strahlendem Weiß der{" "}
        <i>Sommerpalast Hiddensee</i>. <br /> <br />
        Früher mal Gästehaus, mal städtische Turnhalle, lädt unser aus dem
        Dornröschenschlaf erwecktes Schmuckstück Inselbewohner und Feriengäste
        zum Innehalten bei einem frisch gebrühten Kaffee, einem Stück
        selbstgebackenen Kuchen und hausgemachtem Eis ein. <br /> <br />
      </p>
      <div>
        <img src={logoImage} alt="house at beach with overlayered Sommerpalast Logo" />
      </div>
    </section>
  );
};

export default Home
