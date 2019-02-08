import React from 'react';
import './GalleryWidget.css';

const GalleryWidget = ({ imageUrl, title }) => {
  return (
    <div className="image-gallery">
      <span className="image-title">
        <p>{title}</p>
      </span>

      <span className="image">
        <img src={imageUrl} alt={imageUrl} />
      </span>
    </div>
  );
};

export default GalleryWidget;
