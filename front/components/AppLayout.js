import React, { useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row, Layout, Breadcrumb } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import './Layout.scss'
import { LOG_OUT_REQUEST } from '../reducers/user';


const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onClickLogout = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

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
            <Link href="/signup"><a>회원가입</a></Link>

          </div>
          {me?
          <div className="header_user">
            <Link href="/profile"><a><i className="ri-user-line"></i>{me.nickname}</a></Link>
            <Link href="/profile"><a><i className="ri-store-2-line"></i>{me.location}</a></Link>
            <Link href="/deposit"><a><i className="ri-money-dollar-circle-line"></i>{me.money}</a></Link>
            <a onClick={onClickLogout}><i className="ri-logout-circle-r-line"></i>로그아웃</a>
          </div>
          :
          <Link href="login"><a><i className="ri-logout-circle-r-line"></i>로그인</a></Link> 
            }
        </div>
      </div>

      <div className="contents">
        <div className="contents_inner">
          {children}
        </div>
      </div>

      <div className="footer">
        <div class="footer_inner">
          <div className="footer_left">
            <div className="fotter_logo">로고영역</div>
            <ul>
              <li>주식회사<span></span>대표 홍길동<span></span>우주 깐따삐야</li>
              <li>
              <Link href="/user-term"><a>서비스이용약관</a></Link><span></span>
              <Link href="/private-term"><a>개인정보처리방침</a></Link>
              </li>
            </ul>
          </div>
          <div className="footer_right">
            <Link href="/user-term"><a>고객센터</a></Link>
          </div>
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


