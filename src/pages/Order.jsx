import NavBar from "../assets/components/NavBar";

function Order(){
    return (
        <>
            <NavBar />
            <h1 className="offer">Placing Order</h1>
            <div className="order-form-container center-horizontal">
                <form action="https://be-inovation-project.onrender.com/new-customer" method="POST" className="order-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name..." autoFocus/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="abc@gmail.com"/>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" placeholder="<House number>, <Street Name>, <District>, <City>, <Country>"/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" placeholder=""/>
                    <label htmlFor="productQuantity">Product Quantity</label>
                    <input type="number" name="productQuantity" min="0"/>
                    <input type="submit" value="Place Order"/>
                </form>
            </div>
        </>
    )
}

export default Order;