import React, { Component } from 'react';
import './GalleryBoxes.css';
import GalleryBox from '../gallery-box/GalleryBox';
import GalleryBoxWithButtom from '../gallery-box/GalleryBoxWithButton';
class GalleryBoxes extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="container-content">
                        Leśna Chatka jest idealnym miejscem dla pragnących uciec od miejskiego <br/> zgiełku i odpocząć w otoczeniu dzikiej natury.
                    </p>
                </div>

                <div className="container-boxes">
                    <GalleryBox picture="bed"/>
                    <GalleryBox picture="plant"/>
                    <GalleryBox picture="salon"/>
                </div>
            </div>
        )
    }
}

export default GalleryBoxes;