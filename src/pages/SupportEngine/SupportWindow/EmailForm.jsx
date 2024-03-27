import React, { useState } from "react";
import { styles } from '../styles.js';
import { LoadingOutlined } from '@ant-design/icons'
import Avatar from "../Avatar.jsx";

const EmailForm = props => {
    const [email, setEmail] = useState('')
    const [Loading, setLoading] = useState(true)

    return (
        <div style={{
            ...styles.emailFormWindow,
            ...{
                height: '100%',
                opacity: '1',
            }
        }}>
            <div style={{ height:'0px'}}>
                <div style={styles.stripe}></div>
            </div>
                    
            <div className="transition-5"
                style={{
                    zIndex: Loading ? '10' : '-1',
                    opacity: Loading ? '0.33' : '0',
                    ...styles.loadingDiv                   

                }}
            
            >

            </div>
            <LoadingOutlined 
                className="transition-5"
                style={{
                    zIndex: Loading ? '10' : '-1',
                    opacity: Loading ? '0.33' : '0', 
                    fontSize: '82px',
                    top: 'calc(50% - 41px)',
                    left:  'calc(50% - 41px)',
                    ...styles.loadingIcon
                }}
            />
            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar
                    style={{
                        position: 'relative',
                        left: '41%',
                        top: '10%',
                    
                    }}
                />
                <div style={styles.topText}>
                    Chao may
                </div>

            </div>
        </div>
    )
}
export default EmailForm