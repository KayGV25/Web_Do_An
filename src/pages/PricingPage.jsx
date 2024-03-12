import '../styles/PricingPage.css'
import product from '../assets/product-images/istockphoto-520619396-612x612.jpg'


function PricingPage(){
    return (
        <>
            <div className="root">
                <div className="holder">
                    <div className="img">
                        <img src={product} alt="" className='img'/>
                    </div>
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
                            <button className='buy-btn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPage;