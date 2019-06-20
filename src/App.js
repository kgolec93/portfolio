import React, { Component } from 'react'
import './App.scss';
import iconDigitalarch from './assets/img/digitalarch.png'
import iconKursyBlendera from './assets/img/blender.svg'
import iconWeather from './assets/img/weather-forecast.svg'
import iconChat from './assets/img/chat.svg'
import iconProjectizer from './assets/img/projectizer.svg'
import ProjectPage from './components/ProjectPage';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import { connect } from 'react-redux'
import { digitalarch, projectizer, kursyblendera } from './data/projects.js' 

const uuidv4 = require('uuid/v4');

const mapDispatchToProps = dispatch => {
  return {
    loadData: (data) => dispatch({type: 'LOAD_DATA', payload: data})
  }
}

const itemList = [
  {name: 'digitalARCH.pl', framework: 'jQuery', image: iconDigitalarch, data: 'digitalarch'},
  {name: 'Projectizer', framework: 'React + Redux // Firebase', image: iconProjectizer, data: 'projectizer'},
  {name: 'kursyblendera.pl', framework: 'jQuery', image: iconKursyBlendera, data: 'kursyblendera'},
  {name: 'Weather Forecast', framework: 'React', image: iconWeather, data: 'weatherforecast'},
  {name: 'Chat Module', framework: 'React // Firebase', image: iconChat, data: 'chatmodule'},
]

class GalleryItem extends Component {

  loadData = (e) => {
    switch(e.target.id) {
      case 'digitalarch':
        this.props.loadData(digitalarch)
        break
      case 'projectizer':
        this.props.loadData(projectizer)
        break
      case 'kursyblendera':
        this.props.loadData(kursyblendera)
        break
      default:
        return null
    }
  }

  render() {
    return (
      <div className='menuItem' onClick={this.loadData} id={this.props.data}>
        <p className='itemTitle' id={this.props.data}>{this.props.name}</p>
        <img className ='itemIcon' id={this.props.data} src={this.props.image} />
      </div>
    )
  }
}


const MenuItem = connect(null, mapDispatchToProps)(GalleryItem)

const Header = function() {
  return (
    <header>
      <ul>
        <Link className='link' to='/'>
          <li>HOME</li>
        </Link>
        <Link className='link' to='/about'>
          <li>ABOUT ME</li>
        </Link>
      </ul>
    </header>
  )
}

const NavMenu = function() {
  return (
    <nav>
      <div className='menuContainer'>
        <div className='menuBorder'>
          <div className="menuItemsContainer">
            {itemList.map((i)=>{
              return (
                <Link className='link' to={`/project/${i.name}`}>
                  <MenuItem
                    image={i.image}
                    name={i.name}
                    framework={i.framework}
                    key={uuidv4()}
                    data={i.data}
                  />
                </Link>

              )
            })}
          </div>
        </div>
      </div>          
    </nav>
  )
}

class index extends Component {

componentDidMount() {

}

constructor() {
  super();
  this.state = {
    headerTitle: "Kamil Golec",
    multiplier: 5,
  }
}

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <NavMenu />
          <main>
              <Route exact path='/' component={Home} />
              <Route path='/project' component={ProjectPage} />

          </main>
          <footer>
            <p onClick={this.props.loadData}>kgolec93</p>
          </footer>
        </div>
      </Router>

    )
  }
}

export const App = connect(null, mapDispatchToProps)(index)
export default App
