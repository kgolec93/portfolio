import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chatStyle.scss'
import iconChat from '../../assets/img/chat.svg'
import iconClose from '../../assets/icon/closeWht.svg'
import TestButton from '../TestButton';

const autoresponse = {
    message: 'This is a autoresponse. It appears because for presentation purpose, this chat module is not connected to the socket.io and any web server',
    author: 'Autoresponder',
    date: '',
}

const dateNow = new Date();

class index extends Component {

    componentDidUpdate() {
        if (this.refs.msgContainer){
            console.log(this.refs.msgContainer.scrollHeight)
            this.refs.msgContainer.scrollTop = this.refs.msgContainer.scrollHeight
        }
    }

    constructor() {
        super();
        this.state = {
            isChatOpen: false,
            inputValue: '',
            messages: [{message: 'Write something!', date: new Date().getTime(), author: 'Autoresponder'}],
            isLogged: false,
            loggedUser: '',
            loggedUserInput: '',
        }
    }

    toggleChat = () => {
        this.setState({isChatOpen: !this.state.isChatOpen})
    }

    enterMessage = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleEnter = (e) => {
        if (e.keyCode === 13 && this.state.inputValue !== '') {
            this.addMessage();
        }
    }

    addMessage = () => {
        this.setState({
            messages: [...this.state.messages, this.state.inputValue]
        });

        const autoresponsder = () => setTimeout(() => {
            this.setState({
                messages: [...this.state.messages, autoresponse.message]
            });
        }, 1000)
        autoresponsder();
        this.setState({inputValue:''})
    }

    enterLogin = (e) => {
        this.setState({
            loggedUserInput: e.target.value
        })
    }

    login = () => {
        this.setState({
            loggedUser: this.state.loggedUserInput,
            isLogged: !this.state.isLogged
        })
    }

    test = () => {
        console.log()
    }

    render() {
        return (
            <div className='chatApp'>
                {/* <TestButton test={this.test} /> */}
                <div className='chatOpenButton' onClick={this.toggleChat}>
                    <img src={iconChat} alt=""/>
                </div>
                {this.state.isChatOpen === true &&
                    <div className='chatWindow'>
                        {this.state.isLogged === false &&
                            <div className="loginWindow">
                                <img src={iconClose} alt="" onClick={this.toggleChat}/>
                                <div className="loginForm">
                                    <input type="text" placeholder='Enter your name' onChange={this.enterLogin}/>
                                    <div className="loginButton" onClick={this.login}>Join chat</div>
                                </div>
                            </div>
                        }
                        <div className="chatHeader">
                            <p>Chatting as: <span>{this.state.loggedUser}</span></p>
                            <img src={iconClose} alt="" onClick={this.toggleChat}/>
                        </div>
                        <div className="messageContainer" ref='msgContainer'>
                            {this.state.messages.map((msg)=>{
                                return(
                                <div className="messageItem">
                                    <p>{msg.message}</p>
                                    <p>{msg.date}</p>
                                    <p>{msg.author}</p>
                                </div>
                                )
                            })}
                        </div>
                        <div className="chatFooter">
                            <input type="text"
                                value={this.state.inputValue}
                                onChange={this.enterMessage}
                                onKeyDown={this.handleEnter}
                                placeholder='Enter message...'
                            />
                            <div className="btnSend" onClick={this.addMessage}>Send!</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export const ChatApp = connect(null, null)(index)
export default ChatApp
