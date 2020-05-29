import React from 'react';
import { Button, List, Card, Icon, Input, Pagination } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const CustomerInquiry = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <h5 className="lnb_tit">마이페이지</h5>
        <ul>
          <li ><Link href='profile'>회원정보</Link></li>
          <li className="active"><Link href='customerinquiry'>1:1문의</Link></li>
          <li ><Link href='branchmove'>지점이동신청</Link></li>
          <li ><Link href='transactionhistory'>나의거래내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">1:1문의</h3>
        <div className="top_btn_div">
          <div className="btn_div_left">
          </div>
          <div className="btn_div_right">
            <Button type="primary" size={'small'} value="문의하기" className="won_btn deposit" >문의하기</Button>
          </div>
        </div>
        <table className="tb_02" width="100%" >
          <tr>
            <th width="60px">유형</th>
            <th>제목</th>
            <th width="95px">등록일</th>
            <th width="85px">상태</th>
          </tr>
          <tr>
            <td>입출금</td>
            <td align="left">안드로메다</td>
            <td>2020-05-27</td>
            <td>답변완료</td>
          </tr>
          <tr>
            <td>로그인</td>
            <td align="left">안드로메다</td>
            <td>2020-05-27</td>
            <td>답변대기중</td>
          </tr>
          <tr>
            <td colSpan="4">문의내역이 없습니다.</td>
          </tr>
        </table>
        <div className="btn_div">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default CustomerInquiry;
