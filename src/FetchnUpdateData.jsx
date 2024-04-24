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

    return (
        <div>
            <div>
            <h1 style={{ color: 'var(--color2)' }}>In stock</h1>
            {data.map((user, index) => {
                if(user.status == 0){
                    return (
                    <ul style={{ color: 'var(--color2)' }}>
                            <div className="instock">
                                <li>{user._id}</li>
                                <li>{user.name}</li>
                                <li>{user.address}</li>
                                <li>{user.email}</li>
                                <li>{user.phone}</li>
                                <li>{user.productQuantity}</li>
                                <li>{user.ordertime}</li>
                                <li>{user.status}</li>
                            </div>
                            <div>
                                <button onClick={() => handleDelivering(index,user._id)}>Delivering</button>
                                <button onClick={() => handleDelivered(index,user._id)}>Delivered</button>
                                <button onClick={() => handleDelete(index,user._id)}>Delete</button>
                            </div>
                        </ul>    )}
        })}
            </div> 

            <div>
            <h1 style={{ color: 'var(--color2)' }}>Delivering</h1>
            {data.map((user, index) => {
                if(user.status == 1){
                    return (
                    <ul style={{ color: 'var(--color2)' }}>
                            <div className="delivering">
                                <li>{user._id}</li>
                                <li>{user.name}</li>
                                <li>{user.address}</li>
                                <li>{user.email}</li>
                                <li>{user.phone}</li>
                                <li>{user.productQuantity}</li>
                                <li>{user.ordertime}</li>
                                <li>{user.status}</li>
                            </div>
                            <div>
                                <button onClick={() => handleDelivering(index,user._id)}>Delivering</button>
                                <button onClick={() => handleDelivered(index,user._id)}>Delivered</button>
                                <button onClick={() => handleDelete(index,user._id)}>Delete</button>
                            </div>
                        </ul>    )}
        })}
            </div> 
        </div>
    )
}


export default FetchnUpdateData