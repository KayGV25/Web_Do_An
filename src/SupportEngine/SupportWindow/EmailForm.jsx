import React, { useState } from "react";
import { styles } from '../styles.js';
import { LoadingOutlined } from '@ant-design/icons';
import Avatar from "../Avatar.jsx";
import axios from 'axios';

const EmailForm = props => {
    const [email, setEmail] = useState('')
    const [Loading, setLoading] = useState(false)

    function getOrCreateUser(callback) {
        axios.put(
            'https://api.chatengine.io/users/',
            {
                "username": email,
                "secret": email,
                "email": email,
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
    }

    function getOrCreateChat(callback) {
        axios.put(
            'https://api.chatengine.io/chats/',
            {
                    "usernames": ["Admin", email],
                    "is_direct_chat": true,
                
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)

        console.log('Sending email', email)

        getOrCreateUser(
            user => {
                getOrCreateChat(
                    chat => console.log('success', chat)
                )
            }
        )

    }

    return (
        <div >
            <div style={{ height:'0px'}}>
                <div style={styles.stripe}/>
            </div>
                    
            <div className="transition-5"
                style={{
                    zIndex: Loading ? '10' : '-1',
                    opacity: Loading ? '0.33' : '0',
                    ...styles.loadingDiv                   

                }}
            
            />

            <LoadingOutlined 
                className="transition-5"
                style={{
                    zIndex: Loading ? '10' : '-1',
                    opacity: Loading ? '0.33' : '0', 
                    fontSize: '82px',
                    top: 'calc(50% - 41px)',
                    left: 'calc(50% - 41px)',
                    ...styles.loadingIcon
                }}
            />
            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar
                    style={{
                        position: 'relative',
                        left: '43.5%',
                        top: '12%',
                    
                    }}
                />
                <div style={styles.topText}>
                    Chao may
                </div>
                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '20%' }}
                >

                    <input
                    type="email"
                    style={styles.emailInput}
                    onChange={e => { console.log('Email:', e.target.value); setEmail(e.target.value); }}
                    placeholder='Email may la j'
                    value={email}
                    />
                </form>
                <div style={styles.bottomText}>
                    nhap mail vao de <br/> bat dau di cu
                </div>
            </div>
        </div>
    )

    
}
export default EmailForm