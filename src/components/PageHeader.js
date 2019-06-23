import React, { Component } from 'react'

export class PageHeader extends Component {
    render() {
        return (
            <div className="pageHeader">
                <div className='textContainer'>
                <h1>{this.props.title}</h1>
                <h5>{this.props.subtitle}</h5>
                </div>
            </div>
        )
    }
}

export default PageHeader
