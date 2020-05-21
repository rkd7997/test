import React from 'react';
import { Button, List, Card, Icon, Input } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const DepositAndWithdrawalsHistory = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <ul>
          <li><Link href='deposit'>입금신청</Link></li>
          <li ><Link href='withdrawals'>출금신청</Link></li>
          <li className="active"><Link href='depositandwithdrawalshistory'>입출금내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">입출금내역</h3>
        <table className="tb_01" width="100%" >
            <tr>
              <th>입금계좌</th>
              <td>1. 국민은행 920301-01-706349 주식회사에프엑스시티플래티넘</td>
            </tr>
            <tr>
              <th>예금주</th>
              <td>
                <p>홍길동</p>
                <span>가입시 등록된 예금주 명의로만 입금 가능하며 변경 시 필히 고객센터에 문의 바랍니다.</span>
              </td>
            </tr>
            <tr>
              <th>신청금액</th>
              <td>
                <p>
                  <Input name="user-num" type="number" required placeholder="0" />
                  <span>원</span>
                </p>
                <span>* 최소 10,000원부터 입금 가능합니다.</span>
                <p>
                  <input type="button" value="10,000"/>
                  <input type="button" value="50,000"/>
                  <input type="button" value="100,000"/>
                  <input type="button" value="500,000"/>
                  <input type="button" value="정정"/>
                </p>
              </td>
            </tr>
            <tr>
              <th>신청후 금액</th>
              <td>500,000원</td>
            </tr>
          </table>
          <div className="info_txt">
            <p>[입금 시 주의 사항] 반드시 읽어주세요!</p>
            <ul>
              <li>입금 전 반드시 입금하실 계좌번호 및 입금자명을 확인하시기 바랍니다.</li>
            </ul>
          </div>
          <div className="btn_div">
            <input type="button" value="입금신청"/>
          </div>
      </div>
    </div>
  );
};

export default DepositAndWithdrawalsHistory;
