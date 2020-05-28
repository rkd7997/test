import React, { useCallback, useState,} from 'react';
import PCSignUpForm from '../components/PCSignUpForm';
import MobileSignUpForm from '../components/MobileSignUpForm';
import {
  isMobile
} from "react-device-detect";



export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {


  return (
    <>
    {isMobile
    ?
    <MobileSignUpForm/>
    :
    <PCSignUpForm/>}
    </>
  );
};

export default Signup;
