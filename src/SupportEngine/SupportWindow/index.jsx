import React, { useState } from "react";
import { styles } from '../styles.js'
import EmailForm from './EmailForm.jsx'

const SupportWindow = props => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)
    return (
        <div className="transition-5"
        
        style={{
            opacity: props.visible ? '1' : '0',
            visibility: props.visible ? 'visible' : 'hidden',
            ...styles.supportWindow
            }}>
        <EmailForm 
            setUser={user => setUser(user)}
            setChat={chat => setChat(chat)}
        />
        </div>
    )

}

export default SupportWindow