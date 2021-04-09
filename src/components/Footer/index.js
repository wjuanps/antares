/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <Link to="/antares">Home</Link>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <Link to="/terms">Termos de Uso</Link>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <Link to="/privacy">Politicas de Privacidade</Link>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <Link to="/about">Sobre</Link>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              &copy; Antares 2016 - 2020. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="https://www.facebook.com/wjuansoares" target="_blank">
                  <i className="fa fa-facebook-square fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://twitter.com/wjuan_ps" target="_blank">
                  <i className="fa fa-twitter-square fa-2x fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/w_juan_/" target="_blank">
                  <i className="fa fa-instagram fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
