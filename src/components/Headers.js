import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <div>
      <header>
        <h1>GAMING WORLD</h1>
      </header>
      <nav>
        <ul>
          <li className="bt">
            <Link to="/">Home</Link>
          </li>
          <li className="bt">
            <Link to="/about">About</Link>
          </li>
          <li className="bt">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Headers;
