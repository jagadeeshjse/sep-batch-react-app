import React from 'react';
import './css/singleData.css';
import PropTypes, { number } from 'prop-types';

export const SingleData = ({ hotelName, number, image }) => {
  // const { hotelName, number } = props;
  // console.log('props datay', props);
  return (
    <div className="imgData">
      <img src={image} alt="" className="img" />
      <p>{hotelName}</p>
      <p>price: {number}/-</p>
    </div>
  );
};

SingleData.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.number,
};

SingleData.defaultProps = {
  image:
    'https://a0.muscache.com/im/pictures/miso/Hosting-10983311/original/4ee1c41b-c88c-406a-b304-353bfbd83bc4.jpeg?im_w=720',
};
export const Data = (props) => {
  console.log('number', props);
  return (
    <div>
      <h1>data</h1>
    </div>
  );
};
