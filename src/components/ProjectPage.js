import React, { Component }  from 'react'
import { connect } from 'react-redux'
import GalleryContainer from './Gallery/GalleryContainer'
import loader from '../assets/img/loader.svg'
import PageHeader from './PageHeader';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

class index extends Component {
    render() {
        if (this.props.data !== undefined) {
            return (
                <div className='contentWrapper'>
                    <PageHeader
                        title={this.props.data.name}
                        subtitle={this.props.data.framework}
                    />
                    <div className="pageContent">
                        <div className="buttonContainer">
                        <a href={this.props.data.link}  target="_blank"><div className="button">website</div></a>
                        
                        {this.props.data.github === 'N/A' &&
                            <div className="button inactive">
                                github
                            </div>
                        }
                        {this.props.data.github !== 'N/A' &&
                            <a href={this.props.data.github}  target="_blank"><div className="button">github</div></a>
                        }
                        </div>
                        <div className="textContainer">
                        <p>Project type: {this.props.data.type}</p>
                        <p>Date started: {this.props.data.date}</p>
                        <p>Technologies: {this.props.data.framework}</p>
                        <p>Libraries: {this.props.data.libraries}</p>
                        <p>Description: {this.props.data.description}</p>
                        </div>
                        <GalleryContainer
                            images={this.props.data.screenshots}
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <img src={loader} alt="" className="loader"/>
                </div>
            )
        }

    }

}

export const ProjectPage = connect(mapStateToProps, null)(index)
export default ProjectPage
