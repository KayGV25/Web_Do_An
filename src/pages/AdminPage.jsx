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

    // var search = document.querySelector("form");
    // search.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const rawdata = new FormData(event.target); 
    //     const data = [...rawdata.entries()];
    //     const text = data[0][1];
    //     SearchByName(text.toLowerCase());
    // })
    const handleSubmit = (event) => {
        event.preventDefault();
        SearchByName(name.toLowerCase());
      }

    function SearchByName(name){
        // axios.post("https://be-inovation-project.onrender.com/OnTheWay")
        // .then(res => setData(res.data))
        // .catch(err => console.log(err));
        console.log("Receive Name :", name);
    }

    return (
        <div className="dark-bg">
            <AdminContext.Provider value={valueToParse}>
                <form onSubmit={handleSubmit} className="search-container">
                    <label htmlFor="Search">Search by name: </label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="search" name="Seacrh" autoFocus/>
                </form>
                {/* Grid sheet */}
                <div className="DataSheetContainer">
                    <div className="DataSheet-row Head">
                        <p>OrderID</p>
                        <p>Order Time</p>
                        <p>Quantity</p>
                        <p>Status</p>
                        <p>Update</p>
                    </div>
                    <div className="line"></div>
                    <RenderData data={data}/>
                </div>
            </AdminContext.Provider>
        </div>
    )
}
export default AdminPage;
