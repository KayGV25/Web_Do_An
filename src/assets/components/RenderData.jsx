import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { AdminContext } from "../../pages/AdminPage";
import axios from "axios";
const LOOKUPSTATUS = {
    0:"In Stock",
    1:"Delivering",
    2:"Delivered",
    3:"Cancled"
}
function RenderData(){
    const {UserData, setUserData} = useContext(AdminContext);

    function FormatDate(rawDate){
        var d = new Date(rawDate);
        return d.toLocaleString('vi-VN');
    }
    console.log(UserData);

    function handleDelivering(index,id){
        UserData[index].status = 1;
        const newUserData = [...UserData];
        setUserData(newUserData);
        console.log(UserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/OnTheWay", {
            id: id,
        })
        .then(console.log("success"))
    }

    function handleDelivered(index,id){
        UserData[index].status = 2;
        const newUserData = [...UserData];
        setUserData(newUserData);
        console.log(UserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/Delivered", {
            id: id,
        })
        .then(console.log("success"))
    }

    function handleCancle(index,id){
        UserData[index].status = 3;
        const newUserData = [...UserData];
        setUserData(newUserData);
        console.log(UserData);
        axios.post("https://be-inovation-project.onrender.com/updateStatus/Cancled", {
            id: id,
        })
        .then(console.log("success"))
    }

    // Mapping prioritize instock and delivering
    return (
        <div>
            {UserData.map((user,index) => {
                    if(user.status < 2){
                        return(
                            <div className="DataSheet-row">
                                <p>{user._id}</p>
                                <p>{FormatDate(user.ordertime)}</p>
                                <p>{user.name}</p>
                                <div class="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {LOOKUPSTATUS[user.status]}
                                    </button>
                                    <ul class="dropdown-menu">
                                        {(user.status != 1) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivering(index, user._id)}}>Delivering</a></li> : <></>}
                                        {(user.status != 2 && user.status != 0) ? <li><a class="dropdown-item" href="#" onClick={() => {handleDelivered(index, user._id)}}>Delivered</a></li> : <></>}
                                        <li><a class="dropdown-item" href="#" onClick={()=>{handleCancle(index, user._id)}}>Cancle</a></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                })}
        </div>
    )
}

export default RenderData;