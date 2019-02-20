import React, { Component } from 'react';

import "./GalleryPicture.scss";
import Reveal from 'react-reveal/Reveal';


class GalleryPicture extends Component {
    render() {
        return (
            <div className="square-images">
            <Reveal>
                <img src={this.props.singlePicture} alt={"bedroom"}/>
            </Reveal>
            </div>
        );
    }
}

export default GalleryPicture;