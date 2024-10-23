import React from 'react';
import HotelComp from './Hotel';
import './app.css';

const App = () => {
  //   const handleData = () => {
  //     console.log('data');
  //   };
  //   handleData();
  const name = 'jhon wick';
  return (
    <div>
      <h1>heading data{name}</h1>
      {5 + 9}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, nam
        necessitatibus hic earum ratione esse velit, molestias quibusdam eveniet
        corrupti minima, ex sit accusantium. Labore pariatur, ratione ad animi
        iste consectetur explicabo laudantium cum dolorem debitis recusandae hic
        assumenda! Consequatur?
      </p>
      <button>submit</button>
      <HotelComp />
    </div>
  );
};

export default App;
