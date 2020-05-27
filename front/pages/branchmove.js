import React from 'react';
import { Button, List, Card, Icon, Input, Pagination } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const Branchmove = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <h5 className="lnb_tit">마이페이지</h5>
        <ul>
          <li ><Link href='profile'>회원정보</Link></li>
          <li ><Link href='customerinquiry'>1:1문의</Link></li>
          <li className="active"><Link href='branchmove'>지점이동신청</Link></li>
          <li ><Link href='transactionhistory'>나의거래내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">지점이동신청</h3>
        <div className="page_div">
          <h4 className="con_txt01">지점이동신청</h4>
          <h5 className="con_txt01">이동을 원하시는 지점명을 선택해주십시오.<br />신청 후 <span className="point">7일간 미거래 시</span> 승인처리됩니다.</h5>
          <table className="tb_01" width="100%" >
            <tr>
              <th><label htmlFor="user-store">소속지점</label></th>
              <td><Input name="user-store" required disabled className="wd_100" /></td>
              <th><label htmlFor="user-store-add">이동지점</label></th>
              <td>
                <select name="user-store-addk" className="wd_100">
                  <option value="">-- 선택 --</option>
                  <option value="삼성점">삼성점</option>
                  <option value="잠실점">잠실점</option>
                  <option value="종로점">종로점</option>
                </select>
              </td>
            </tr>
          </table>
          <div className="btn_div">
            <Button type="primary" size={'large'} > 신청하기 </Button>
          </div>
        </div>
        <div>
          <h4 className="con_txt01">신청내역</h4>
          <table className="tb_02" width="100%" >
            <tr>
              <th>번호</th>
              <th>소속지점</th>
              <th>이동지점</th>
              <th>신청일자</th>
              <th>상태</th>
            </tr>
            <tr>
              <td>1</td>
              <td>강남</td>
              <td>안드로메다</td>
              <td>2020-05-27</td>
              <td>승인</td>
            </tr>
            <tr>
              <td>1</td>
              <td>강남</td>
              <td>안드로메다</td>
              <td>2020-05-27</td>
              <td>대기</td>
            </tr>
          </table>
          <div className="btn_div">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branchmove;
