import '../styles/HomePage.css'

import NavBar from '../assets/components/NavBar';
import PricingPage from '../assets/components/PricingPage'
import About from '../assets/components/About';
import Offer from '../assets/components/Offer';
import LandImg from '../assets/components/LandImg';
import Footer from '../assets/components/Footer';
import ScrollToTop from "react-scroll-to-top";

function HomePage(){
    return (
        <>
            <NavBar />
            <LandImg />
            <About />
            <Offer />
            <PricingPage />
            <ScrollToTop className='back-to-top' smooth />
            <Footer />
        </>
    )
}
function toTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
export default HomePage;