//landing page, should have image and short bio
import headshot from '../assets/IMG-2124.jpg';
import "../pages.css";


export default function AboutPage() {

  return (
    <div className="bio">

      <div>
        <img src={headshot} alt="Headshot" />
      </div>
      <div className='bioParagraph'>
        <h2>Kristin Denny</h2>
        <p> Email: kristingdenny@gmail.com | Durham, NC 27701 | LinkedIn: <a href="https://www.linkedin.com/in/kristin-denny-94986319a/">/KristinDenny</a> | GitHub: <a href="https://github.com/kristin-denny">kristin-denny</a></p>
        <p>Detail-oriented professional with 2 years of experience in HR and data entry and 6 months in full stack development, with a focus on the backend.
          A flexible and creative worker with a strong background in customer service and technology.
          Dedicated to understanding and collaboration, committed to delivering comprehensive results.</p>
      </div>
      <div>
        <h3>Technical Skills</h3>
        <p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, PostgreSQL, Express, React, Node.js, Typescript, MongoDB, Insomnia, GraphQL, Python</p>
      </div>
    </div>
  ); 
}