import React from "react";

const Loader = ({ props }) => (
  <section className="features-icons bg-light text-center">
    <div className="container">
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_DtaA2w.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "300px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  </section>
);

export default Loader;
