// import NavBarItem from "./UI/NavBarItem";
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link smooth={true} duration={500} to="#bio"> about </Link>,
                    </li>
                    <li>
                        <Link smooth={true} duration={500} to="#projects"> portfolio </Link>,
                    </li>
                    <li>
                        <Link smooth={true} duration={500} to="#resume"> resume </Link>,
                    </li>
                </ul>
            </nav>

        </div>

    );


}
