import '../styles/NavBar.css'
import logo from '../assets/react.svg'

import { Link,NavLink } from "react-router-dom";

function NavBar(){
    return (
        <>
            <nav className="nav-bar">
                <div className='nav-head-container'>
                    <Link to="/" className='logo'>
                        <div className='circle lr'></div>
                        <div className='circle rl'></div>
                    </Link>
                    <NavLink to="/" className={({ isActive }) => {
                        return isActive ? "active nav" : "nav"
                    }}>Home</NavLink>
                    <NavLink to="/Pricing" className={({ isActive }) => {
                        return isActive ? "active nav" : "nav"
                    }}>Pricing</NavLink>
                    <NavLink to="/Support" className={({ isActive }) => {
                        return isActive ? "active nav" : "nav"
                    }}>Support</NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar;