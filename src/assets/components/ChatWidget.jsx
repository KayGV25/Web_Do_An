import { useState } from "react";
import "react-chat-elements/dist/main.css";

import { MessageBox, Input } from "react-chat-elements";

function ChatWidget(){
    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
        console.log(btnState);
    }

    let msgboxClass = btnState ? 'show' : '';

    return (
        <> 
            <div className={`msg-box ${msgboxClass}`}>
                <div id="chat">
                    <MessageBox
                    position={"left"}
                    type={"text"}
                    title={"Message Box Title"}
                    text="Here is a text type message box"
                    className="txt-msg"
                    date={new Date()}
                    />

                    <MessageBox
                    position={"right"}
                    type={"text"}
                    title={"Message Box Title"}
                    text="Here is a text type message box"
                    className="txt-msg"
                    date={new Date()}
                    />
                </div>

                <div className="input-container">
                    <Input
                    placeholder="Type here..."
                    multiline={false}
                    type="text"
                    className="input-chat"
                    autofocus={true}
                    />
                </div>
            </div>
            <button onClick={handleClick}  className="widget-container">
                <div className="widget-container">
                    <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M885.8 383.8h-90.4c12.3 15.8 19.7 35.6 19.7 57.1v194c0 51.3-42 93.2-93.2 93.2H494.1c12.1 31 42.2 53.1 77.4 53.1h314.3c45.6 0 83-37.3 83-83V466.8c-0.1-45.7-37.4-83-83-83z" fill="#FFB89A"></path><path d="M780.7 582.4V286.3c0-74.2-60.7-134.9-134.9-134.9H198.2c-74.2 0-134.9 60.7-134.9 134.9v296.1c0 70.5 54.8 128.7 123.8 134.4 0 0-20 155.4 4.9 155.4s188.4-154.9 188.4-154.9h265.3c74.3 0 135-60.7 135-134.9z m-424.1 74.9l-17.4 16.4c-0.3 0.3-34.5 32.7-73.2 67.1-8.5 7.5-16.2 14.3-23.3 20.5 1.9-20.9 3.9-36.6 3.9-36.8l8-62.3L192 657c-38.5-3.2-68.7-36-68.7-74.6V286.3c0-19.9 7.8-38.6 22.1-52.8 14.2-14.2 33-22.1 52.8-22.1h447.6c19.9 0 38.6 7.8 52.8 22.1 14.2 14.2 22.1 33 22.1 52.8v296.1c0 19.9-7.8 38.6-22.1 52.8-14.2 14.2-33 22.1-52.8 22.1H356.6z" fill="#45484C"></path><path d="M830.3 337.9c-16.2-3.3-32.1 7.1-35.4 23.3-3.3 16.2 7.1 32.1 23.3 35.4 39 8 67.3 42.7 67.3 82.5v177c0 41.6-31.1 77.5-72.3 83.4l-32.7 4.7 7.8 32.1c2 8.1 3.9 16.8 5.8 25.3-17.6-16.4-37.3-35.2-55.2-52.7l-8.7-8.6H562.5c-21.9 0-36.6-1.4-47.2-8.6-13.7-9.3-32.4-5.8-41.7 7.9-9.3 13.7-5.8 32.4 7.9 41.7 25.7 17.5 55.3 19 81 19h143.2c10 9.7 27.3 26.3 45 42.8 16.2 15.1 29.6 27.1 39.8 35.9 20 17 29.3 23.1 41.6 23.1 9.7 0 18.7-4.4 24.8-12.1 10.1-12.9 10.2-29.1 0.5-78.7-1.4-7.2-2.9-14.2-4.3-20.6 54.4-21.1 92.4-74.3 92.4-134.6v-177c0.1-68-48.4-127.4-115.2-141.2z" fill="#45484C"></path><path d="M434.6 602.8c-35.9 0-71-17.1-98.8-48.1-24.6-27.5-39.3-61.6-39.3-91.4v-29.7l29.7-0.3c0.4 0 36.2-0.4 95.4-0.4 16.6 0 30 13.4 30 30s-13.4 30-30 30c-22.3 0-41.2 0.1-56.2 0.1 3.8 7.1 8.8 14.5 15.1 21.6 16 17.9 35.7 28.1 54.1 28.1s38.1-10.3 54.1-28.1c6.5-7.3 11.6-14.9 15.4-22.2-13.7-2.8-24.1-15-24-29.5 0.1-16.5 13.5-29.9 30-29.9h0.1c27.1 0.1 32.5 0.2 33.6 0.3l28.9 1.1v28.9c0 29.8-14.7 63.9-39.3 91.4-27.9 31-62.9 48.1-98.8 48.1z m107.1-109.5z" fill="#33CC99"></path></g></svg>
                </div>
            </button>
        </>
    )
}

export default ChatWidget;