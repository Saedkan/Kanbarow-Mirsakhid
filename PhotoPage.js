import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoDetail from '../components/PhotoDetails';
function PhotoPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  useEffect(() => {
    const photos = [
        { id: 1, title: 'Sunset', url: '/img/sunset.png', description: 'Beautiful sunset.' },
        { id: 2, title: 'Forest', url: '/img/forest.jpg', description: 'Serene forest.' },
        { id: 3, title: 'Desert', url: '/img/desert.jpg', description: 'Big desert' },
        { id: 4, title: 'Rainforest', url: '/img/rainforest.jpg', description: 'Beautiful rainforest' },
        { id: 5, title: 'Group of people', url: '/img/group of people.jpg', description: 'There are group of people' },
    ];
    setPhoto(photos.find(p => p.id === parseInt(id)));
  }, [id]);
  return (
    <div>
      <PhotoDetail photo={photo} />
    </div>
  );
}
export default PhotoPage;
