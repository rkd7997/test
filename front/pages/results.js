import React from 'react';
import { Button, List, Card, Icon, Input, DatePicker, Pagination } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const Results = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <h5 className="lnb_tit">거래하기</h5>
        <ul>
          <li className="active"><Link href='deposit'>입금신청</Link></li>
          <li ><Link href='withdrawals'>출금신청</Link></li>
          <li ><Link href='depositandwithdrawalshistory'>입출금내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">거래결과</h3>
        <div className="top_btn_div">
          <div className="btn_div_left">
            <select name="">
              <option value="1분거래">1분거래</option>
              <option value="2분거래">2분거래</option>
              <option value="5분거래">5분거래</option>
            </select>
            <DatePicker />
            {/* onChange={onChange} /> */}
            {/* <input type="button" value="캘린더"/> */}
            <select name="">
              <option value="하루">하루</option>
              <option value="00:00">00:00</option>
              <option value="01:00">01:00</option>
              <option value="02:00">02:00</option>
              <option value="03:00">03:00</option>
            </select>
          </div>
        </div>
        <table className="tb_02" width="100%" >
          <tr>
            <th width="60px">번호</th>
            <th width="60px">구분</th>
            <th width="200px">진행시간</th>
            <th width="200px">시가</th>
            <th width="120px">결과</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1분</td>
            <td>13시30분</td>
            <td>1.85778</td>
            <td className="red_txt">매수</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1분</td>
            <td>13시30분</td>
            <td>1.85778</td>
            <td className="blue_txt">매도</td>
          </tr>
        </table>
        <div className="btn_div">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default Results;
