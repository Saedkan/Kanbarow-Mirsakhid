import React, { Component } from 'react';
class PhotoDetail extends Component {
  render() {
    const { photo } = this.props;
    if (!photo) {
      return <p>Loading...</p>;
    }
    return (
      <div className="photo-detail">
        <img src={photo.url} alt={photo.title} />
        <h2>{photo.title}</h2>
        <p>{photo.description}</p>
      </div>
    );
  }
}
export default PhotoDetail;
