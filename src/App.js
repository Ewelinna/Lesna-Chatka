import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './header/menu-bar/MenuBar';
import GalleryBoxes from './boxes/gallery-boxes/GalleryBoxes';



class App extends Component {
  render() {
    return (
      <div>
       
        <MenuBar/>
        <GalleryBoxes/>
      </div>
    );
  }
}

export default App;
