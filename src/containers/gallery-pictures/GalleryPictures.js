import React, { Component } from "react";
import "./GalleryPictures.scss";
import GalleryPicture from "../../components/gallery-picture/GalleryPicture";
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

class GalleryPictures extends Component {
  render() {
    return (
      <div className="gallery-pictures-container">
        <GalleryPicture singlePicture={kitchen} />

        <GalleryPicture singlePicture={coffe} />

        <GalleryPicture singlePicture={man} />

        <GalleryPicture singlePicture={porch} />

        <GalleryPicture singlePicture={room} />

        <GalleryPicture singlePicture={salon} />

        <GalleryPicture singlePicture={window} />

        <GalleryPicture singlePicture={livingroom} />

        <GalleryPicture singlePicture={kayak} />

        <GalleryPicture singlePicture={bathroom} />
      </div>
    );
  }
}

export default GalleryPictures;
