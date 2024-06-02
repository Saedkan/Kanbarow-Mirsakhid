import React, { useState, useEffect } from 'react';
import PhotoCard from '../components/PhotoCard';
function Gallery() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        setPhotos([
            { id: 1, title: 'Sunset', url: '/img/sunset.png', description: 'Beautiful sunset.' },
            { id: 2, title: 'Forest', url: '/img/forest.jpg', description: 'Serene forest.' },
            { id: 3, title: 'Desert', url: '/img/desert.jpg', description: 'Big desert' },
            { id: 4, title: 'Rainforest', url: '/img/rainforest.jpg', description: 'Beautiful rainforest' },
            { id: 5, title: 'Group of people', url: '/img/group of people.jpg', description: 'There are group of people' },
        ]);
    }, []);
    return (
        <div>
            <h1>Gallery</h1>
            <div className="photo-grid">
                {photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    )
}
export default Gallery;
