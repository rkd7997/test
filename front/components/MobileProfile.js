import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import Link from 'next/link';



const MobileProfile = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <h5 className="lnb_tit">마이페이지</h5>
        <ul>
          <li className="active"><Link href='profile'>회원정보</Link></li>
          <li ><Link href='customerinquiry'>1:1문의</Link></li>
          <li ><Link href='branchmove'>지점이동신청</Link></li>
          <li ><Link href='transactionhistory'>나의거래내역</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">회원정보</h3>
        <ul className="mobile_li_tb">
          <li>
            <label htmlFor="user-name">이름</label>
            <Input name="user-name" required disabled className="wd_100" />
          </li>
          <li>
            <label htmlFor="user-phon">휴대폰번호</label>
            <div>
              <Input name="user-phon" type="number" required disabled className="wd_80" />
              <Button value="확인" type="primary" >인증</Button>
            </div>
          </li>
          <li>
            <label htmlFor="nickname-phon">닉네임</label>
            <Input name="user-nickname" required disabled className="wd_100" />
          </li>
          <li>
            <label htmlFor="user-store">소속지점</label>
            <Input name="user-store" required disabled className="wd_100" />
          </li>
          <li>
            <label htmlFor="user-password">비밀번호</label>
            <Input name="user-password" type="password" required placeholder="비밀번호 입력" className="wd_100" />
            <p className="signup_info">영문,특수문자,숫자를 조합하여 8~20자리의 패스워드를 입력해주세요</p>
          </li>
          <li>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <Input name="user-password-check" type="password" required placeholder="비밀번호 확인" className="wd_100" />
            {/* {passwordError && <p className="signup_info">비밀번호가 일치하지 않습니다.</p>} */}
          </li>
          <li>
            <label htmlFor="user-bank-name">예금주</label>
            <Input name="user-bank-name" required disabled className="wd_100" />
          </li>
          <li>
            <label htmlFor="user-num">주민번호 앞자리</label>
            <Input name="user-num" required disabled className="wd_100" />
          </li>
          <li>
            <label htmlFor="user-bank">은행</label>
            <select name="user-bank" className="wd_100">
              <option value="">-- 선택 --</option>
              <option value="국민은행">국민은행</option>
              <option value="농협은행">농협은행</option>
              <option value="신한은행">신한은행</option>
            </select>
          </li>
          <li>
            <label htmlFor="user-bank-num">계좌번호</label>
            <div>
              <Input name="user-bank-num" type="number" required placeholder="계좌번호 입력" className="wd_80" />
              <Button value="확인" type="primary" >확인</Button>
            </div>
          </li>
          <li>
            <label htmlFor="user-mail">이메일</label>
            <div className="email_ip">
            <Input name="user-mail" type="email" required /><em>@</em><Input name="user-mail" type="email" className="ip_email" required />
            <select name="user-mail">
              <option value="">-- 직접입력 --</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="daum.net">daum.net</option>
            </select>
            </div>
          </li>
        </ul>

        <div className="btn_div">
          <Button type="primary" size={'large'} > 수정하기 </Button>
          <Button size={'large'} > 취소 </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;
