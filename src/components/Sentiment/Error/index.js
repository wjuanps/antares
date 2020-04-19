import React from "react";

const Error = ({ message }) => {
  return (
    <section className="features-icons bg-light text-center">
      <div className="container">
        <h2 className="text-danger mb-5">Erro ao carregar {message}</h2>
      </div>
    </section>
  );
};

export default Error;
