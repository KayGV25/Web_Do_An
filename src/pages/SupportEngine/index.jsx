import React, { useRef, useEffect, useState } from "react";
import Avatar from './Avatar.jsx'
import styles from "./styles.js";
import SupportWindow from "./SupportWindow/index.jsx";

const SupportEngine = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])
    return (
        <div ref={ref}>
            <SupportWindow
                visible={visible}
            />
            
            <Avatar 
                onClick={() => setVisible(true)}
                style={{ 
                    position: 'fixed', bottom: '100px', right: '50px'                    
                }}
            />
        </div>
    )
}

export default SupportEngine;