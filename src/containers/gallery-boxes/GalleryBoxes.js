import React, { Component } from 'react';
import './GalleryBoxes.css';
import GalleryBox from '../../components/gallery-box/GalleryBox';
import HorizontalLine from '../../components/horizontal-line/HorizontalLine'

class GalleryBoxes extends Component {
    render() {
        return (
            <div className="text-boxes">
                <div className="short-text">
                    <p>
                        Leśna Chatka jest idealnym miejscem dla tych, którzy pragną uciec od miejskiego <br/> zgiełku i odpocząć w otoczeniu natury.
                    </p>
                </div>
                <HorizontalLine />

                <div className="container-boxes">
                    <GalleryBox picture="fireplace"/>
                    <GalleryBox picture="lamp"/>
                    <GalleryBox picture="mirror"/>
                </div>
                
                <a className="gallery-link" href="#">Odkryj więcej zdjęć > </a>
              

                
            </div>
        )
    }
}

export default GalleryBoxes;