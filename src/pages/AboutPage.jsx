import Contact from "../components/Contact/contact"
import "./styles/aboutpage.css"
import myPhoto from "../assets/about-me-photos/about-me.jpg"



const AboutPage = () => {
  return (
    <>

      <article className="about_me">
        <div className="about_me_text">
          <h1>Coding, Music and Self-expression</h1>
          <p>
            Born and raised in Manila, Philippines, I ventured to Sweden at 18 years
            old in pursuit of a life beyond my comfort zone and got my Bachelor's
            Degree at Music and Audio Production at Dalarna University. As a
            guitarist, composer and sound engineer, I
            delved into audio production, working at various live events including
            conferences, livestreams, and concerts. I've also enjoyed performing
            onstage with several bands.
          </p>
          <p>
            In early 2023, I discovered my passion for programming, immersing myself
            in HTML, CSS, and C#. The excitement and satisfaction I found in coding
            prompted me to transition into a career in .NET Fullstack Development.
            Currently, I'm engrossed in studying at Chas Academy, relishing every
            moment of this new journey.
          </p>
          <p>
            Would you like to get in touch with me? Send me an email at seanschelin@gmail.com
          </p>
        </div>
        <img className="my_photo" src={myPhoto} alt="Photo of Sean" />
      </article>
      <Contact />
    </>
  );
};

export default AboutPage;
