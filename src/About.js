import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/');
  };
  return (
    <div>
      about
      <button onClick={goBackHome}>go to home page</button>
    </div>
  );
};

export default About;
