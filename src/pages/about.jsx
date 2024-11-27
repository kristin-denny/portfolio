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
        <p>Detail-oriented professional with 2 years of experience in HR and data entry and 6 months in full stack development.
          A flexible and creative worker with a strong background in customer service and technology.
          Dedicated to understanding and collaboration, committed to delivering comprehensive results.</p>
      </div>

    </div>
  );
}