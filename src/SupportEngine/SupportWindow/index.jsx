import React from "react";
import { styles } from '../styles.js'
import EmailForm from './EmailForm.jsx'

const SupportWindow = props => {
    return (
        <div className="transition-5"
        
        style={{
            opacity: props.visible ? '1' : '0',
            ...styles.supportWindow
            }}>
        <EmailForm />
        </div>
    )

}

export default SupportWindow