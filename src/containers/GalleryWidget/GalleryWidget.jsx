import React from 'react';
import './GalleryWidget.css';

const GalleryWidget = ({ imageUrl }) => {
  return (
    <div className="image-gallery">
      <span className="image">
        <img src={imageUrl} alt={imageUrl} />
      </span>
    </div>
  );
};

export default GalleryWidget;
