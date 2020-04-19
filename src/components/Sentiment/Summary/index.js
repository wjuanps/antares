import React from "react";

const Summary = ({ data, compare = false }) => {
  return compare ? (
    <SummaryCompare data={data} />
  ) : (
    <SummarySentiment data={data} />
  );
};

const SummarySentiment = ({ data }) => {
  return (
    <section className="features-icons" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row table-responsive">
          <Table data={data} />
        </div>
      </div>
    </section>
  );
};

const SummaryCompare = ({ data }) => {
  data = [data.a, data.b];

  return (
    <section className="features-icons" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row">
          {data.map((result, i) => (
            <div key={i} className="col-md-6">
              <Table data={result} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Table = ({ data }) => (
  <table className="table table-hover table-responsive">
    <thead>
      <tr>
        <th style={{ borderTop: "none" }} colSpan={2}>
          <h3 className="text-info">
            <i className="fa fa-bar-chart"></i>&nbsp;Resumo da análise '
            {data.text.replace(/\-+/g, " ")}'
          </h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sentimento predominante</td>
        <td>{["Negativo", "Positivo"][data.result.sentiment]}</td>
      </tr>
      <tr>
        <td>Pontuação Positivas</td>
        <td>{data.result.positive}</td>
      </tr>
      <tr>
        <td>Pontuação Negativas</td>
        <td>{data.result.negative}</td>
      </tr>
      <tr>
        <td>Porcentagem Positivas</td>
        <td>{data.result.percentPositive.toFixed(2)}%</td>
      </tr>
      <tr>
        <td>Porcentagem Negativas</td>
        <td>{data.result.percentNegative.toFixed(2)}%</td>
      </tr>
      <tr>
        <td>Total de Tweets análisados</td>
        <td>{data.total}</td>
      </tr>
    </tbody>
  </table>
);

export default Summary;
