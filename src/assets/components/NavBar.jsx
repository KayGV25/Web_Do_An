import { Link,NavLink } from "react-router-dom";
import SignInOut from "./SignInOut";

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
                    <NavLink to="/Support" className={({ isActive }) => {
                        return isActive ? "active nav" : "nav"
                    }}>Support</NavLink>
                    <NavLink to="/CustomerService" className={({ isActive }) => {
                        return isActive ? "active nav" : "nav"
                    }}>Customer Service</NavLink>
                </div>
                <SignInOut className="nav-right"/>
            </nav>
        </>
    )
}

export default NavBar;