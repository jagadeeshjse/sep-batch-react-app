import React, { useState } from 'react';

const DisplayData = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={handleClick}>{display ? 'hide' : 'show'}</button>
      {display ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          inventore. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Doloremque cupiditate reprehenderit pariatur consequatur minima
          labore. Eaque quae fugit rem accusantium?
        </p>
      ) : (
        <h3>the data is hidden!</h3>
      )}
    </div>
  );
};

export default DisplayData;
