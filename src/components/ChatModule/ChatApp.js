import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chatStyle.scss'
import iconChat from '../../assets/img/chat.svg'
import iconClose from '../../assets/icon/close.svg'

const autoresponse = {
    message: 'This is a autoresponse. It appears because for presentation purpose, this chat module is not connected to the socket.io and any web server',
    author: 'Autoresponder',
    timestamp: '',
}

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
            messages: ['Write something!']
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

    render() {
        return (
            <div className='chatApp'>
                <div className='chatOpenButton' onClick={this.toggleChat}>
                    <img src={iconChat} alt=""/>
                </div>
                {this.state.isChatOpen === true &&
                    <div className='chatWindow'>
                        <div className="chatHeader">
                            <p>Chat</p>
                            <img src={iconClose} alt="" onClick={this.toggleChat}/>
                        </div>
                        <div className="messageContainer" ref='msgContainer'>
                            {this.state.messages.map((msg)=>{
                                return(
                                <div className="messageItem">
                                    <p>{msg}</p>
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
