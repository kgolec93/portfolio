import React, { Component } from 'react'

const testArray = [0,1,2,3,4]

const ShowItem = (props) => {

    
    return (
        <div className="blackout" onClick={props.hideItem}>
            <div className="showImage">

            </div>
        </div>
    )
}

export class GalleryContainer extends Component {
    constructor() {
        super();
        this.state = {
            showImage: false
        }
    }

    toggleImage = () => {
        this.setState({
            showImage: !this.state.showImage
        })
    }

    render() {
        return (
            <div className='galleryContainer'>
                {testArray.map((i)=> {
                    return (
                        <div className='galleryItem' onClick={this.toggleImage}>
                            <p>TEST: {i}</p>
                        </div>
                    )
                })}
                {this.state.showImage === true && 
                    <ShowItem
                        hideItem={this.toggleImage}
                    />
                }

            </div>
        )
    }
}

export default GalleryContainer
