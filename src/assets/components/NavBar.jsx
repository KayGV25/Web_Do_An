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
                    <div className="nav-link">
                        <NavLink to="/" className={({ isActive }) => {
                            return isActive ? "active nav" : "nav"
                        }}>Home</NavLink>
                        <NavLink to="/Support" className={({ isActive }) => {
                            return isActive ? "active nav" : "nav"
                        }}>Support</NavLink>
                        <NavLink to="/AdminPage" className={({ isActive }) => {
                            return isActive ? "active nav" : "nav"
                        }}>Admin</NavLink>
                    </div>
                    <div></div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;