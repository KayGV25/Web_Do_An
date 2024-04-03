import React, { useState, useEffect } from 'react';
import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'
import { styles } from '../styles.js';
import {REACT_APP_CE_PROJECT_ID} from "../../apiKey.js"

const ChatEngine = props => {
    return (
        <div
            style={{
                zIndex: props.visible ? '100%' : '0%',
                height: props.visible ? '100%' : '0%',
                width: '100%',
                backgroundColor: 'white',
                // ...styles.chatEngineWindow,
            }}
        >
            {
                props.visible && 
                <ChatEngineWrapper>
                    <Socket 
                        projectID={REACT_APP_CE_PROJECT_ID}
                        userName={props.user.email}
                        userSecret={props.user.email}
                    />

                    <ChatFeed activeChat={props.chat.id} />

                </ChatEngineWrapper>
            }

        </div>
    )
}

export default ChatEngine