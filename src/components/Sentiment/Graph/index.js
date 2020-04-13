import React from "react";

// import { Container } from './styles';

const Graph = () => (
  <section className="features-icons bg-light text-center">
    <div className="container">
      <h2 className="text-info mb-5">
        Análise de Sentimentos para '<span id="search"></span>'
      </h2>

      <div className="row data hidden">
        <div className="col-md-6">
          <canvas id="chart" className="mb-5 mb-lg-0 mb-md-0"></canvas>
        </div>
        <div className="col-md-6">
          <canvas id="chartPie"></canvas>
        </div>
      </div>

      <div className="row"></div>
    </div>
  </section>
);

export default Graph;
