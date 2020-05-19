import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const AppLayout = ({ children }) => {
  return (
    <>
    <div style={{width:'100%', height:'100px', textAlign:'center'}}>
      <Link href="/"><a style={{marginRight:'15px'}}>홈(FX 시티)</a></Link>
      <Link href="/exchange"><a style={{marginRight:'15px'}}>거래</a></Link>
      <Link href="/results"><a style={{marginRight:'15px'}}>거래결과</a></Link>
      <Link href="/deposit"><a style={{marginRight:'15px'}}>입출금신청</a></Link>
      <Link href="/announcements"><a style={{marginRight:'15px'}}>공지사항</a></Link>
      <Link href="/signup"><a style={{marginRight:'15px'}}>회원가입</a></Link>
      <Link href="/profile"><a style={{marginRight:'15px'}}>마이페이지</a></Link>

    </div>
    <div>
    {children}
    </div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
