import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { AdminContext } from "../../pages/AdminPage";
import axios from "axios";
import RenderName from "./RenderName";
import { Button } from "react-bootstrap";
const LOOKUPSTATUS = {
    0:"In Stock",
    1:"Delivering",
    2:"Delivered",
    3:"Cancled",
    "In stock": 0,
    "Delivering": 1,
    "Delivered": 2,
    "Cancled": 3
}
function RenderData(){
    const {UserData, setUserData} = useContext(AdminContext);

    function FormatDate(rawDate){
        var d = new Date(rawDate);
        return d.toLocaleString('vi-VN');
    }

    function handleDelivering(index,id){
        UserData[index].status = 1;
        const newUserData = [...UserData];
        setUserData(newUserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/OnTheWay", {
            id: id,
        })
        .then(console.log("success"))
    }

    function handleDelivered(index,id){
        UserData[index].status = 2;
        const newUserData = [...UserData];
        setUserData(newUserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/Delivered", {
            id: id,
        })
        .then(console.log("success"))
    }

    function handleCancle(index,id){
        UserData[index].status = 3;
        const newUserData = [...UserData];
        setUserData(newUserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/Cancled", {
            id: id,
        })
        .then(console.log("success"))
    }

    function Update(index, id){
        const status = document.getElementById(id).innerText;
        const GetStatus = LOOKUPSTATUS[status];
        if(GetStatus == 1){
            handleDelivering(index, id);
        }
        else if(GetStatus == 2){
            handleDelivered(index, id);
        }
        else if(GetStatus == 3){
            handleCancle(index, id);
        }
    }

    function StateClass(status){
        var res = "btn dropdown-toggle ";
        if(status == 0){
            res += "btn-danger";
        }
        else if(status == 1){
            res += "btn-warning";
        }
        else if(status == 2){
            res += "btn-success";
        }
        else{
            res += "btn-secondary";
        }
        return res;
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
                                <div class="dropdown">
                                    <button id={user._id} className={StateClass(user.status)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {LOOKUPSTATUS[user.status]}
                                    </button>
                                    <ul class="dropdown-menu">
                                        {(user.status != 1) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivering(index, user._id)}}>Delivering</a></li> : <></>}
                                        {(user.status != 2 && user.status != 0) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivered(index, user._id)}}>Delivered</a></li> : <></>}
                                        <li><a class="dropdown-item" href="#" onClick={()=>{handleCancle(index, user._id)}}>Cancle</a></li>
                                    </ul>
                                </div>
                                <button className="update-btn" onClick={()=>{Update(index, user._id)}}>Update</button>
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
                                <div class="dropdown">
                                    <button id={user._id} className={StateClass(user.status)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {LOOKUPSTATUS[user.status]}
                                    </button>
                                    <ul class="dropdown-menu">
                                        {(user.status != 1) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivering(index, user._id)}}>Delivering</a></li> : <></>}
                                        {(user.status != 2 && user.status != 0) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivered(index, user._id)}}>Delivered</a></li> : <></>}
                                        <li><a class="dropdown-item" href="#" onClick={()=>{handleCancle(index, user._id)}}>Cancle</a></li>
                                    </ul>
                                </div>
                                <button className="update-btn" onClick={()=>{Update(index, user._id)}}>Update</button>
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
                                <div class="dropdown">
                                    <button id={user._id} className={StateClass(user.status)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {LOOKUPSTATUS[user.status]}
                                    </button>
                                    <ul class="dropdown-menu">
                                        {(user.status != 1) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivering(index, user._id)}}>Delivering</a></li> : <></>}
                                        {(user.status != 2 && user.status != 0) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivered(index, user._id)}}>Delivered</a></li> : <></>}
                                        <li><a class="dropdown-item" href="#" onClick={()=>{handleCancle(index, user._id)}}>Cancle</a></li>
                                    </ul>
                                </div>
                                <button className="update-btn" onClick={()=>{Update(index, user._id)}}>Update</button>
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
                                <div class="dropdown">
                                    <button id={user._id} className={StateClass(user.status)} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {LOOKUPSTATUS[user.status]}
                                    </button>
                                    <ul class="dropdown-menu">
                                        {(user.status != 1) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivering(index, user._id)}}>Delivering</a></li> : <></>}
                                        {(user.status != 2 && user.status != 0) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivered(index, user._id)}}>Delivered</a></li> : <></>}
                                        <li><a class="dropdown-item" href="#" onClick={()=>{handleCancle(index, user._id)}}>Cancle</a></li>
                                    </ul>
                                </div>
                                <button className="update-btn" onClick={()=>{Update(index, user._id)}}>Update</button>
                            </div>
                        )
                    }
                })}
        </>
    )
}

export default RenderData;