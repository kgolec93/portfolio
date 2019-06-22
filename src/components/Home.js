import React, { Component } from 'react'
import data from '../data/projects' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import iconArrow from '../assets/icon/arrow.svg'

const itemList = Object.keys(data)
.map(
  key => ({
    ...data[key],
    key: key
  })
)

const mapDispatchToProps = dispatch => {
    return {
      loadData: (data) => dispatch({type: 'LOAD_DATA', payload: data}),
      showMenu: () => dispatch({type: 'SHOW_SIDE_MENU'})
    }
  }



class Item extends Component {
    loadData = (e) => {
        this.props.loadData(data[e.target.id]);
        this.props.showMenu();
    }

    style = {
        // url("paper.gif");
        backgroundImage: `url('${this.props.thumbnail}')`,
        backgroundSize: 'cover',
    }

    render() {
        return (
            <div className="sliderItem hover" onClick={this.loadData} id={this.props.idVal}>
                <div className="imagesContainer" id={this.props.idVal} style={this.style}>
                    <div className="iconContainer" id={this.props.idVal}>
                        <img id={this.props.idVal} src={this.props.icon} className='largeIcon' alt=""/>
                    </div>
                </div>
                <div className="headersContainer" id={this.props.idVal}>
                    <h1 id={this.props.idVal}>{this.props.name}</h1>
                    <h2 id={this.props.idVal}>{this.props.framework}</h2>
                </div>
            </div>
        )
    }
}

const ConnectedItem = connect(null, mapDispatchToProps)(Item)



class Home extends Component {
    i = 0

    scrollLeft = () => {
        const slider = setInterval(()=>{
            this.i += 4
            this.refs.slider.scrollLeft -= 4
            if (this.i === 332) {
                clearInterval(slider);
                this.i = 0;
            }
        }, 1)
    }

    scrollRight = () => {
        const slider = setInterval(()=>{
            this.i += 4
            this.refs.slider.scrollLeft += 4
            if (this.i === 332) {
                clearInterval(slider);
                this.i = 0;
            }
        }, 1)
    }

    render() {
        return (
            <div className='contentWrapper'>
                <div className="pageHeader">
                    <div className='textContainer'>
                    <h1>Kamil Golec</h1>
                    <h5>Frontend Developer Portfolio</h5>
                    </div>
                </div>
                <div className="projectSlider" ref='slider'>
                    <div className="sliderWrapper" >
                        {itemList.map((i)=>{
                            return (
                            <Link className='link' to={`/project`}>
                                <ConnectedItem
                                    name={i.name}
                                    framework={i.framework}
                                    idVal={i.idVal}
                                    thumbnail={i.thumbnail}
                                    icon={i.icon}
                                />
                            </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default Home
