import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input,Modal } from 'antd';
import Link from 'next/link';
import MobileApply from './Apply'
import MobileApplyHistory from './ApplyHistory'




const PCBranchMove = () => {
  return (
    <div className="sub_div">

    <div className="sub_menu">
      <h5 className="lnb_tit">마이페이지</h5>
      <ul>
        <li ><Link href='profile'>회원정보</Link></li>
        <li ><Link href='customerinquiry'>1:1문의</Link></li>
        <li className="active"><Link href='branchmove'>지점이동신청</Link></li>
        <li ><Link href='transactionhistory'>나의거래내역</Link></li>
      </ul>
    </div>
    <div className="sub_page">
    <MobileApply/>
    <MobileApplyHistory/>
    </div>
    </div>
  );
};

export default PCBranchMove;
