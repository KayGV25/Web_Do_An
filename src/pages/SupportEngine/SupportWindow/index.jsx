import React from "react";
import { styles } from '../styles.js'
import EmailForm from './EmailForm.jsx'

const SupportWindow = props => {
    return (
        <div
        
        style={{
            opacity: props.visible ? '1' : '0',
            ...styles.supportWindow
            }}>
        <EmailForm />
        </div>
    )

}

export default SupportWindow