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
      {/* web_menu */}
      <div className="header">
        <div className="header_inner">
          <div className="header_menu">
            <Link href="/"><h1>홈(FX 시티)</h1></Link>
            <div className="nav_btn">
              <Link href="/exchange"><a>거래하기</a></Link>
              <Link href="introduce"><a>FX소개</a></Link>
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
                      <Link href="introduce"><a>FX마진거래</a></Link>
                      <Link href="howtoinvestment"><a>FX투자방법</a></Link>
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
                      <Link href="/customerinquiry"><a>1:1문의</a></Link>
                      <Link href="/branchmove"><a>지점이동신청</a></Link>
                      <Link href="/transactionhistory"><a>나의거래내역</a></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* 서브메뉴영역 */}
          </div>
          
          </div>
          {me?
          <div className="header_user">
            <Link href="/profile"><a><i className="ri-user-line"></i>{me.nickname}</a></Link>
            <Link href="/profile"><a><i className="ri-store-2-line"></i>{me.location}</a></Link>
            <Link href="/deposit"><a><i className="ri-money-dollar-circle-line"></i>{me.money}</a></Link>
            <a onClick={onClickLogout}><i className="ri-logout-circle-r-line"></i>로그아웃</a>
          </div>
          :
          <div className="header_user">
          <Link href="login"><a><i class="ri-login-circle-line"></i>로그인</a></Link> 
          </div>
            }
        </div>
      </div>
      {/* web_menu */}
      
      {/* mobile_menu */}
      <div className="mobile_menu">
        <h1><Link href="/">FX로고영역</Link></h1>
        <input type="checkbox" className="toggler" />
        <div className="hamburger"><div></div></div>
        <div className="menu_bg"></div>
        <div className="menu">
            <div>
                <ul>
                    <li className="mb_user">
                      <span>
                      <Link href="/profile"><a><i className="ri-user-line"></i><span>준호강님</span></a></Link>
                      <Link href="/profile"><a><i className="ri-store-2-line"></i><span>삼성점</span></a></Link>
                      <Link href="/deposit"><a><i className="ri-money-dollar-circle-line"></i><span>100,000,000</span></a></Link>
                      </span>
                    </li>
                    <li>
                      거래하기
                      <ol className="mb_sub">
                        <li><Link href="/results"><a>거래결과</a></Link></li>
                      </ol>
                    </li>
                    <li>
                      FX소개
                      <ol className="mb_sub">
                        <li><Link href=""><a>FX마진거래</a></Link></li>
                        <li><Link href=""><a>FX투자방법</a></Link></li>
                      </ol>
                    </li>
                    <li>
                      입출금신청
                      <ol className="mb_sub">
                        <li><Link href="deposit"><a>입금신청</a></Link></li>
                        <li><Link href="withdrawals"><a>출금신청</a></Link></li>
                        <li><Link href="depositandwithdrawalshistory"><a>입출금내역</a></Link></li>
                      </ol>
                    </li>
                    <li>
                      공지사항
                      <ol className="mb_sub">
                        <li><Link href="announcements"><a>공지사항</a></Link></li>
                        <li><Link href="news"><a>소식</a></Link></li>
                      </ol>
                    </li>
                    <li>
                      마이페이지
                      <ol className="mb_sub">
                        <li><Link href="/profile"><a>회원정보</a></Link></li>
                        <li><Link href=""><a>1:1문의</a></Link></li>
                        <li><Link href=""><a>지점이동신청</a></Link></li>
                        <li><Link href=""><a>나의거래내역</a></Link></li>
                      </ol>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      {/* mobile_menu */}

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


