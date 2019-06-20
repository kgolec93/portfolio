import React, { Component } from 'react'
import './App.scss';
import iconDigitalarch from './assets/img/digitalarch.png'
import iconKursyBlendera from './assets/img/blender.svg'
import iconWeather from './assets/img/weather-forecast.svg'
import iconChat from './assets/img/chat.svg'
import iconProjectizer from './assets/img/projectizer.svg'
import NavItem from './components/NavItem'

const uuidv4 = require('uuid/v4');

const itemList = [
  {name: 'digitalARCH.pl', framework: 'jQuery', image: iconDigitalarch},
  {name: 'Projectizer', framework: 'React + Redux // Firebase', image: iconProjectizer},
  {name: 'kursyblendera.pl', framework: 'jQuery', image: iconKursyBlendera},
  {name: 'Weather Forecast', framework: 'React', image: iconWeather},
  {name: 'Chat Module', framework: 'React // Firebase', image: iconChat},
]

const GalleryItem = function(props) {
    return (
        <div className='menuItem'>
          <p className='itemTitle'>{props.name}</p>
          <img className ='itemIcon' src={props.image} />
        </div>
    )
}

const Header = function() {
  return (
    <header>
      <ul>
        <li>HOME</li>
        <li>ABOUT ME</li>
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
                <GalleryItem 
                  image={i.image}
                  name={i.name}
                  framework={i.framework}
                  key={uuidv4()}
                />
              )
            })}
          </div>
        </div>
      </div>          
    </nav>
  )
}


const itemArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export class App extends Component {
constructor() {
  super();
  this.state = {
    headerTitle: "Kamil Golec",
    multiplier: 5,
  }
}

handleMouseEnter = (e) => {
  this.setState({multiplier: 30})
}

handleMouseleave = (e) => {
  this.setState({multiplier: 5})
}

  render() {
    return (
      <div className='App'>
        <Header />
        <NavMenu />
        <main>
          <div className="pageHeader">
            <div className='textContainer'>
              <h1>Projectizer</h1>
              <h5>React + Redux & Firebase</h5>
            </div>
          </div>
          <div className="pageContent">
            <div className="buttonContainer">
              <div className="button">website</div>
              <div className="button">github</div>
            </div>
            <div className="textContainer">
              <p>Project type: Academic project => Commercial Project</p>
              <p>Date started: May 2019</p>
              <p>Technologies: React + Redux // Firebase</p>
              <p>Libraries: Moment.js // React-Moment // React-Datepicker</p>
              <p>Description: </p>
            </div>

          </div>


            {/* <div className="elementContainer" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseleave} id='dupa'>
              {
                itemArray.map((item) => {
                  return (
                    <NavItem 
                      key={uuidv4()}
                      item={item}
                      icon={iconDigitalarch}
                      multiplier={this.state.multiplier}
                    />
                  )
                })
              }
            </div> */}

        </main>
        <footer>
          <p>kgolec93</p>
        </footer>
      </div>
    )
  }
}

export default App
