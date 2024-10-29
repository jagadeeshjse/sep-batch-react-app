import React, { useEffect, useState } from 'react';
import ShowImage from './ShowImage';
import './css/showPhotos.css';

const URL = 'https://jsonplaceholder.typicode.com/photos';

const ShowPhotos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log('photos data', photos);
  return (
    <div className="container">
      {photos.map((eachItem) => {
        const { id, thumbnailUrl, title, url } = eachItem;
        return (
          <ShowImage
            id={id}
            thumbnailUrl={thumbnailUrl}
            title={title}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default ShowPhotos;
