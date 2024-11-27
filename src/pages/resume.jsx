//has a link to download resume
import resumeLink from "../assets/DennyResume.pdf";
import "../pages.css";

export default function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <p>I have experience with Javascript, Typescript, HTML, CSS, PostgreSQL, and React.</p>
            <div>
                <a href={resumeLink} download> Click here to download my resume! </a>
            </div>



        </div>
    );

}