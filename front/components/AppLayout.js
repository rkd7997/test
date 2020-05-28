import React, { useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row, Layout, Breadcrumb } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import './Layout.scss'
import { LOG_OUT_REQUEST } from '../reducers/user';
import { CHART_DATA_UPDATE } from '../reducers/chart';
import { Accordion, AccordionItem } from 'react-sanfona';


import { slide as Menus } from 'react-burger-menu'


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

  function subscribe(io) {
    console.log('clickSubscribe');

    io.socket.get('/api/v1/price/subscribe?channel=EUR', function (resData) {
      console.log(resData);
    });

    io.socket.on('PriceAdd', function (msg) {
      // let d =new Date(Number(msg.time)).toISOString().substr(0,10); //day
      let d = Number(msg.time); // unix time
      dispatch({
        type: CHART_DATA_UPDATE,
        data: msg
      });

      // let r = dataSeries.update({
      //     time: d,
      //     open: Number(msg.open),
      //     close: Number(msg.close),
      //     high: Number(msg.high),
      //     low: Number(msg.low),
      // })
    });


  }


  React.useEffect(() => {
    var socketIOClient = require('socket.io-client');
    var sailsIOClient = require('sails.io.js');
    var io = sailsIOClient(socketIOClient);
    io.sails.url = 'http://211.62.107.211:1340';
    console.log('subscribing..');
    subscribe(io);

    return () => {
      console.log('unsubscirbin..', io.socket);
      io.socket.disconnect();
    }
  }, [])


  return (
    <>
      <div className="wrapper">
        {/* web_menu */}
        <div className="header">
          <div className="header_inner">
            <div className="header_menu">
              <Link href="/"><a className="top_logo"><h1>홈(FX 시티)</h1></a></Link>
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
            {me ?
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
        </div>
        <Menus right disableAutoFocus>
        <div className="user_info01">
            <Link href="/profile"><a className="name">주노강님</a></Link>
            <a onClick={onClickLogout} className="out">로그아웃</a>
          </div>
          <div className="user_info02">
            <Link href="/profile"><a><i className="ri-store-2-line"></i>강남점</a></Link>
            <Link href="/deposit"><a><i className="ri-money-dollar-circle-line"></i>100,000</a></Link>
          </div>

          <Accordion>
            <AccordionItem title={'거래하기'} className="main_menu" >  
            <a className="sub_menu" href="/exchange">거래하기</a>
              <a className="sub_menu" href="/results">거래결과</a>
            </AccordionItem>
            <AccordionItem title={'FX소개'} className="main_menu" >  
              <a className="sub_menu" href="">FX마진거래</a>
              <a className="sub_menu" href="">FX투자방법</a>
            </AccordionItem>
            <AccordionItem title={'입출금'} className="main_menu" >  
              <a className="sub_menu" href="/deposit">입금신청</a>
              <a className="sub_menu" href="/withdrawals">출금신청</a>
              <a className="sub_menu" href="/depositandwithdrawalshistory">입출금내역</a>
            </AccordionItem>
            <AccordionItem title={'공지사항'} className="main_menu" >  
              <a className="sub_menu" href="/announcements">공지사항</a>
              <a className="sub_menu" href="/news">소식</a>
            </AccordionItem>
            <AccordionItem title={'마이페이지'} className="main_menu" >  
              <a className="sub_menu" href="/profile">회원정보</a>
              <a className="sub_menu" href="/customerinquiry">1:1문의</a>
              <a className="sub_menu" href="/branchmove">지점이동신청</a>
              <a className="sub_menu" href="/transactionhistory">나의거래내역</a>
            </AccordionItem>
          </Accordion>
        </Menus>
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


