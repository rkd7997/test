import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import './Layout.scss'

const AppLayout = ({ children }) => {
  return (
    <>
    <div className="header">
      <div className="header_inner">
        <div className="header_menu">
          <Link href="/"><a>홈(FX 시티)</a></Link>
          <Link href="/exchange"><a>거래</a></Link>
          <Link href="/results"><a>거래결과</a></Link>
          <Link href="/deposit"><a>입출금신청</a></Link>
          <Link href="/announcements"><a>공지사항</a></Link>
        </div>
        <div className="header_user">
          <Link href=""><a>홍길동님</a></Link>
          <Link href=""><a>삼성점</a></Link>
          <Link href=""><a>10,000</a></Link>
          <Link href=""><a>로그아웃</a></Link>
        </div>
      </div>
    </div>

    <div className="contents">
      <div className="contents_inner">
        {children}
      </div>
    </div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
