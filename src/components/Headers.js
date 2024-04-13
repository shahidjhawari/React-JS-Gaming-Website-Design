import React from "react";
import './styles.css';

function Headers() {
  return (
    <div>
      <header>
        <h1>GAMING WORLD</h1>
      </header>

      <nav>
        <ul>
          <li className="bt">
            <a href="index.html">Home</a>
          </li>
          <li className="bt">
            <a href="games.html">Games</a>
          </li>
          <li className="bt">
            <a href="about.html">About</a>
          </li>
          <li className="bt">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Headers;
