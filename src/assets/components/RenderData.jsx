import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { AdminContext } from "../../pages/AdminPage";
import RenderName from "./RenderName";
import RenderActionDropdown from "./RenderActionDropdown";


function RenderData(){
    const {UserData, setUserData} = useContext(AdminContext);

    function FormatDate(rawDate){
        var d = new Date(rawDate);
        return d.toLocaleString('vi-VN');
    }

    // Mapping prioritize instock and delivering
    return (
        <>
            {UserData.map((user,index) => {
                    if(user.status == 0){
                        return(
                            <div className="DataSheet-row">
                                <p>{user._id}</p>
                                <p>{FormatDate(user.ordertime)}</p>
                                <RenderName data={user}/>
                                <p>{user.productQuantity}</p>
                                <RenderActionDropdown data={user} index={index}/>
                            </div>
                        )
                    }
                })}
            {UserData.map((user,index) => {
                    if(user.status == 1){
                        return(
                            <div className="DataSheet-row">
                                <p>{user._id}</p>
                                <p>{FormatDate(user.ordertime)}</p>
                                <RenderName data={user}/>
                                <p>{user.productQuantity}</p>
                                <RenderActionDropdown data={user} index={index}/>
                            </div>
                        )
                    }
                })}
            {UserData.map((user,index) => {
                    if(user.status == 2){
                        return(
                            <div className="DataSheet-row">
                                <p>{user._id}</p>
                                <p>{FormatDate(user.ordertime)}</p>
                                <RenderName data={user}/>
                                <p>{user.productQuantity}</p>
                                <RenderActionDropdown data={user} index={index}/>
                            </div>
                        )
                    }
                })}
            {UserData.map((user,index) => {
                    if(user.status == 3){
                        return(
                            <div className="DataSheet-row">
                                <p>{user._id}</p>
                                <p>{FormatDate(user.ordertime)}</p>
                                <RenderName data={user}/>
                                <p>{user.productQuantity}</p>
                                <RenderActionDropdown data={user} index={index}/>
                            </div>
                        )
                    }
                })}
        </>
    )
}

export default RenderData;