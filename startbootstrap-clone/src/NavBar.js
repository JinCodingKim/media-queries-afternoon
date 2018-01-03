import React, { Component } from "react";
import "./NavBar.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <a className="brand">Start Bootstrap</a>

          <div>
            <ul className="link-list">
              <li>
                <a className="link-item">SERVICES</a>
              </li>
              <li>
                <a className="link-item">PORTFOLIO</a>
              </li>
              <li>
                <a className="link-item">ABOUT</a>
              </li>
              <li>
                <a className="link-item">TEAM</a>
              </li>
              <li>
                <a className="link-item">CONTACT</a>
              </li>
            </ul>
            <button className="nav-button">
              MENU<FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
