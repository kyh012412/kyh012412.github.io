import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Passageway = () => {
  const inputRef = useRef();
  const secret = useSelector((state) => state.secret);
  const navigate = useNavigate();

  // const handleChange = () => {};
  const Check = () => {
    console.log('check');

    if (secret == inputRef.current.value) {
      console.log(true);
      console.log('secret', secret);

      navigate('/hidden', { state: { secret } });
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="입력"
        onChange={() => {
          Check();
        }}
      />
    </div>
  );
};

export default Passageway;
