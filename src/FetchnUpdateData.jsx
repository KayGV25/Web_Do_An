import React, { useEffect, useState } from "react";
import axios from "axios";


function FetchnUpdateData() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://composed-sacred-lab.ngrok-free.app/db')
        // .then(res => console.log(res.data))
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    function handleDelivering(index,id){
        data[index].status = 1;
        const newData = [...data];
        setData(newData);
        console.log(data);
        axios.post("https://composed-sacred-lab.ngrok-free.app/updateStatus/OnTheWay", {
            id: id,
        })
        .then(console.log("success"))
    }

    function handleDelivered(index,id){
        data[index].status = 2;
        const newData = [...data];
        setData(newData);
        console.log(data);
        axios.post("https://composed-sacred-lab.ngrok-free.app/updateStatus/Delivered", {
            id: id,
        })
        .then(console.log("success"))
    }

    function handleDelete(index,id){
        data[index].status = 2;
        const newData = [...data];
        setData(newData);
        console.log(data);
        axios.post("https://composed-sacred-lab.ngrok-free.app/delete", {
            id: id,
        })
        .then(console.log("success"))
    }

    function FormatDate(rawDate){
        var d = new Date(rawDate);
        return d.toLocaleString('vi-VN');
    }

    return (
        <div className="custom-background">
            <div className="side-menu-container">
                <div className="side-menu">
                    <a href="#Instock">Instock</a>
                    <a href="#Deli">Delivering</a>
                </div>
            </div>
            <div style={{paddingTop: '30px'}}>
            <h1 id="Instock" style={{ color: '#F0F0F0' , fontFamily: 'Display, sans-serif', fontSize: '5em', textAlign: 'center'}}>In stock</h1>
            {data.map((user, index) => {
                if(user.status == 0){
                    return (
                    <ul style={{ color: '#F0F0F0', display: 'flex', justifyContent: 'center'}}>
                        <div className="order-container">
                            <div className="column">
                                <li className="hidden">{user._id}</li>
                                <li style={{fontSize: '2em'}}>Name: {user.name}</li>
                                <li>Address: {user.address}</li>
                                <li>Email: {user.email}</li>
                                <li>Tel: {user.phone}</li>
                                <li>Quantity: {user.productQuantity}</li>
                                <li>Order time: {FormatDate(user.ordertime)}</li>
                                <li className="hidden">{user.status}</li>
                            </div>
                            <div className="btn-layout">
                                <button onClick={() => handleDelivering(index,user._id)}>Delivering</button>
                                <button onClick={() => handleDelivered(index,user._id)}>Delivered</button>
                                <button onClick={() => handleDelete(index,user._id)}>Delete</button>
                            </div>
                        </div>
                        </ul>    )}
        })}
            </div>

            <div style={{marginTop: '10vh'}}>
            <h1 id="Deli" style={{color: '#F0F0F0' , fontFamily: 'Display, sans-serif', fontSize: '5em', textAlign: 'center'}}>Delivering</h1>
            {data.map((user, index) => {
                if(user.status == 1){
                    return (
                    <ul style={{ color: '#F0F0F0', display: 'flex', justifyContent: 'center' }}>
                        <div className="order-container">
                        <div className="column">
                                <li className="hidden">{user._id}</li>
                                <li style={{fontSize: '2em'}}>Name: {user.name}</li>
                                <li>Address: {user.address}</li>
                                <li>Email: {user.email}</li>
                                <li>Tel: {user.phone}</li>
                                <li>Quantity: {user.productQuantity}</li>
                                <li>Order time: {FormatDate(user.ordertime)}</li>
                                <li className="hidden">{user.status}</li>
                            </div>
                            <div className="btn-layout">
                                <button onClick={() => handleDelivering(index,user._id)}>Delivering</button>
                                <button onClick={() => handleDelivered(index,user._id)}>Delivered</button>
                                <button onClick={() => handleDelete(index,user._id)}>Delete</button>
                            </div>
                        </div>
                        </ul>    )}
        })}
            </div> 
        </div>
    )
}


export default FetchnUpdateData