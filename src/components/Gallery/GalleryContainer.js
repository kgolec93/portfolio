import React, { Component } from 'react'
import iconClose from '../../assets/icon/close.svg'
import iconArrow from '../../assets/icon/arrow.svg'


const testArray = ['A','B','C','D','E','F','G','H',8,9,10,11]

class ImageOverflow extends Component {
    render(){
        return (
            <div className="blackout" >
                <div className="showImage">
                    <img id='closeIcon' src={iconClose} alt="" onClick={this.props.hideItem}/>
                    <img onClick={this.props.prevImage} src={iconArrow} alt="arr" className="arrow left"/>
                    <img onClick={this.props.nextImage} src={iconArrow} alt="arr" className="arrow "/>
                    <div id='imageContainer'>{this.props.selectedImage} & {this.props.item}</div>
                </div>
            </div>
        )
    }    
}

class GalleryItem extends Component {
    toggleImage = () => {
        this.props.toggleImage(this.props.index, this.props.item)
    }

    render() {
        return(
                <div className='galleryItem' 
                    onClick={this.toggleImage}
                    id={this.props.index}
                    item={this.props.item}
                >
                <p>TEST: {this.props.item}</p>
            </div>
        )
    }
}

export class GalleryContainer extends Component {
    constructor() {
        super();
        this.state = {
            showImage: false,
            selectedImage: null,
            selectedImageValue: '',
        }
    }

    toggleImage = (index) => {
        this.setState({
            showImage: !this.state.showImage,
            selectedImage: index,
            selectedImageValue: testArray[index]
        })
    }

    nextImage = () => {
        if (this.state.selectedImage === testArray.length - 1) {
            this.setState({
                selectedImage: 0,
                selectedImageValue: testArray[0]
            })
        }
        else {
            this.setState({
                selectedImage: this.state.selectedImage + 1,
                selectedImageValue: testArray[this.state.selectedImage + 1]
            })
        }
    }

    prevImage = () => {
        if (this.state.selectedImage === 0) {
            this.setState({
                selectedImage: testArray.length - 1,
                selectedImageValue: testArray[testArray.length - 1]
            })
        }
        else {
            this.setState({
                selectedImage: this.state.selectedImage - 1,
                selectedImageValue: testArray[this.state.selectedImage - 1]

            })
        }
    }

    render() {
        return (
            <div className='galleryContainer'>
                {testArray.map((i, index)=> {
                    return (
                        <GalleryItem 
                            item={i}
                            index={index}
                            toggleImage={this.toggleImage}
                        />
                    )
                })}
                {this.state.showImage === true && 
                    <ImageOverflow
                        prevImage={this.prevImage}
                        nextImage={this.nextImage}
                        hideItem={this.toggleImage}
                        item={this.state.selectedImageValue}
                        selectedImage={this.state.selectedImage}
                    />
                }

            </div>
        )
    }
}

export default GalleryContainer
