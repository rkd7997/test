import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';

const TextInput = ({ value }) => (
  <div>{value}</div>
);

TextInput.propTypes = {
  value: PropTypes.string,
};

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);

  // useEffect(() => {
  //   if (me) {
  //     alert('로그인했으니 메인페이지로 이동합니다.');
  //     Router.push('/');
  //   }
  // }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        id,
        password,
        nick,
      },
    });
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      {/* <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>쥬르르륵.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
        </div>
      </Form> */}
      <h3 className="tit_01">회원가입</h3>
      
      {/* <!-- 회원정보입력 --> */}
      <div className="signup_div">
      <h4 className="tit_02">회원정보입력</h4>
        <Form onSubmit={onSubmit}>
          <table width="100%" >
            <tr>
              <th><label htmlFor="user-id">아이디</label></th>
              <td colSpan="3">
                <Input name="user-id" value={id} required onChange={onChangeId} /><input type="button" value="중복체크"/>
                <p>영문자로 시작하는 7~20자 영문자 또는 숫자이어야 합니다. 아이디 중복체크 필수</p>
              </td>
            </tr>
            <tr>
              <th><label htmlFor="user-name">이름</label></th>
              <td><Input name="user-name" required onChange={onChangeId} disabled /><input type="button" value="본인인증"/></td>
              <th><label htmlFor="user-phon">휴대폰번호</label></th>
              <td><Input name="user-phon" required onChange={onChangeId} disabled /></td>
            </tr>
            <tr>
              <th><label htmlFor="user-password">비밀번호</label></th>
              <td>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} placeholder="비밀번호 입력" />
                <p>영문,특수문자,숫자를 조합하여 8~20자리의 패스워드를 입력해주세요</p>
              </td>
              <th><label htmlFor="user-password-check">비밀번호체크</label></th>
              <td>
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} placeholder="비밀번호 확인" />
                {/* {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다. */}
              </td>
            </tr>
            <tr>
              <th><label htmlFor="user-bank-name">예금주</label></th>
              <td><Input name="user-bank-name" type="password" required onChange={onChangePassword} disabled placeholder="예금주" /></td>
              <th><label htmlFor="user-num">주민번호 앞자리</label></th>
              <td><Input name="user-num" type="number" required onChange={onChangePasswordCheck} disabled placeholder="주민번호 앞 6자리" /></td>
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
              <td><Input name="user-bank-num" type="number" required onChange={onChangePasswordCheck} placeholder="계좌번호 입력" /><input type="button" value="확인"/></td>
            </tr>
            <tr>
              <th><label htmlFor="user-mail">이메일</label></th>
              <td colSpan="3">
                <Input name="user-mail"  type="email" required onChange={onChangeId} />@<Input name="user-mail"  type="email" required onChange={onChangeId} />
                <select name="user-mail">
                    <option value="">-- 직접입력 --</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                </select>
              </td>
            </tr>
            <tr>
              <th><label htmlFor="user-store">추천지점코드</label></th>
              <td colSpan="3">
                <select name="user-store">
                    <option value="">-- 직접입력 --</option>
                    <option value="삼성점">삼성점</option>
                    <option value="종로점">종로점</option>
                    <option value="건대점">건대점</option>
                </select>
                <p>보고 오신 지점명을 작성해주세요. 다른지점명으로 적을시 추후에 변경이 안됩니다. 보고 오신 지점이 없으시거나 해당지점이 없으시면 고객센터로 전화주세요.</p>
              </td>
            </tr>
          </table>
        </Form>
      </div>
      {/* <!-- // 회원정보입력 --> */}

      {/* <!-- 회원가입약관 --> */}
      <div className="signup_div">
      <h4 className="tit_02">회원가입약관</h4>
        <Form onSubmit={onSubmit}>
        <div className="agree_content">
            <p>회원가입약관 및 개인정보처리방침안내의 내용에 동의하셔야 회원가입 하실 수 있습니다.</p>
          </div>
          <div className="agree_content">
            <p>개인정보수집 및 이용동의서 (필수)</p>
            <div className="agree_txt">
              <p>
                정보통신망법 및 개인정보보호법, 관계법령에 따라 fxcity 서비스 이용을 위한 회원가입을 신청하시는 고객님께 수집하는 개인정보의 항목, 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내드리오니 자세히 확인 후 동의하여 주시기 바랍니다.


                1. 개인정보 수집.
                회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.
                1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등
                2) 금융정보 : 은행명, 계좌번호 등
                3) 선택항목 : 이메일, 주소 등

                서비스 이용과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
                1) 거래정보 : 개설정보, 예탁금, 거래내역 등
                2) 이용정보 : 접속 IP 및 쿠키, 서비스 이용기록, 기기정보, OS정보 등
                3) 투자자정보 :  투자권유준칙 등에 따른 투자자정보 및 투자성향 등

                기타 고객상담, fxcity 내의 개별 서비스 이용,
                고객의 문의사항에 대한 응답, 이벤트 응모 및 경품 신청 과정에서
                해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다.
                추가로 개인정보를 수집할 경우에는 해당 개인정보의 수집 시점에서 이용자에게 수집하는 개인정보 항목 및 이용목적 등에 대해 안내 드리고 동의를 받습니다.
              </p>
            </div>
            <p>회원가입약관의 내용에 동의합니다</p>
          </div>
        </Form>
      </div>
      {/* <!-- // 회원가입약관 --> */}
    </>
  );
};

export default Signup;
