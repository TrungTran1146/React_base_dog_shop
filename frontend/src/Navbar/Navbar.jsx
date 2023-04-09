import { Link } from "react-router-dom";
import './navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to={"/"}>Home</Link>
                <Link to={"/dogs"}> My Dogs</Link>
                <Link to={"/cart"}>My Cart</Link>
            </nav>
        </>
    );
}

export default Navbar;