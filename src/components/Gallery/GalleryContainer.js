import React, { Component } from 'react'
import iconClose from '../../assets/icon/close.svg'
import iconArrow from '../../assets/icon/arrow.svg'


const testArray = [0,1,2,3,4,5,6,7,8,9,10,11]

const ImageOverflow = (props) => {    
    return (
        <div className="blackout" >
            <div className="showImage">
                <img id='closeIcon' src={iconClose} alt="" onClick={props.hideItem}/>
                <img src={iconArrow} alt="arr" className="arrow left"/>
                <img src={iconArrow} alt="arr" className="arrow "/>

                <div id='imageContainer'>IMAGE</div>
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
                    <ImageOverflow
                        hideItem={this.toggleImage}
                    />
                }

            </div>
        )
    }
}

export default GalleryContainer
