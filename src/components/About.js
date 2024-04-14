import React from "react";
import "./styles.css";
import Footer from "./Footer";
import Headers from "./Headers";
import shahid from './img/shahid.png';
import muutafa from './img/muutafa.jpg';
import ali from './img/ali.jpg';

function About() {
  return (
    <div>
      <Headers />
      <main className="abo">
        <div className="profile">
          <img
            src={shahid}
            alt="Your Name"
            height="200px"
            width="200px"
          />
          <h2 className="nam">MAHAR SHAHID IQBAL JHAWARI</h2>
          <strong>
            <p>
              WEB DISGNER, DEVELOPER, FREELANCER YOUTUBER AND GRAPHIC DISGNER.
            </p>
          </strong>
          <p>
            Phone: <a href="tel:+923447014153">+923447014153</a>
          </p>
        </div>
      </main>
      <main className="abo">
        <div className="profile">
          <img
            src={muutafa}
            alt="Your Name"
            height="200px"
            width="200px"
          />
          <h2 className="nam">GULAM MUSTAFA</h2>
          <strong>
            <p>
              WEB DISGNER, DEVELOPER, FREELANCER YOUTUBER AND GRAPHIC DISGNER.
            </p>
          </strong>
          <p>
            Phone: <a href="tel:+923496807311">+923496807311</a>
          </p>
        </div>
      </main>
      <main className="abo">
        <div className="profile">
          <img src={ali} alt="Your Name" height="200px" width="200px" />
          <h2 className="nam">ALI JAN</h2>
          <strong>
            <p>
              WEB DISGNER, DEVELOPER, FREELANCER YOUTUBER AND GRAPHIC DISGNER.
            </p>
          </strong>
          <p>
            Phone: <a href="tel:+923260340578">+923260340578</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
