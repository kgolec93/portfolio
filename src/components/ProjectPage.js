import React, { Component }  from 'react'
import { connect } from 'react-redux'
import GalleryContainer from './Gallery/GalleryContainer'

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

class index extends Component {
    render() {
        return (
            <div className='contentWrapper'>
                <div className="pageHeader">
                    <div className='textContainer'>
                    <h1>{this.props.data !== undefined && this.props.data.name}</h1>
                    <h5>{this.props.data !== undefined && this.props.data.framework}</h5>
                    </div>
                </div>
                <div className="pageContent">
                    <div className="buttonContainer">
                    <div className="button">website</div>
                    <div className="button">github</div>
                    </div>
                    <div className="textContainer">
                    <p>Project type: {this.props.data !== undefined && this.props.data.type}</p>
                    <p>Date started: {this.props.data !== undefined && this.props.data.date}</p>
                    <p>Technologies: {this.props.data !== undefined && this.props.data.framework}</p>
                    <p>Libraries: {this.props.data !== undefined && this.props.data.libraries}</p>
                    <p>Description: {this.props.data !== undefined && this.props.data.description}</p>
                    </div>
                    <GalleryContainer/>
                </div>
            </div>
        )
    }

}

export const ProjectPage = connect(mapStateToProps, null)(index)
export default ProjectPage
