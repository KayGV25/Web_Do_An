import { Link,NavLink } from "react-router-dom";
import GoogleSignin from "../product-images/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function NavBar(){
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };
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
                    {user ? (
                        <button onClick={signOut} className="sign-out" type="button">
                        Sign Out
                        </button>
                    ) : (
                        <button className="sign-in">
                        <img
                            onClick={googleSignIn}
                            src={GoogleSignin}
                            alt="sign in with google"
                            type="button"
                        />
                        </button>
                    )}
                </div>
            </nav>
        </>
    )
}

export default NavBar;