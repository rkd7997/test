import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input,Modal } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';
import PropTypes from 'prop-types';



const MobileDeposit = () => {


  return (
    <>
     <div className="sub_div">
      <div className="sub_menu">
        <h5 className="lnb_tit">입출금신청</h5>
        <ul>
          <li className="active"><Link href='deposit'>입금신청</Link></li>
          <li ><Link href='withdrawals'>출금신청</Link></li>
          <li ><Link href='depositandwithdrawalshistory'>입출금내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">입금신청</h3>
        <table className="tb_01" width="100%" >
            <tr>
              <th>입금계좌</th>
              <td>1. 국민은행 920301-01-706349 주식회사에프엑스시티플래티넘</td>
            </tr>
            <tr>
              <th>예금주</th>
              <td>
                <p>홍길동</p>
                <span className="deposit_info">가입시 등록된 예금주 명의로만 입금 가능하며 변경 시 필히 고객센터에 문의 바랍니다.</span>
              </td>
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
            <Button type="primary" size={'large'} value="입금신청" >입금신청</Button>
          </div>
      </div>
    </div>
  
  </>
  );
};

export default MobileDeposit;
