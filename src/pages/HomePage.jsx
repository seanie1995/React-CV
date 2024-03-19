import { NavLink } from "react-router-dom";
import "./styles/homepage.css";


const HomePage = () => {
  return (
    <>
      <main>
        <section className="index_banner">
          <div className="banner_text">
            <h1 id="introduction">Hi! I'm Sean.</h1>
            <div className="banner_p">
              <p>
                I'm a former live audio engineer who is now an aspiring .NET Fullstack
                Developer!
              </p>
              <p>I'm happy you made it to my website!</p>
            </div>
            <div className="linkedin_github_links">
              <a href="https://www.linkedin.com/feed/" target="_blank">
                Linked
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="https://github.com/seanie1995" target="_blank">
                GitHub
                <i className="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </section>
        <section className="index_intro">
          <div className="index_intro_text">
            <p>
              I began my journey into the world of IT in early 2023 when I took
              classes in Programming and Web Development.
            </p>
            <br />
            <p>
              I had so much fun with it that I decided to take a leap of faith and
              applied to a few High Vocational Education programs ("Yrkeshögskolan" in
              Swedish) in Stockholm and was accepted into{" "}
              <a className="chas_link" href="https://chasacademy.se/">
                Chas Academy.
              </a>
            </p>
            <br />
            <p>
              Here's what I've been cooking up in the past several months as a .NET
              Fullstack Developer student and more information about myself.
            </p>
            <br />

            <nav className="index_intro_nav">
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/experience">CV</NavLink>
              <NavLink to="/education">Education</NavLink>
              <NavLink to="/contact">About Me</NavLink>
            </nav>

          </div>
        </section>
      </main>

    </>
  );
};

export default HomePage;
