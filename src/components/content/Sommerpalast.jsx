import React from "react";
import shopImage from "../../img/placeholder1.jpeg";
import cafeImage from "../../img/placeholder2.jpeg";

const Sommerpalast = () => {
  return (
    <section id="sommerpalast">
      <h1>SOMMERPALAST</h1>
      <h2>CAFE</h2>
      <div id="cafe">
        <div>
          <p>
            Norderende 156 <br />
            Insel Hiddensee
          </p>
          <div>
            <img src={cafeImage} alt="placeholder" />
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          libero adipisci eos culpa hic, ducimus blanditiis quia doloribus dolor
          nobis repellat eius maxime commodi error ipsa minima iste. Rerum,
          eaque?
        </p>
      </div>
      <h2>LADEN</h2>
      <div id="laden">
        <div>
          <img src={shopImage} alt="placeholder" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          libero adipisci eos culpa hic, ducimus blanditiis quia doloribus dolor
          nobis repellat eius maxime commodi error ipsa minima iste. Rerum,
          eaque?
        </p>
      </div>
    </section>
  );
};

export default Sommerpalast;
