import React, { Component } from "react";
import "./GalleryPictures.scss";
import GalleryPicture from "../../components/gallery-picture/GalleryPicture";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";
import kitchen from "../../images/kitchen1.jpg";
import coffe from "../../images/coffe1.jpg";
import man from "../../images/man1.jpg";
import porch from "../../images/porch1.jpg";
import room from "../../images/room1.jpg";
import salon from "../../images/salon3.jpg";
import window from "../../images/window1.jpg";
import livingroom from "../../images/livingroom1.jpg";
import kayak from "../../images/kayak1.jpg";
import bathroom from "../../images/bathroom1.jpg";
import bathroom2 from "../../images/bathroom3.jpg";
import bedroom from "../../images/bedroom1.jpg";

class GalleryPictures extends Component {
  render() {
    return (
      <div>
        <div className="gallery-text">
          <p>Galeria</p>
          <HorizontalLine />
        </div>

        <div className="gallery-pictures-container">
          <GalleryPicture singlePicture={bedroom} />

          <GalleryPicture singlePicture={coffe} />

          <GalleryPicture singlePicture={kitchen} />

          <GalleryPicture singlePicture={porch} />

          <GalleryPicture singlePicture={room} />

          <GalleryPicture singlePicture={salon} />

          <GalleryPicture singlePicture={window} />

          <GalleryPicture singlePicture={livingroom} />

          <GalleryPicture singlePicture={man} />

          <GalleryPicture singlePicture={bathroom} />

          <GalleryPicture singlePicture={bathroom2}/>

          <GalleryPicture singlePicture={kayak}/>
        </div>
      </div>
    );
  }
}

export default GalleryPictures;
