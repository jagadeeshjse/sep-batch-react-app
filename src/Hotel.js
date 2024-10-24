import { SingleData, Data } from './SingleData';
const name = 'innotel';
const number = 623573;
const img =
  'https://a0.muscache.com/im/pictures/miso/Hosting-10983311/original/4ee1c41b-c88c-406a-b304-353bfbd83bc4.jpeg?im_w=720';
// const img = '67328263';
const Hotel = () => {
  return (
    <div>
      <Data number={number} />
      <SingleData hotelName={name} number={number} image={img} />
      {/* <SingleData />
      <SingleData /> */}
    </div>
  );
};

export default Hotel;
