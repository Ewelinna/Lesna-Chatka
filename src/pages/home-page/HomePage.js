import MainPageHeader from "../../containers/main-page-header/MainPageHeader";
import GalleryBoxes from "../../containers/gallery-boxes/GalleryBoxes";
import TextField from "../../components/text-field/IconRow";
import React, { Component } from "react";
import MainPageContent from '../../containers/main-page-content/MainPageContent'

export default function HomePage() {
  return (
    <div>
      <MainPageHeader />
      <GalleryBoxes />
      <MainPageContent/>
    </div>
  );
}
