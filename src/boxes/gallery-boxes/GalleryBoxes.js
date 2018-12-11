import React, { Component } from 'react';
import './GalleryBoxes.css';
import GalleryBox from '../gallery-box/GalleryBox';

class GalleryBoxes extends Component {
    render() {
        return (
            <div>
                <div className="container-content">
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

                
            </div>
        )
    }
}

export default GalleryBoxes;