import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const UserTerm = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <h5 className="lnb_tit">이용약관</h5>
        <ul>
          <li className="active"><Link href="/user-term">이용약관</Link></li>
          <li><Link href="/private-term">개인정보처리방침</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">이용약관</h3>
        <div className="page_div">
          <p>약관내용</p>
        </div>
        <div className="page_div">
          <h4 className="con_txt01">제1장 총칙</h4>
          <ul>
            <li>1. 약관내용</li>
            <li>2. 약관내용</li>
            <li>3. 약관내용</li>
            <li>4. 약관내용</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserTerm;
