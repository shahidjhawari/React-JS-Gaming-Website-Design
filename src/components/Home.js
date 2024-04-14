import React from "react";
import './styles.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import Footer from "./Footer";
import Headers from "./Headers";

function Home() {
  return (
    <div>
      <Headers />
      <main>
        <section className="featured-game">
          <h2>Featured Game</h2>
          <img src={img1} alt="Featured Game" />
          <h2 className="fea">TEKEN 7</h2>
          <a className="but" href="games.html">
            LERAN MORE
          </a>
        </section>

        <section className="latest-games">
          <div className="game-card">
            <h3>FROG CUT 2</h3>
            <img src={img2} alt="Game 1" />
            <p>GAME 1</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>ANGRY BIRD 2</h3>
            <img src={img3} alt="Game 2" />
            <p>GAME 2</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>LUDO</h3>
            <img src={img4} alt="Game 2" />
            <p>GAME 3</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>FISHING</h3>
            <img src={img5} alt="Game 2" />
            <p>GAME 4</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>RUN RUN</h3>
            <img src={img6} alt="Game 2" />
            <p>GAME 5</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>RELICE RUN</h3>
            <img src={img7} alt="Game 2" />
            <p>GAME 6</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>2 PLAYER</h3>
            <img src={img8} alt="Game 2" />
            <p>GAME 7</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>TEMPLE RUN </h3>
            <img src={img9} alt="Game 2" />
            <p>GAME 8</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          <div className="game-card">
            <h3>STUMBLE GUY</h3>
            <img src={img10} alt="Game 2" />
            <p>GAME 9</p>
            <a className="but" href="#">
              DOWNLOAD
            </a>
          </div>
          {/* Add more game cards as needed */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
