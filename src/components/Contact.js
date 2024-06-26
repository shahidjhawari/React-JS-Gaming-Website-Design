import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";
import "./styles.css";

function Contact() {
  return (
    <div>
      <Headers />
      <main className="abo">
        <section className="contact-form">
          <h1 className="h1">Contact Us</h1>
          <form>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="message"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
