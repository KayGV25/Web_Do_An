import React, { createContext } from "react";
import FetchnUpdateData from "../FetchnUpdateData";
import { useEffect, useState } from "react";
import axios from "axios";
import RenderData from "../assets/components/RenderData";

// import Instock from "../Instock";

export const AdminContext = createContext({});

function AdminPage(){
    const [data, setData] = useState([])
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


    return (
        <AdminContext.Provider value={valueToParse}>
            {/* Grid sheet */}
            <form action="">
                <label htmlFor="Search">Search by name</label>
                <input type="search" name="Seacrh" autoFocus/>
            </form>
            <div className="DataSheetContainer">
                <div className="DataSheet-row Head">
                    <p>OrderID</p>
                    <p>Order Time</p>
                    <p>Quantity</p>
                    <p>Status</p>
                    <p>Update</p>
                </div>
                <RenderData Data={data}/>
            </div>
        </AdminContext.Provider>
    )
}
export default AdminPage;
