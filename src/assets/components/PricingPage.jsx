import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function PricingPage(){
    const images = [
        "https://lh3.google.com/u/0/d/13YuVnhycEWqj0Pz66VavnP9IIMbqiP1k=w1860-h885-iv1",
        "https://lh3.google.com/u/0/d/1B-031yxPVaYReG4PrVCz2h4ilooqEIlU=w1860-h885-iv1",
        "https://lh3.google.com/u/0/d/1FF2R68Hyf7Et-c8enx3eOy6YiLLmwhhF=w1860-h885-iv1"
    ]
    return (
        <>
            <div className="root">
                <div className="holder" id="product">
                <Carousel className="img">
                    <Carousel.Item>
                        <img src="https://lh3.google.com/u/0/d/13YuVnhycEWqj0Pz66VavnP9IIMbqiP1k=w1860-h885-iv1" style={{width: "100%"}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://lh3.google.com/u/0/d/1B-031yxPVaYReG4PrVCz2h4ilooqEIlU=w1860-h885-iv1" style={{width: "100%"}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://lh3.google.com/u/0/d/1FF2R68Hyf7Et-c8enx3eOy6YiLLmwhhF=w1860-h885-iv1" style={{width: "100%"}}/>
                    </Carousel.Item>
                </Carousel>
                    <div className='des'>
                        <h1 className="name">
                            Cooling compartment
                        </h1>
                        <div className='price'>
                            <h2>50.000vnd</h2>
                        </div>
                        <div className='detail'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, autem ullam! Odio mollitia eius suscipit expedita incidunt, vero labore doloribus magni, quas eum aliquid! Explicabo cumque adipisci a ipsa libero.</p>
                        </div>
                        <div>
                            <button><Link to="/Order">Buy Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPage;