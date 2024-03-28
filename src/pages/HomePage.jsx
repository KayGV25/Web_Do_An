import NavBar from '../assets/components/NavBar';
import PricingPage from '../assets/components/PricingPage'
import About from '../assets/components/About';
import Offer from '../assets/components/Offer';
import LandImg from '../assets/components/LandImg';
import Footer from '../assets/components/Footer';
import ScrollToTop from "react-scroll-to-top";
import SupportEngine from '../SupportEngine/index';
import SupportWindow from '../SupportEngine/SupportWindow/index';

function HomePage(){
    return (
        <>
            <NavBar />
            <LandImg />
            <About />
            <Offer />
            <PricingPage />
            <div className="float">
                <ScrollToTop className='back-to-top' smooth />
            </div>
            <div>
                <SupportEngine/>
            </div>
            <SupportWindow />
            <Footer />
        </>
    )
}

export default HomePage;