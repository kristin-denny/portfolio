//has six screenshots of projects and the link to the deployed sites and the github
// import Project from "../components/projectLink";
// import { Link } from 'react-router-dom';
import candidateSearch from '../assets/Screenshot 2024-11-26 231732.png';
import myFanofax from '../assets/Screenshot 2024-11-26 232317.png';
import weatherDashboard from '../assets/Screenshot 2024-11-26 231937.png';
import addressBook from '../assets/Screenshot 2024-11-26 232611.png';
import kanbanBoard from '../assets/Screenshot 2024-11-26 232215.png';
import employeeCMS from '../assets/Screenshot 2024-11-26 232813.png'
import "../pages.css";

export default function Portfolio() {
    return (
        <div className="projects">
            <h1>Portfolio</h1>
            <p>These projects are deployed on Render, as such it may take a second or two to load.</p>
            <div className="portfolio">
                <img src={candidateSearch} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h5>Candidate Search </h5>
                    <a href="https://github.com/kristin-denny/candidate_search"> Github link </a>
                    <a href="https://candidatesearch-pjy0.onrender.com"> Site link </a>
                </div>
                <img src={myFanofax} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h5>MyFanofax </h5>
                    <a href="https://github.com/kristin-denny/myfanofax"> Github link </a>
                    <a href="https://myfanofax.onrender.com"> Site link </a>
                </div>
                <img src={weatherDashboard} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h5>Weather Dashboard</h5>
                    <a href="https://github.com/kristin-denny/WeatherDashboard"> Github link </a>
                    <a href="https://weatherdashboard-6qse.onrender.com"> Site link </a>
                </div>
                <img src={addressBook} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h5>Address Book</h5>
                    <a href="https://github.com/kristin-denny/Project1-AddressBook"> Github link </a>
                    <a href="https://address-book-6mip.onrender.com"> Site link </a>
                </div>
                <img src={kanbanBoard} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h5>Kanban Board</h5>
                    <a href="https://github.com/kristin-denny/kanbanBoard"> Github link </a>
                    <a href="https://kanbanboard-4p1r.onrender.com"> Site link </a>
                </div>
                <img src={employeeCMS} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h5>Employee CMS</h5>
                    <a href="https://github.com/kristin-denny/Employee_CMS"> Github link </a>
                    <a href="https://drive.google.com/file/d/1fOHkViUxGTGuhc5EjGsvd8JqZ8sY676K/view?usp=sharing"> Demo link </a>
                </div>
            </div>
        </div>
    );

}