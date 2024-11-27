import NavBarItem from "./UI/NavBarItem";
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <NavBarItem
            items={[
                <Link key={1} to="/"> about </Link>,
                <Link key={2} to="/contact"> contact </Link>,
                <Link key={3} to="/portfolio"> portfolio </Link>,
                <Link key={4} to="/resume"> resume </Link>,
            ]}

        />

    );


}
