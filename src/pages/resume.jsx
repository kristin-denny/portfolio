//has a link to download resume
import resumeLink from "../assets/KristinDennyResume.pdf";
import "../pages.css";

export default function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <p>I have experience with Javascript, Typescript, HTML, CSS, PostgreSQL, React, and the Agile framework.</p>
            <div>
                <a href={resumeLink} download> Click here to download my resume! </a>
            </div>



        </div>
    );

}