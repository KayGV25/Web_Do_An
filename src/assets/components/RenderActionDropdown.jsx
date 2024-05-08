import { useState, useContext } from "react";
import { AdminContext } from "../../pages/AdminPage";
import axios from "axios";

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

function RenderActionDropdown(props){
    const {UserData, setUserData} = useContext(AdminContext);
    const [isClickable, setIsClickable] = useState(false);

    function handleDelivering(index,id){
        UserData[index].status = 1;
        const newUserData = [...UserData];
        setUserData(newUserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/OnTheWay", {
            id: id,
        })
        .then(console.log("success"))
        isClickable(false);
    }

    function handleDelivered(index,id){
        UserData[index].status = 2;
        const newUserData = [...UserData];
        setUserData(newUserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/Delivered", {
            id: id,
        })
        .then(console.log("success"))
        isClickable(false);
    }

    function handleCancle(index,id){
        UserData[index].status = 3;
        const newUserData = [...UserData];
        setUserData(newUserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/Cancled", {
            id: id,
        })
        .then(console.log("success"))
        isClickable(false);
    }

    function Update(){
        setIsClickable(!isClickable);
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

    const user = props.data;
    const index = props.index;
    return(
        <>
            <div class="dropdown">
                <button id={user._id} className={StateClass(user.status)} type="button" data-bs-toggle="dropdown" aria-expanded="false" disabled={(!isClickable) ? true : false}>
                    {LOOKUPSTATUS[user.status]}
                </button>
                {() => {
                    if(user.status != 3){
                        return(
                            <>
                                <ul class="dropdown-menu">
                                    {(user.status != 1) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivering(index, user._id)}}>Delivering</a></li> : <></>}
                                    {(user.status != 2 && user.status != 0) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivered(index, user._id)}}>Delivered</a></li> : <></>}
                                    <li><a class="dropdown-item" href="#" onClick={()=>{handleCancle(index, user._id)}}>Cancle</a></li>
                                </ul>
                            </>
                        )
                    }
                    }}
            </div>
            <button className="update-btn" onClick={()=>{Update(user._id)}} disabled={(user.status != 3) ? false : true}>Update</button>
        </>
    )
}
export default RenderActionDropdown;