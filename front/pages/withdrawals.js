import React from 'react';
import MobileWithdrawals from '../components/MobileWithdrawals'
import PCWithdrawals from '../components/PCWithdrawals'

import {
  isMobile
} from "react-device-detect";

const Withdrawals = () => {
  return (
     <>
     {isMobile
      ?
      <MobileWithdrawals/>
      :
      <PCWithdrawals/>}
      </>
  
    );
};

export default Withdrawals;