import React from 'react';
import { Link } from 'react-router-dom';
function PhotoCard({ photo }) {
    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
            <Link to={`/photo/${photo.id}`}>View Details</Link>
        </div>
    )
}
export default PhotoCard;