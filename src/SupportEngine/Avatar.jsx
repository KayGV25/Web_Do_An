import React, { useState } from "react"
import { styles } from './styles.js'
import { Link } from 'react-router-dom'


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
                >Chat with us
            </div>
            <Link to="https://m.me/262206576982628"
                    target="_blank"
                    rel="noopener noreferrer">
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
            
            </Link>

        </div>
      
    )
}

export default Avatar;