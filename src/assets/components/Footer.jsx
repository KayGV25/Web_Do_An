import { Link,NavLink } from "react-router-dom";

function Footer(){
    return(
        <>
            <footer>
                <div className="footer">
                    <div className="footer-content">
                        <span>© 2024 KayGV. All rights reserved.</span>
                        <span>Tel: <a href="tel: #">+84 1234567890</a></span>
                    </div>
                    <div className="footer-content">
                        <p>Pages</p>
                        <Link to="/">Home Page</Link>
                        <Link to="/Support">Support</Link>
                        <Link to="/Order">Order</Link>
                    </div>
                    <div className="footer-content">
                        <p>Info</p>
                        <div className="footer-content">
                            <Link to="/#about">About</Link>
                            <Link to="/#offer">Offer</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;