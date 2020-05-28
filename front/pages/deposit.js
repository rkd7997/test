import React from 'react';
import MobileDeposit from '../components/MobileDeposit'
import PCDeposit from '../components/PCDeposit'

import Link from 'next/link';
import {
  isMobile
} from "react-device-detect";

const Deposit = () => {
  return (
     <>
     {isMobile
      ?
      <MobileDeposit/>
      :
      <PCDeposit/>}
      </>
  
    );
};

export default Deposit;
