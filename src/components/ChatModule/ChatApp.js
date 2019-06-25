import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chatStyle.scss'
import iconChat from '../../assets/img/chat.svg'
import iconClose from '../../assets/icon/closeWht.svg'
import Moment from 'react-moment';
import iconLogout from '../../assets/icon/logout.svg'

const autoresponse = {
    message: 'This is a autoresponse. It appears because for presentation purpose, this chat module is not connected to the socket.io and any web server',
    author: 'Autoresponder',
    date: new Date().getTime(),
}

const welcomeMessage = {
    message: 'Write something!', date: new Date().getTime(), author: 'Autoresponder'
}

class MessageItem extends Component {

    componentDidMount() {
        if (this.props.author === this.props.loggedUser) {
            this.setState({style: 'messageItem author'})
        }
        else {
            this.setState({style: 'messageItem'})
        }
    }

    constructor() {
        super();
        this.state = {
            style: ''
        }
    }

    render() {
        return(
            <div className={this.state.style}>
                <p>{this.props.message}</p>
                <div className="messageHeader">
                    <p>~{this.props.author}</p>
                    <Moment format='DD/MM/YYYY HH:MM'>{this.props.date}</Moment>
                </div>
            </div>
        )
    }
}

class index extends Component {

    componentDidUpdate() {
        if (this.refs.msgContainer){
            this.refs.msgContainer.scrollTop = this.refs.msgContainer.scrollHeight
        }
    }

    constructor() {
        super();
        this.state = {
            isChatOpen: false,
            inputValue: '',
            messages: [],
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
        if (this.state.inputValue !== ''){
            this.setState({
                messages: [...this.state.messages, 
                {
                    message: this.state.inputValue,
                    author: this.state.loggedUser,
                    date: new Date().getTime()
                }]
            });
        }

        const autoresponsder = () => setTimeout(() => {
            this.setState({
                messages: [...this.state.messages, autoresponse]
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
            isLogged: true,
            messages: [welcomeMessage]
        })
    }

    logout = () => {
        this.setState({
            loggedUser: '',
            isLogged: false,
            messages: [ ]
        })
    }

    test = () => {
        console.log()
    }

    render() {
        return (
            <div className='chatApp'>
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
                            <div>
                                <img src={iconLogout} alt="" onClick={this.logout}/>
                                <img src={iconClose} alt="" onClick={this.toggleChat}/>
                            </div>
                        </div>
                        <div className="messageContainer" ref='msgContainer'>
                            {this.state.messages.map((msg)=>{
                                return(
                                    <MessageItem
                                        message={msg.message}
                                        date={msg.date}
                                        author={msg.author}
                                        loggedUser={this.state.loggedUser}
                                    />
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
