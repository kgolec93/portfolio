import React, { Component } from 'react'

export class ChatMessage extends Component {



  render() {
    return (
        <div className="message">
            <p>{this.props.text}</p>
            <div className="details">
              <p>~{this.props.author}</p>
              <p>{this.props.time}</p>
            </div>
        </div>
    )
  }
}

export default ChatMessage
