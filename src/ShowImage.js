import React from 'react';

const ShowImage = (props) => {
  const { id, thumbnailUrl, title, url } = props;
  return (
    <div className="data">
      <img width={200} height={200} src={url} alt={title} />
      <p>title: {title}</p>
      <button>click more</button>
    </div>
  );
};

export default ShowImage;
