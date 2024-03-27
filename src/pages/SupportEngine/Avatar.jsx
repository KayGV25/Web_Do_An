import React, { useState } from "react"
// import './styles.css'
import { styles } from './styles.js'

const Avatar = props => {
    const [hovered, setHovered] = useState(false)
    return (
        <div style={props.style}>
            <div
                className="transition-3"
                style={{
                    
                    opacity: hovered ? '1' : '0',
                    ...styles.avatarHello
                }}
                >May muon j
            </div>
            <div 
                className="transition-3"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
               style={{
                    border: hovered ? '1px solid #f9f0ff': '3px solid var(--color1)',
                ...styles.chatWithMeButton
                
               }}>
            </div>
        </div>
      
    )
}

export default Avatar;