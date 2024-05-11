import { useState, useContext } from "react";
import { AdminContext } from "../../pages/AdminPage";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from "axios";

const LOOKUPSTATUS = {
    0:"In Stock",
    1:"Delivering",
    2:"Delivered",
    3:"Cancled",
    "In Stock": 0,
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

    function Update(){
        if(isClickable){
            if(handleType == "Delivering"){
                handleDelivering(index, user._id);
            }
            if(handleType == "Delivered"){
                handleDelivered(index, user._id);
            }
            if(handleType == "Cancle"){
                handleCancle(index, user._id);
            }
        }
        setIsClickable(!isClickable);
    }

    function StateClass(status){
        var res;
        if(status == 0){
            res = "Danger";
        }
        else if(status == 1){
            res = "Warning";
        }
        else if(status == 2){
            res = "Success";
        }
        else{
            res = "Secondary";
        }
        return res;
    }

    const user = props.data;
    const index = props.index;
    const [handleType, setHandleType] = useState(LOOKUPSTATUS[user.status]);
    return(
        <>
            <DropdownButton id={`dropdown-variants-${StateClass(LOOKUPSTATUS[handleType])}`} variant={StateClass(LOOKUPSTATUS[handleType]).toLowerCase()} title={handleType} disabled={(!isClickable) ? true : false}>
                {(user.status != 1) ? <Dropdown.Item href="#" onClick={() => {setHandleType("Delivering")}}>Delivering</Dropdown.Item> : <></>}
                {(user.status != 2 && user.status != 0) ? <Dropdown.Item href="#" onClick={() => {setHandleType("Delivered")}}>Delivered</Dropdown.Item> : <></>}
                <Dropdown.Item href="#" onClick={()=>{setHandleType("Cancle")}}>Cancle</Dropdown.Item>
            </DropdownButton>
            <button className="update-btn" onClick={()=>{Update()}} disabled={(user.status != 3) ? false : true}>Update</button>
        </>
    )
}
export default RenderActionDropdown;