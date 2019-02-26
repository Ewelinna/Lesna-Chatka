import React, { Component } from "react";
import "./GalleryBoxes.scss";
import GalleryPicture from "../../components/gallery-picture/GalleryPicture";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";
import fireplace from "../../images/fireplace.jpg";
import lamp from "../../images/lamp.jpg";
import mirror from "../../images/mirror.jpeg";
import { Link } from "react-router-dom";

class GalleryBoxes extends Component {
  render() {
    return (
      <div className="text-boxes">
        <div className="short-text">
          <p>
            Leśna Chatka jest idealnym miejscem dla tych, którzy pragną uciec od
            miejskiego <br /> zgiełku i odpocząć w otoczeniu natury.
          </p>
        </div>
        <HorizontalLine />

        <div className="container-boxes">
          <GalleryPicture singlePicture={fireplace} />
          <GalleryPicture singlePicture={lamp} />
          <GalleryPicture singlePicture={mirror} />
        </div>
        <Link to="/galeria/" className="gallery-link">
          Odkryj więcej zdjęć >
        </Link>
      </div>
    );
  }
}

export default GalleryBoxes;
