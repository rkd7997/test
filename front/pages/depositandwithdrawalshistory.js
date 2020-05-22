import React from 'react';
import { Button, List, Card, Icon, Input, DatePicker} from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const DepositAndWithdrawalsHistory = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
      <h5 className="lnb_tit">입출금신청</h5>
        <ul>
          <li><Link href='deposit'>입금신청</Link></li>
          <li ><Link href='withdrawals'>출금신청</Link></li>
          <li className="active"><Link href='depositandwithdrawalshistory'>입출금내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">입출금내역</h3>
        <div className="top_btn_div">
          <div className="btn_div_left">
          <DatePicker />
          {/* onChange={onChange} /> */}
            {/* <input type="button" value="캘린더"/> */}
          </div>
          <div className="btn_div_right">
            <Button size={'small'} value="전체" className="won_btn all" >전체</Button>
            <Button type="primary" ghost size={'small'} value="입금" className="won_btn deposit" >입금</Button>
            <Button type="danger" ghost size={'small'} value="출금" className="won_btn withdrawals" >출금</Button>
          </div>
        </div>
        <table className="tb_02" width="100%" >
            <tr>
              <th width="120px">번호</th>
              <th>요청일시</th>
              <th width="200px">종류</th>
              <th width="200px">금액</th>
              <th width="120px">처리내용</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2020-05-15 11:04:51.297</td>
              <td>입금</td>
              <td>10,000</td>
              <td>완료</td>
            </tr>
          </table>
      </div>
    </div>
  );
};

export default DepositAndWithdrawalsHistory;
