import React from "react";

// import { Container } from './styles';

const Summary = () => (
  <section class="features-icons" style={{ backgroundColor: "#ffffff" }}>
    <div class="container">
      <div class="row data hidden">
        <table class="table table-hover table-responsive">
          <thead>
            <tr>
              <th style={{ borderTop: "none" }} colspan="2">
                <h3 class="text-info">
                  <i class="fa fa-bar-chart"></i>&nbsp;Resumo da análise
                </h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sentimento predominante</td>
              <td>
                <span id="sentimentText"></span>
              </td>
            </tr>
            <tr>
              <td>Pontuação sentimento</td>
              <td>
                <span id="sentimentNumber"></span>
              </td>
            </tr>
            <tr>
              <td>Pontuação Positivas</td>
              <td>
                <span id="sentimentPositive"></span>
              </td>
            </tr>
            <tr>
              <td>Pontuação Negativas</td>
              <td>
                <span id="sentimentNegative"></span>
              </td>
            </tr>
            <tr>
              <td>Porcentagem Positivas</td>
              <td>
                <span id="percentPositive"></span>
              </td>
            </tr>
            <tr>
              <td>Porcentagem Negativas</td>
              <td>
                <span id="percentNegative"></span>
              </td>
            </tr>
            <tr>
              <td>Total de Tweets análisados</td>
              <td>
                <span id="total"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row"></div>
    </div>
  </section>
);

export default Summary;
