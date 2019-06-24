import React, { Component } from 'react';
import './Chat.css';
import ChatMessage from './components/ChatMessage';
import * as io from 'socket.io-client';

class ChatModule extends Component {

  socketConnection = null;

  constructor() {
    super();
    this.state = {
      isLogged: false,
      authorId: '',
      isOpened: false,
      messages: [],
    }

    // NAWIĄZANIE POŁĄCZENIA Z SOCKET.IO - BĘDZIEMY NASŁUCHIWAĆ NA TYM POŁĄCZENIU
    this.socketConnection = io.connect('https://socket-chat-server-yvhjqrpgyq.now.sh');
    //nasłuchiwanie na połączenia typu 'chat message' (zdefiniowane po stronie serwera)
    this.socketConnection.on('chat message', this.addMessage);
  }
  
  addMessage = message => {
    console.log(message);
    const arr = this.state.messages;
    arr.push({text: message.text, authorId: message.authorId, time: this.timeConvert(message)})
    this.setState({messages: arr});
    this.scrollDown(); 
  }

  timeConvert = (time) => {
    const date = new Date(time.timestamp);
    if (date.getMinutes() < 10) {
      return (`${date.getHours()}:0${date.getMinutes()}`)
    }
    else return (
      `${date.getHours()}:${date.getMinutes()}`
    )
  }

  toggleChat = () => {
    this.setState({isOpened: !this.state.isOpened});
    this.refs.loginName.focus();
  }

  login = () => {
    this.setState({id: this.refs.loginName.value, isLogged: true})
    this.refs.textInput.focus();
  }

  triggerSend = (e) => {
    if (e.keyCode === 13) {
      this.sendMessage();
      e.preventDefault();
    }
  }

  triggerLogin = (e) => {
    if (e.keyCode === 13) {
      this.login();
      e.preventDefault();
    }
  }

  getTime = () => {
    const date = new Date();
    if (date.getMinutes() < 10) {
      return (`${date.getHours()}:0${date.getMinutes()}`)
    }
    else return (
      `${date.getHours()}:${date.getMinutes()}`
    )
  }

  sendMessage = () => {
    const message = this.refs.textInput.value;
    const author = this.refs.loginName.value;
    if (message.trim() !== '') {
      // const arr = this.state.messages;
      // arr.push({text: this.refs.textInput.value, authorId: this.state.authorId, time: this.getTime()})
      // this.setState({messages: arr});
      // this.refs.textInput.value = '';
      // this.scrollDown();

      // wysyłamy wiadomość do serwera
      this.socketConnection.emit('chat message', {text: message, authorId: author});
      this.refs.textInput.value = '';
    }
  }

  logout = () => {
    this.setState({id: '', isLogged: false})
  }

  scrollDown = () => {
    if (this.state.isOpened === true) {
      this.refs.chatContent.scrollTop = this.refs.chatContent.scrollHeight
    }
  }

  render() {
    return (
      <div>
        <div className={`Chat ${this.state.isOpened ? 'openChat' : ''}`}>
          <div className="header">
            <p>Group chat</p>
            <p onClick={this.toggleChat} className="close-button">X</p>
          </div>
          <div className="chatContent" ref="chatContent">
            {this.state.messages.map((item) => {
              return (
                <ChatMessage
                  text={item.text}
                  author={item.authorId}
                  time={item.time}
                />
              )
            })
            }
          </div>
          <div className="footer">
            <div className="input-container">
              <input type="text" ref="textInput" onKeyUp={this.triggerSend}/>
              <div className="sendButton" onClick={this.sendMessage}>Send</div>
            </div>
            <p onClick={this.logout}>Log out</p>
          </div>
          
          <div className={`overlay ${this.state.isLogged ? 'hidden' : ''}`}>
            <div className="loginWindow">
              <p>Log in to chat</p> 
              <input type="text" ref="loginName" className="loginInput" placeholder="Enter your name" onKeyUp={this.triggerLogin}/>
              <div className="loginButton" onClick={this.login}>Join</div>
            </div>
          </div>
        </div>


        <div className={this.state.isOpened ? 'hidden' : ''} onClick={this.toggleChat} id="openChat">
          <p>Chat</p>
        </div>

      </div>
    );
  }
}

export default ChatModule;
