import React, { useState, useEffect } from 'react';
import { chatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'
import { styles } from '../styles.js';
import {REACT_APP_CE_PRIVATE_KEY, REACT_APP_CE_PROJECT_ID} from "../../apiKey.js"

const ChatEngine = props => {
    return (
        <div
            style={{
                zIndex: props.visible ? '100%' : '0%',
                height: props.visible ? '100%' : '0%',
                // opacity: props.visible ? '100' : '0',
                ...styles.chatEngineWindow,
            }}
        >
            {
                props.visible && 
                <chatEngineWrapper>
                    <Socket 
                        projectID={REACT_APP_CE_PROJECT_ID}
                        userName={props.user.email}
                        userSecret={props.user.email}
                    />

                    <ChatFeed activeChat={props.chat.id} />

                </chatEngineWrapper>
            }

        </div>
    )
}

export default ChatEngine