import React, { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import RenderData from "../assets/components/RenderData";

// import Instock from "../Instock";

export const AdminContext = createContext({});

function AdminPage(){
    const [data, setData] = useState([]);
    const [name, setName] = useState();
    useEffect(() => {
        axios.get('https://be-inovation-project.onrender.com/db')
        // .then(res => console.log(res.data))
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);
    const valueToParse = {
        UserData: data,
        setUserData: setData
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        SearchByName(name.toLowerCase());
      }

    function SearchByName(name){
        axios.post("https://be-inovation-project.onrender.com/getByPhone", {
            name:name,
        })
        .then(res => setData(res.data))
        .catch(err => console.log(err));
        console.log("Receive Name :", name);
    }

    return (
        <div className="dark-bg">
            <AdminContext.Provider value={valueToParse}>
                <form onSubmit={handleSubmit} className="search-container">
                    <label htmlFor="Search">Search by phone number: </label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="search" name="Seacrh" autoFocus placeholder="Enter * to search for all..."/>
                </form>
                {/* Grid sheet */}
                <div className="DataSheetContainer">
                    <div className="DataSheet-row Head">
                        <p>OrderID</p>
                        <p>Order Time</p>
                        <p>Name</p>
                        <p>Quantity</p>
                        <p>Status</p>
                        <p>Update</p>
                    </div>
                    <div className="line"></div>
                    <RenderData data={data}/>
                </div>
            </AdminContext.Provider>
            <a href="https://docs.google.com/spreadsheets/d/1NdrrHMRSGG9LpzjxVA-as_gnkZgzQIY-TqpPivB-EPE/edit?usp=sharing" target="_blank">Link to sheet</a>
        </div>
    )
}
export default AdminPage;
