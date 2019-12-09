import React, { Component } from "react";
import LiveChat from "./components/LiveChat";
import "./App.css";
import "./reset.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textArea: "",
      messages: [
        {
          separate: "receive",
          timestamp: "오후 3:04",
          name: "도미넌트랩",
          img: "/logo.png",
          message: "안녕하세요 :) 이영석 님 반갑습니다."
        },
        {
          separate: "send",
          timestamp: "오후 3:05",
          name: "이영석",
          img: "/logo.png",
          message: "네 안녕하세요!"
        },
        {
          separate: "send",
          timestamp: "오후 3:05",
          name: "이영석",
          img: "/logo.png",
          message: "잘 지내시나요?"
        }
      ]
    };

    this.onEnterPress = this.onEnterPress.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
    this.onChangeTextarea = this.onChangeTextarea.bind(this);
  }

  onSendMessage() {
    if (!this.state.textArea) return;

    const copyMessages = this.state.messages.slice();

    let temp = {
      separate: "send",
      timestamp: "오후 3:05",
      name: "이영석",
      img: "/logo.png",
      message: this.state.textArea
    };

    copyMessages.push(temp);

    this.setState({
      textArea: "",
      messages: copyMessages
    });
  }

  onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.onSendMessage();
    }
  }

  onChangeTextarea(e) {
    this.setState({
      textArea: e.target.value
    });
  }

  render() {
    return (
      <div id="message-wrap">
        <LiveChat
          text={this.state.textArea}
          data={this.state.messages}
          onEnterPress={this.onEnterPress}
          onSendMessage={this.onSendMessage}
          onChangeTextarea={this.onChangeTextarea}
        />
      </div>
    );
  }
}

export default App;
