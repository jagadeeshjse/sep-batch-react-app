import React from 'react';
import HotelComp from './Hotel';
import './app.css';
import Counter from './Counter';
import DisplayData from './DisplayData';
import Form from './Form';
import ShowPhotos from './ShowPhotos';
import MealComponent from './MealComponent';

const App = () => {
  // const handleData = () => {
  //   console.log('data');
  // };

  // const add = (x, y) => {
  //   console.log(x + y);
  // };

  // const name = 'jhon wick';
  return (
    <div className="content">
      {/* <h1>heading data{name}</h1>
      {5 + 9}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, nam
        necessitatibus hic earum ratione esse velit, molestias quibusdam eveniet
        corrupti minima, ex sit accusantium. Labore pariatur, ratione ad animi
        iste consectetur explicabo laudantium cum dolorem debitis recusandae hic
        assumenda! Consequatur?
      </p>
      <button onClick={() => add(3, 4)}>submit</button>
      <HotelComp /> */}
      {/* <Counter /> */}
      {/* <DisplayData /> */}
      {/* <Form /> */}
      {/* <ShowPhotos /> */}
      <MealComponent />
    </div>
  );
};

export default App;
