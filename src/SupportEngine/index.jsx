import React, { useRef, useEffect, useState } from "react";
import Avatar from './Avatar.jsx';
import styles from "./styles.js";


const SupportEngine = () => {
  
    return (
        <div >
           
            <Avatar 
            
                style={{ 
                    position: 'fixed', bottom: '100px', right: '35px'                    
                }}
            />
           
        </div>
    )
}

export default SupportEngine;