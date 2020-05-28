import React from 'react';
import { Button, List, Card, Icon, Input, Pagination } from 'antd';
import Link from 'next/link';
import {
  isMobile
} from "react-device-detect";
import PCBranchMove from '../components/BranchMove/PC'
import MobileBranchMove from '../components/BranchMove/Mobile'


const Branchmove = () => {
  return (
    <>
    {isMobile
     ?
     <MobileBranchMove/>
     :
     <PCBranchMove/>}
     </>

  );
};

export default Branchmove;
