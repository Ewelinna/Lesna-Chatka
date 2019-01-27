import React, { Component } from 'react';
import './GalleryBoxes.css';
import GalleryBox from '../../components/gallery-box/GalleryBox';

class GalleryBoxes extends Component {
    render() {
        return (
            <div className="text-boxes">
                <div className="short-text">
                    <p>
                        Leśna Chatka jest idealnym miejscem dla pragnących uciec od miejskiego <br/> zgiełku i odpocząć w otoczeniu dzikiej natury.
                    </p>
                </div>
                <div className="horizontal-line"></div>

                <div className="container-boxes">
                    <GalleryBox picture="kid"/>
                    <GalleryBox picture="fireplace"/>
                    <GalleryBox picture="livingroom"/>
                </div>
                
                <a className="gallery-link" href="#">Odkryj więcej zdjęć > </a>
              

                
            </div>
        )
    }
}

export default GalleryBoxes;