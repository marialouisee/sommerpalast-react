import React from "react";
import iceImage from "../../img/eismanufaktur.JPG";

const Eis = () => {
  return (
    <section id="eismanufaktur">
      <h1>EISMANUFAKTUR</h1>
      <div>
        <img src={iceImage} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores
        neque delectus nisi consectetur tempora velit, suscipit sint, rem
        obcaecati facere odio mollitia laudantium. Praesentium debitis quia sunt
        animi ipsa.
        <br />
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        quis eum eligendi impedit nisi maiores, nam quo repellendus harum. Iste
        nihil necessitatibus impedit. Debitis eaque dolorem odit! Quisquam,
        reiciendis temporibus.
      </p>
    </section>
  );
};

export default Eis;
