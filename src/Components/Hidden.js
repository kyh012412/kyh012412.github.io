import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Hidden = () => {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state?.secret) {
      console.log('문제발견 루트로이동');
      console.log(location ? true : false);
      console.log(location.state ? true : false);
      if (location.state) {
        console.log(location.state);
      }
      console.log(location.state?.secret ? true : false);

      // return navigate('/');
    } else {
      console.log('정상적인 진입');
    }
    return () => {};
  });

  return <div></div>;
};

export default Hidden;
