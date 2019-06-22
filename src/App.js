import React, { Component } from 'react'
import './App.scss';
import ProjectPage from './components/ProjectPage';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import { connect } from 'react-redux'
import data from './data/projects.js' 

const uuidv4 = require('uuid/v4');

const mapStateToProps = state => {
  return {
    showSideMenu: state.showSideMenu
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: (data) => dispatch({type: 'LOAD_DATA', payload: data}),
    showMenu: () => dispatch({type: 'SHOW_SIDE_MENU'}),
    closeMenu: () => dispatch({type: 'CLOSE_SIDE_MENU'})
  }
}

const itemList = Object.keys(data)
.map(
  key => ({
    ...data[key],
    key: key
  })
)

class GalleryItem extends Component {

  loadData = (e) => {
    console.log(this.props.idVal)
    this.props.loadData(data[e.target.id])
  }

  render() {
    return (
      <div className='menuItem' onClick={this.loadData} id={this.props.idVal}>
        <p className='itemTitle' id={this.props.idVal}>{this.props.name}</p>
        <img className ='itemIcon' id={this.props.idVal} src={this.props.image} />
      </div>
    )
  }
}


const MenuItem = connect(null, mapDispatchToProps)(GalleryItem)

const Header = function(props) {
  return (
    <header>
      <ul>
        <Link className='link' to='/'>
          <li onClick={props.closeSideMenu}>HOME</li>
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
                <Link className='link' to={`/project`}>
                  <MenuItem
                    idVal={i.idVal}
                    image={i.icon}
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
  this.props.loadData(data.digitalarch);
  if (window.location.href.indexOf('project') > -1){
    this.props.showMenu()
  }
}

  render() {
    return (
      <Router>
        <div className='App'>
          <Header 
            closeSideMenu={this.props.closeMenu}
          />
          {this.props.showSideMenu ? <NavMenu /> : null}
          <main>
              <Route exact path='/' component={Home} />
              <Route path='/project' component={ProjectPage}  />

          </main>
          <footer>
            <p>kgolec93</p>
          </footer>
        </div>
      </Router>

    )
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(index)
export default App
