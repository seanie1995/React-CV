import React from "react";
import "../Contact/contact.css";

export default function Contact() {
    return (
        <main>
            <section id="contact">
                <div className="contact-container">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="contact-left"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f"
                        ></input>
                        <div className="contact-left-title">
                            <h2>Get in touch</h2>
                            <hr />
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="contact-inputs"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="contact-inputs"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="contact-inputs"
                            required
                        />
                        <button type="submit">
                            <h2>Submit</h2> {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </button>
                    </form>

                </div>
            </section>
        </main>
    );
}