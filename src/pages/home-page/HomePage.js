import MainPageTopContent from "../../containers/main-page-top-content/MainPageTopContent";
import GalleryBoxes from "../../containers/gallery-boxes/GalleryBoxes";
import React, { Component } from "react";

export default function HomePage() {
  return (
    <div>
      <MainPageTopContent />
      <GalleryBoxes />
    </div>
  );
}
