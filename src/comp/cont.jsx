"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbj6n2l",   // replace this
        "template_lidw5lk",  // replace this
        form.current,
        "SeOFdXEryVFlEVPWI"    // replace this
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="m2">
        <div className="head">
          <h1>
            <i className="fa-regular fa-envelope"></i> Contact Me !
          </h1>
        </div>
        <div className="main">
          <div className="left">
            <h2>Let's Connect !</h2>

            <div>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:jenishmacwan230@gmail.com">
                jenishmacwan230@gmail.com
              </a>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+919328135511">9328135511</a>
            </div>
            <div>
              <i className="fa-brands fa-linkedin"></i>
              <a target = "_blank" href="https://www.linkedin.com/in/jenish-macwan-419167327">
                Jenish Macwan
              </a>
            </div>
            <div>
              <i className="fa-brands fa-github"></i>
              <a  target = "_blank" href="https://github.com/JenishMacwan230">JenishMacwan230</a>
            </div>
            <div>
              <i className="fa-brands fa-instagram"></i>
              <a  target = "_blank" href="https://www.instagram.com/_jenish230_/">Jenish230</a>
            </div>
          </div>

          <div className="right">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <i className="fa-regular fa-user"></i>
                <input type="text" name="user_name" placeholder="Your name" required />
              </div>

              <div>
                <i className="fa-regular fa-envelope"></i>
                <input type="email" name="user_email" placeholder="Your E-mail" required />
              </div>

              <div>
                <i className="fa-solid fa-mobile-screen"></i>
                <input type="tel" name="user_phone" placeholder="Your Phone Number" />
              </div>

              <div id="msg">
                <i className="fa-regular fa-envelope"></i>
                <textarea name="message" placeholder="Enter your message" required></textarea>
              </div>

              <div id="btn">
                <button type="submit">
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


