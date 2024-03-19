import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles/layout.css";


const Layout = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <header>

        <h2>

          Sean Schelin

        </h2>
        <nav className="desktop_nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav_links">
          <a href="https://www.linkedin.com/feed/" target="_blank">
            LinkedIn
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://github.com/seanie1995" target="_blank">
            GitHub
            <i className="fa-brands fa-github" />
          </a>
        </div>

        <div className="modal_menu_toggle" >
          <i className="fa-solid fa-bars" onClick={toggleModal} />
        </div>

        <div className={`modal_menu ${isModalOpen ? 'active' : ''}`}>

          <div className="modal_content">
            <div className="close-modal" onClick={toggleModal}>
              <i className="fa-solid fa-x"></i>
            </div>
            <ul className="modal_ul">
              <li>
                <NavLink to="/" onClick={toggleModal}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" onClick={toggleModal}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/experience" onClick={toggleModal}>Experience</NavLink>
              </li>
              <li>
                <NavLink to="/education" onClick={toggleModal}>Education</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleModal}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>

      </header>
      <Outlet />
      <footer>
        <h3>Contact</h3>
        <h5>soundofsean8@gmail.com</h5>
        <h5>0707418173</h5>

        {/*  <audio id="music" src="./resources/easter egg/death.mp3" loop="" />      
          <audio id="pop" src="resources/easter egg/pop.mp3" /> */}

      </footer>

    </>


  );
};

export default Layout;
