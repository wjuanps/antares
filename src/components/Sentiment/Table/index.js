import React from "react";

// import { Container } from './styles';

const Table = ({ data }) => {
  return (
    <section className="features-icons bg-light">
      <div className="container">
        <div className="row table-responsive data">
          <table className="table table-hover table-striped" id="table">
            <thead>
              <tr>
                <th style={{ borderTop: "none" }} colSpan={3}>
                  <h3 className="text-info">
                    <i className="fa fa-twitter"></i> Alguns tweets analisados
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className="row"></div>
      </div>
    </section>
  );
};

export default Table;
