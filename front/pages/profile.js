import React, { useCallback, useState,} from 'react';
import PCProfile from '../components/PCProfile';
import MobileProfile from '../components/MobileProfile';
import {
  isMobile
} from "react-device-detect";



const Profile = () => {


  return (
    <>
    {isMobile
    ?
    <MobileProfile/>
    :
    <PCProfile/>}
    </>
  );
};

export default Profile;
