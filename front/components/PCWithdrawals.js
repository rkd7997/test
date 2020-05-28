import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input,Modal } from 'antd';
import Link from 'next/link';



const PCWithdrawals = () => {
  return (
    <div className="sub_div">
    <div className="sub_menu">
    <h5 className="lnb_tit">입출금신청</h5>
      <ul>
        <li><Link href='deposit'>입금신청</Link></li>
        <li className="active"><Link href='withdrawals'>출금신청</Link></li>
        <li ><Link href='depositandwithdrawalshistory'>입출금내역</Link></li>
      </ul>
    </div>
    <div className="sub_page">
      <h3 className="tit_01">출금신청</h3>
        <div className="page_div">
          <h4 className="tit_02">1. 출금 금액 입력</h4>
          <table className="tb_01" width="100%" >
              <tr>
                <th>보유금액</th>
                <td>100,000,000 원</td>
              </tr>
              <tr>
                <th>신청금액</th>
                <td>
                  <p>
                    <Input name="user-num" type="number" required placeholder="0" />
                    <em>원</em>
                  </p>
                  <span className="deposit_info">* 최소 10,000원부터 입금 가능합니다.</span>
                  <p className="deposit_btn">
                    <Button type="primary" ghost size={'small'} value="10,000" className="won_btn" >10,000</Button>
                    <Button type="primary" ghost size={'small'} value="50,000" className="won_btn" >50,000</Button>
                    <Button type="primary" ghost size={'small'} value="100,000" className="won_btn" >100,000</Button>
                    <Button type="primary" ghost size={'small'} value="500,000" className="won_btn" >500,000</Button>
                    <Button type="primary" ghost size={'small'} value="정정" className="won_btn" >정정</Button>
                  </p>
                </td>
              </tr>
              <tr>
                <th>출금후 잔액</th>
                <td>500,000원</td>
              </tr>
            </table>
        </div>
        <div className="page_div">
          <h4 className="tit_02">2. 계좌 정보 확인</h4>
          <table className="tb_01" width="100%" >
              <tr>
                <th>계좌번호</th>
                <td>국민은행 0000000000000</td>
              </tr>
              <tr>
                <th>예금주</th>
                <td>홍길동</td>
              </tr>
            </table>
        </div>
        <div className="info_txt">
          <p>[입금 시 주의 사항] 반드시 읽어주세요!</p>
          <ul>
            <li>입금 전 반드시 입금하실 계좌번호 및 입금자명을 확인하시기 바랍니다.</li>
          </ul>
        </div>
        <div className="btn_div">
          <Button type="primary" size={'large'} value="출금신청" >출금신청</Button>
        </div>
    </div>
  </div>
  );
};

export default PCWithdrawals;
