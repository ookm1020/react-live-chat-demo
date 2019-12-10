import React, { useEffect, useRef } from "react";

import "./LiveChat.css";

const LiveChat = props => {
  const focusRef = useRef(null);
  const threadRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();

    threadRef.current.scrollTop =
      threadRef.current.scrollHeight - threadRef.current.clientHeight;
  }, [props.data]);

  return (
    <div className="live-chat-container">
      <ul className="thread-messages" ref={threadRef}>
        {props.data.map((data, i) => {
          return (
            <li className={data.separate} key={i}>
              <div className="msg">{data.message}</div>
              <div className="info">{data.timestamp}</div>
            </li>
          );
        })}
      </ul>

      <div className="message-form">
        <div className="input-form">
          <textarea
            ref={focusRef}
            id="message-textarea"
            rows="1"
            value={props.text}
            placeholder="메시지 입력"
            onChange={props.onChangeTextarea}
            onKeyDown={props.onEnterPress}
          />
          <div className="message-send" onClick={props.onSendMessage}>
            전송
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
