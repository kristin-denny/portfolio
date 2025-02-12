//has six screenshots of projects and the link to the deployed sites and the github
// import Project from "../components/projectLink";
// import { Link } from 'react-router-dom';
// import candidateSearch from '../assets/Screenshot 2024-11-26 231732.png';
import myFanofax from '../assets/Screenshot 2024-11-26 232317.png';
// import weatherDashboard from '../assets/Screenshot 2024-11-26 231937.png';
import addressBook from '../assets/Screenshot 2025-02-11 194721.png';
// import kanbanBoard from '../assets/Screenshot 2024-11-26 232215.png';
// import employeeCMS from '../assets/Screenshot 2024-11-26 232813.png'
import capsuleTime from '../assets/Screenshot 2025-02-06 183802.png'
import "../pages.css";

export default function Portfolio() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <p>These projects are deployed on Render, as such it may take a second or two to load.</p>
            <div className="portfolio">
                
                
                <div className="portfolioLinks">
                <img src={myFanofax} alt="gitHubIcon" />    
                    <h3>MyFanofax </h3>
                    <a href="https://github.com/kristin-denny/myfanofax"> Github link </a><br/>
                    <a href="https://myfanofax.onrender.com"> Site link </a>
                    <p> Summary: A website where movie and tv fans can search and save their favorite actors to their profile with comments. </p>
                    <p>Role: backend developer and database architect.</p> 
                    <p> Tools: Javascript, PostgreSQL, Sequelize, Insomnia, OMDB(Open Movie Database) </p>
                </div>
             
                
                <div className="portfolioLinks">
                <img src={addressBook} alt="gitHubIcon" />    
                    <h3>Address Book</h3>
                    <a href="https://github.com/kristin-denny/Project1-AddressBook"> Github link </a><br/>
                    <a href="https://address-book-6mip.onrender.com"> Site link </a>
                    <p> Summary: A simple site that uses local storage to save and manage addresses. </p>
                    <p> Role: Javascript developer </p>
                    <p> Tools: Javascript </p>
                </div>
                
                <div className="portfolioLinks">
                    <img src={capsuleTime} alt="gitHubIcon" />
                    <h3>Capsule Time</h3>
                    <a href="https://github.com/kristin-denny/capsule_time"> Github link </a><br/>
                    <a href="https://capsule-time.onrender.com"> Site link </a>
                    <p>Summary: Website that allows users to send time capsules to themselves. </p> 
                    <p>Role: Backend Developer, Database Architect </p> 
                    <p> Tools: JavaScript, MongoDB, GraphQL, Node.js </p>
                </div>
              
            </div>
        </div>
    );

} 

{/* <img src={kanbanBoard} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h3>Kanban Board</h3>
                    <a href="https://github.com/kristin-denny/kanbanBoard"> Github link </a>
                    <a href="https://kanbanboard-4p1r.onrender.com"> Site link </a>
                </div>
                <img src={employeeCMS} alt="gitHubIcon" />
                <div className="portfolioLinks">
                    <h3>Employee CMS</h3>
                    <a href="https://github.com/kristin-denny/Employee_CMS"> Github link </a>
                    <a href="https://drive.google.com/file/d/1fOHkViUxGTGuhc5EjGsvd8JqZ8sY676K/view?usp=sharing"> Demo link </a>
                </div> */}  
                //  <img src={weatherDashboard} alt="gitHubIcon" />
                // <div className="portfolioLinks">
                //     <h3>Weather Dashboard</h3>
                //     <a href="https://github.com/kristin-denny/WeatherDashboard"> Github link </a>
                //     <a href="https://weatherdashboard-6qse.onrender.com"> Site link </a>
                // </div><img src={candidateSearch} alt="gitHubIcon" />
                // <div className="portfolioLinks">
                //     <h3>Candidate Search </h3>
                //     <a href="https://github.com/kristin-denny/candidate_search"> Github link </a>
                //     <a href="https://candidatesearch-pjy0.onrender.com"> Site link </a>
                // </div>  
                // <img src={employeeCMS} alt="gitHubIcon" />
                // <div className="portfolioLinks">
                //     <h3>Employee CMS</h3>
                //     <a href="https://github.com/kristin-denny/Employee_CMS"> Github link </a>
                //     <a href="https://drive.google.com/file/d/1fOHkViUxGTGuhc5EjGsvd8JqZ8sY676K/view?usp=sharing"> Demo link </a>
                // </div>