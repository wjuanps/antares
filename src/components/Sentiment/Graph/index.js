import React, { useRef, useEffect } from "react";

import chart from "../../../services/chartGenerator";

const Graph = ({ data, compare = false }) => {
  return compare ? (
    <CompareGraph data={data} />
  ) : (
    <SentimentGraph data={data} />
  );
};

const SentimentGraph = ({ data }) => {
  const bar = useRef(null);
  const pie = useRef(null);

  useEffect(() => {
    chart.generateChart(bar.current, {
      id: "chart",
      type: "bar",
      labels: ["Positivo", "Negativo"],
      label: "Sentimentos",
      data: [
        data.result.percentPositive.toFixed(2),
        data.result.percentNegative.toFixed(2),
      ],
      backgroundColor: ["rgba(75, 192, 192, 0.8)", "rgba(255, 99, 132, 0.8)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    chart.generateChart(pie.current, {
      id: "chartPie",
      type: "doughnut",
      labels: ["Positivo", "Negativo"],
      label: "Sentimentos",
      data: [
        data.result.percentPositive.toFixed(2),
        data.result.percentNegative.toFixed(2),
      ],
      backgroundColor: ["rgba(75, 192, 192, 0.8)", "rgba(255, 99, 132, 0.8)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    });
  }, [bar, pie]);

  return (
    <section className="features-icons bg-light text-center">
      <div className="container">
        <h2 className="text-info mb-5">
          Análise de Sentimentos para '{data.text.replace(/\-+/g, " ")}'
        </h2>

        <div className="row data hidden">
          <div className="col-md-6">
            <canvas id="chart" className="mb-5 mb-lg-0 mb-md-0"></canvas>
          </div>
          <div className="col-md-6">
            <canvas id="chartPie"></canvas>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <canvas ref={bar}></canvas>
          </div>
          <div className="col-md-6">
            <canvas ref={pie}></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompareGraph = ({ data }) => {
  const line = useRef(null);

  useEffect(() => {
    chart.compareChart(line.current, {
      datasets: [
        {
          label: data.a.text,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgb(255, 99, 132)",
          data: [
            0,
            data.a.result.percentPositive.toFixed(2),
            data.a.result.percentNegative.toFixed(2),
          ],
        },
        {
          label: data.b.text,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgb(25, 23, 132)",
          data: [
            0,
            data.b.result.percentPositive.toFixed(2),
            data.b.result.percentNegative.toFixed(2),
          ],
        },
      ],
    });
  }, [line]);

  return (
    <section className="features-icons bg-light text-center">
      <div className="container">
        <h2 className="text-info mb-5">
          Comparação entre {data.a.text.replace(/\-+/g, " ")} e{" "}
          {data.b.text.replace(/\-+/g, " ")}
        </h2>

        <div className="row">
          <div className="col-md-12">
            <canvas ref={line}></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
