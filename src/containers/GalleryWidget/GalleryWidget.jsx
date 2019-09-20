import React from 'react';
import './GalleryWidget.scss';

const GalleryWidget = ({ imageUrl }) => {
  return (
    <div className="image-gallery">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default GalleryWidget;
