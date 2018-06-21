import React from 'react';
import './GalleryWidget.css';

class GalleryWidget extends React.Component {

  render() {
    return (
      <div className="image-gallery">

        <span className="image-title">
          <p>{this.props.title}</p>
        </span>

        <span className="image">
          <img src={this.props.imageUrl} alt={this.props.imageUrl} />
        </span>
      </div>
    );
  }
}

export default GalleryWidget;
