import React, { Component } from 'react'
import './App.css';

const itemList = [
  {name: 'digitalARCH.pl', framework: 'jQuery'},
  {name: 'kursyblendera.pl', framework: 'jQuery'},
  {name: 'Weather Forecast', framework: 'React'},
  {name: 'Chat Module', framework: 'React // Firebase'},
  {name: 'Projectizer', framework: 'React + Redux // Firebase'},
  // {name: 'Money Saver', framework: 'React + Redux // Firebase'},
]

class GalleryItem extends Component {
  render() {
    return (
        <div className='galleryItem'>
          <p>{this.props.name}</p>
          <p>{this.props.framework}</p>
        </div>
    )
  }
}

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <p>PORTFOLIO</p>
        <main>
          <div className='galleryContainer'>
            <div>
              Arrow left
            </div>
              <div className='galleryBorder'>
                <div className="galleryItemsContainer">
                  {itemList.map((i)=>{
                    return (
                      <GalleryItem 
                        name={i.name}
                        framework={i.framework}
                      />
                    )
                  })}
                </div>
              </div>

            <div>
              Arrow Right
            </div>
          </div>

        </main>
      </div>
    )
  }
}

export default App
