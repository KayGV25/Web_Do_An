import React, { useEffect, useState } from "react";
import axios from "axios";

function FecthData() {
    const [data, setData] = useState([])
    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('https://composed-sacred-lab.ngrok-free.app/db')
        // .then(res => console.log(res.data))
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <h1 style={{ color: 'var(--color2)' }}>Test</h1>
            {data.map((user) => {
                return <ul style={{ color: 'var(--color2)' }}>
                            <li>{user._id}</li>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.phone}</li>
                        </ul> 

            })}

        </div>
    )
}

export default FecthData