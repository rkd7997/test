import React from 'react';
import { Button, List, Card, Icon, Input } from 'antd';
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
        <table className="tb_01" width="100%" >
            <tr>
              <th><label htmlFor="user-name">이름</label></th>
              <td><Input name="user-name" required disabled /></td>
              <th><label htmlFor="user-phon">휴대폰번호</label></th>
              <td><Input name="user-phon" type="number" required disabled /><input  type="button" value="인증"/></td>
            </tr>
            <tr>
              <th><label htmlFor="nickname-phon">닉네임</label></th>
              <td><Input name="user-nickname" required disabled /></td>
              <th><label htmlFor="user-store">소속지점</label></th>
              <td><Input name="user-store" required disabled /></td>
            </tr>
            <tr>
              <th><label htmlFor="user-password">비밀번호</label></th>
              <td>
                <Input name="user-password" type="password" required placeholder="비밀번호 입력" />
                <p className="signup_info">영문,특수문자,숫자를 조합하여 8~20자리의 패스워드를 입력해주세요</p>
              </td>
              <th><label htmlFor="user-password-check">비밀번호체크</label></th>
              <td>
                <Input name="user-password-check" type="password" required placeholder="비밀번호 확인" />
                {/* {passwordError && <p className="signup_info">비밀번호가 일치하지 않습니다.</p>} */}
              </td>
            </tr>
            <tr>
              <th><label htmlFor="user-bank-name">예금주</label></th>
              <td><Input name="user-bank-name" required disabled /></td>
              <th><label htmlFor="user-num">주민번호 앞자리</label></th>
              <td><Input name="user-num" required disabled /></td>
            </tr>
            <tr>
              <th><label htmlFor="user-bank">은행</label></th>
              <td>
                <select name="user-bank">
                    <option value="">-- 선택 --</option>
                    <option value="국민은행">국민은행</option>
                    <option value="농협은행">농협은행</option>
                    <option value="신한은행">신한은행</option>
                </select>
              </td>
              <th><label htmlFor="user-bank-num">계좌번호</label></th>
              <td><Input name="user-bank-num" type="number" required placeholder="계좌번호 입력" /><input type="button" value="확인"/></td>
            </tr>
            <tr>
              <th><label htmlFor="user-mail">이메일</label></th>
              <td colSpan="3">
                <Input name="user-mail"  type="email" required /><em>@</em><Input name="user-mail"  type="email" className="ip_email" required />
                <select name="user-mail">
                    <option value="">-- 직접입력 --</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                </select>
              </td>
            </tr>
          </table>
          <div className="btn_div">
            <input type="button" value="수정하기" className="ok_btn" />
            <input type="button" value="취소" className="cancel_btn" />
          </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
