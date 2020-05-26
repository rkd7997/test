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
            <div className="nav_btn">
              <Link href="/exchange"><a>거래하기</a></Link>
              <Link href=""><a>FX소개</a></Link>
              <Link href="/deposit"><a>입출금신청</a></Link>
              <Link href="/announcements"><a>공지사항</a></Link>
              <Link href="/profile"><a>마이페이지</a></Link>
              {/* <Link href="/login"><a>로그인</a></Link>
              <Link href="/signup"><a>회원가입</a></Link> */}
              {/* 서브메뉴영역 */}
              <div class="dropdown-content">
                <div class="row">
                  <div className="row_div">
                    <div class="column">
                      <Link href="/results"><a>거래결과</a></Link>
                    </div>
                    <div class="column">
                      <Link href=""><a>FX마진거래</a></Link>
                      <Link href=""><a>FX투자방법</a></Link>
                    </div>
                    <div class="column">
                      <Link href="deposit"><a>입금신청</a></Link>
                      <Link href="withdrawals"><a>출금신청</a></Link>
                      <Link href="depositandwithdrawalshistory"><a>입출금내역</a></Link>
                    </div>
                    <div class="column">
                      <Link href="announcements"><a>공지사항</a></Link>
                      <Link href="news"><a>소식</a></Link>
                    </div>
                    <div class="column">
                      <Link href="/profile"><a>회원정보</a></Link>
                      <Link href=""><a>1:1문의</a></Link>
                      <Link href=""><a>지점이동신청</a></Link>
                      <Link href=""><a>나의거래내역</a></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* 서브메뉴영역 */}
          </div>
          
          </div>
          <div className="header_user">
            <Link href="/profile"><a><i className="ri-user-line"></i>홍길동님</a></Link>
            <Link href="/profile"><a><i className="ri-store-2-line"></i>삼성점</a></Link>
            <Link href="/deposit"><a><i className="ri-money-dollar-circle-line"></i>10,000</a></Link>
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


