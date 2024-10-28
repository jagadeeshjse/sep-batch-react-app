import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const hadlePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      userName: user,
      userEmail: email,
      userPassword: password,
    };
    console.log('user', userObj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="content">
          <input
            type="text"
            placeholder="Enter user Name"
            value={user}
            onChange={handleUser}
          />
        </div>
        <div className="content">
          <input
            type="email"
            placeholder="Enter email here"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="content">
          <input
            type="password"
            placeholder="Enter password here"
            value={password}
            onChange={hadlePassword}
          />
        </div>
        <button>submit</button>
      </div>
    </form>
  );
};

export default Form;
