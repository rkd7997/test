import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row, Layout, Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import './Layout.scss'

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  return (
   <>
    <div className="wrapper">
      <div className="header">
        <div className="header_inner">
          <div className="header_menu">
            <Link href="/"><h1>홈(FX 시티)</h1></Link>
            <Link href="/exchange"><a>거래</a></Link>
            <Link href="/results"><a>거래결과</a></Link>
            <Link href="/deposit"><a>입출금신청</a></Link>
            <Link href="/announcements"><a>공지사항</a></Link>
            <Link href="/login"><a>로그인</a></Link>
            <Link href="/signup"><a>회원가입</a></Link>
            {/* <Link href="/profile"><a>마이페에에이지</a></Link> */}

          </div>
          <div className="header_user">
            <Link href="/profile"><a><i className="ri-user-line"></i>홍길동님</a></Link>
            <Link href="/profile"><a><i className="ri-store-2-line"></i>삼성점</a></Link>
            <Link href=""><a><i className="ri-money-dollar-circle-line"></i>10,000</a></Link>
            <Link href=""><a><i className="ri-logout-circle-r-line"></i>로그아웃</a></Link>
          </div>
        </div>
      </div>

      <div className="contents">
        <div className="contents_inner">
          {children}
        </div>
      </div>

      <div className="footer">
        <div class="footer_inner">
        <Link href="/user-term"><a>서비스이용약관</a></Link>
        <Link href="/private-term"><a>개인정보처리방침</a></Link>
        </div>
      </div>
    </div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};


export default AppLayout;


