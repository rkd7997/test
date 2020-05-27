import React from 'react';
import { Button, List, Card, Icon, Input, DatePicker, Pagination } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const TransactionHistory = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
      <h5 className="lnb_tit">마이페이지</h5>
        <ul>
          <li ><Link href='profile'>회원정보</Link></li>
          <li ><Link href='customerinquiry'>1:1문의</Link></li>
          <li ><Link href='branchmove'>지점이동신청</Link></li>
          <li className="active"><Link href='transactionhistory'>나의거래내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">나의거래내역</h3>
        <div className="top_btn_div">
          <div className="btn_div_left">
          <DatePicker />
          {/* onChange={onChange} /> */}
            {/* <input type="button" value="캘린더"/> */}
          </div>
          <div className="btn_div_right">
            <Button size={'small'} value="전체" className="won_btn all" >전체</Button>
            <Button type="primary" ghost size={'small'} value="실현" className="won_btn deposit" >실현</Button>
            <Button type="danger" ghost size={'small'} value="실격" className="won_btn withdrawals" >실격</Button>
          </div>
        </div>
        <table className="tb_02" width="100%" >
            <tr>
              <th width="80px">번호</th>
              <th>대여일시</th>
              <th>구분</th>
              <th>실현</th>
              <th>실격</th>
              <th>수량</th>
              <th>보증금</th>
              <th>보유보증금</th>
              <th>결과</th>
              <th>약정서</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2020-05-15 11:04:51.297</td>
              <td>1분<span className="red_txt">매수</span></td>
              <td>10&nbsp;<span className="red_txt">▲</span></td>
              <td>10&nbsp;<span className="blue_txt">▼</span></td>
              <td>2&nbsp;lot</td>
              <td>10,000</td>
              <td>10,000</td>
              <td className="red_txt">실격</td>
              <td><Button value="보기" size={'small'} type="primary" >보기</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>2020-05-15 11:04:51.297</td>
              <td>1분<span className="blue_txt">매도</span></td>
              <td>10&nbsp;<span className="red_txt">▲</span></td>
              <td>10&nbsp;<span className="blue_txt">▼</span></td>
              <td>2&nbsp;lot</td>
              <td>10,000</td>
              <td>10,000</td>
              <td className="blue_txt">실현</td>
              <td><Button value="보기" size={'small'} type="primary" >보기</Button></td>
            </tr>
          </table>
          <div className="btn_div">
            <Pagination defaultCurrent={1} total={50} />
          </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
