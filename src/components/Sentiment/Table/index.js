import React from "react";

// import { Container } from './styles';

const Table = () => (
  <section class="features-icons bg-light">
    <div class="container">
      <div class="row table-responsive data hidden">
        <table class="table table-hover table-striped" id="table">
          <thead>
            <tr>
              <th style={{ borderTop: "none" }} colspan="3">
                <h3 class="text-info">
                  <i class="fa fa-twitter"></i> Alguns tweets analisados
                </h3>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div class="row"></div>
    </div>
  </section>
);

export default Table;
