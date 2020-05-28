import React, {useEffect} from 'react';
import { Button, List, Card, Icon, Input, DatePicker, Pagination} from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';
import {useDispatch, useSelector} from "react-redux";
import { LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST } from "../reducers/investments";
import DepositsAndWithdrawsHistoryRow from "../components/DepositsAndWithdrawsHistoryRow";

const DepositAndWithdrawalsHistory = () => {
  const { userDepositsAndWithdrawsHistory } = useSelector(state => state.investments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST,
    });
  }, []);

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
              {/* <th width="120px">번호</th> */}
              <th width="120px">요청일시</th>
              <th width="80px">종류</th>
              <th width="120px">금액</th>
              <th width="120px">처리내용</th>
            </tr>
          {userDepositsAndWithdrawsHistory.map(c => {
            return (
              <DepositsAndWithdrawsHistoryRow history={c} />
            );
          })}
          </table>
      </div>
    </div>
  );
};

export default DepositAndWithdrawalsHistory;
