import React, { Component } from 'react'

export class NavItem extends Component {
    render() {
        return (
            <div className="rotatedDiv" style={{opacity: `${this.props.item/100}`, transform: `rotateX(55deg) rotateY(0deg) rotateZ(33deg) translateZ(${this.props.item*this.props.multiplier/15}px)`}}>
                <img className ='itemIcon' src={this.props.icon} />
            </div>
        )
    }
}

export default NavItem
