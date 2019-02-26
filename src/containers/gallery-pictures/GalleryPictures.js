import React, { Component } from "react";
import "./GalleryPictures.scss";
import GalleryPicture from "../../components/gallery-picture/GalleryPicture";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";
import kitchen from "../../images/kitchen.jpg";
import coffe from "../../images/coffe.jpg";
import man from "../../images/man.jpg";
import porch from "../../images/porch.jpg";
import room from "../../images/room.jpg";
import salon from "../../images/salon.jpg";
import window from "../../images/window.jpg";
import livingroom from "../../images/livingroom.jpg";
import kayak from "../../images/kayak.jpg";
import bathroom from "../../images/bathroom.jpg";
import bathroom2 from "../../images/bathroom2.jpg";
import bedroom from "../../images/bedroom.jpg";

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