import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input,Modal } from 'antd';
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
  const [Modal1Visible, setModal1Visible] = useState(false);



  const [id, onChangeId] = useInput('');
  const [mobile, onChangeMobile] = useInput('');

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

  function fnPopup(){
    window.open('https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb?m=auth_mobile_main', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
                //  https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb?m=auth_mobile_main
                //  https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb?m=auth_mobile_main
    console.log(document,'폼체크')
    // document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
    // document.form_chk.target = "popupChk";
    // document.form_chk.submit();
}

  const OnMobileVerification = useCallback((e) => {
    e.preventDefault();
    fnPopup();



  }, [mobile]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);


  const onClickDuplicate = useCallback((e) => {
    e.preventDefault();



  }, []);


  console.log('모달',Modal1Visible)
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
          <table className="tb_01" width="100%" >
            <tr>
              <th><label htmlFor="user-id">아이디</label></th>
              <td colSpan="3">
                <Input name="user-id" value={id} required onChange={onChangeId} /><input type="button" value="중복체크" onClick={() => setModal1Visible(true)}/>
                <Modal
                title="Vertically centered modal dialog"
                centered
                visible={Modal1Visible}
                onOk={() => setModal1Visible(false)}
                onCancel={() => setModal1Visible(false)}
                mask={true}
                style={{animationDuration:'0s'}}
                >
                <p>안녕하세요</p>
                <p>앤트디 모달입니다.</p>
              </Modal>
                <p className="signup_info">영문자로 시작하는 7~20자 영문자 또는 숫자이어야 합니다. 아이디 중복체크 필수</p>
              </td>
            </tr>
            <tr>
              <th><label htmlFor="user-name">이름</label></th>
              <td><Input name="user-name" required onChange={onChangeId} disabled /><input onClick={OnMobileVerification}  type="button" value="본인인증"/></td>
              <th><label htmlFor="user-phon">휴대폰번호</label></th>
              <td><Input name="user-phon" required onChange={onChangeMobile}  /></td>
            </tr>
            <tr>
              <th><label htmlFor="user-password">비밀번호</label></th>
              <td>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} placeholder="비밀번호 입력" />
                <p className="signup_info">영문,특수문자,숫자를 조합하여 8~20자리의 패스워드를 입력해주세요</p>
              </td>
              <th><label htmlFor="user-password-check">비밀번호체크</label></th>
              <td>
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} placeholder="비밀번호 확인" />
                {passwordError && <p className="signup_info">비밀번호가 일치하지 않습니다.</p>}
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
                <Input name="user-mail"  type="email" required onChange={onChangeId} /><em>@</em><Input name="user-mail"  type="email" required onChange={onChangeId} className="ip_email" />
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
                <p className="signup_info">보고 오신 지점명을 작성해주세요. 다른지점명으로 적을시 추후에 변경이 안됩니다. 보고 오신 지점이 없으시거나 해당지점이 없으시면 고객센터로 전화주세요.</p>
              </td>
            </tr>
          </table>
        </Form>
      </div>
      {/* <!-- // 회원정보입력 --> */}

      {/* <!-- 전체동의 --> */}
      <div className="signup_div">
      <h4 className="tit_02">회원가입약관</h4>
        <Form onSubmit={onSubmit}>
          <div className="agree_content">
            <label><input type="checkbox" />전체동의</label>
            <p>회원가입약관 및 개인정보처리방침안내의 내용에 동의하셔야 회원가입 하실 수 있습니다.</p>
          </div>
        </Form>
      </div>
      {/* <!-- // 전체동의 --> */}
      
      {/* <!-- 개인정보수집 및 이용동의서 --> */}
      <div className="signup_div">
        <Form onSubmit={onSubmit}>
          <div className="agree_content">
            <p>개인정보수집 및 이용동의서 (필수)</p>
            <div className="agree_txt">
              <div>
                <p>정보통신망법 및 개인정보보호법, 관계법령에 따라 fxcity 서비스 이용을 위한 회원가입을 신청하시는 고객님께 수집하는 개인정보의 항목, 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내드리오니 자세히 확인 후 동의하여 주시기 바랍니다.</p>
                <ul>
                  <li>1. 개인정보 수집.</li>
                  <li>회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.</li>
                  <li>1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등</li>
                  <li>2) 금융정보 : 은행명, 계좌번호 등</li>
                  <li>3) 선택항목 : 이메일, 주소 등</li>
                </ul>
                <ul>
                  <li>1. 개인정보 수집.</li>
                  <li>회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.</li>
                  <li>1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등</li>
                  <li>2) 금융정보 : 은행명, 계좌번호 등</li>
                  <li>3) 선택항목 : 이메일, 주소 등</li>
                </ul>
                <ul>
                  <li>1. 개인정보 수집.</li>
                  <li>회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.</li>
                  <li>1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등</li>
                  <li>2) 금융정보 : 은행명, 계좌번호 등</li>
                  <li>3) 선택항목 : 이메일, 주소 등</li>
                </ul>
              </div>
            </div>
            <label><input type="checkbox" />회원가입약관의 내용에 동의합니다</label>
          </div>
        </Form>
      </div>
      {/* <!-- // 개인정보수집 및 이용동의서 --> */}

      {/* <!-- 서비스이용약관 --> */}
      <div className="signup_div">
        <Form onSubmit={onSubmit}>
          <div className="agree_content">
            <p>서비스이용약관(필수)</p>
            <div className="agree_txt">
              <div>
                <p>정보통신망법 및 개인정보보호법, 관계법령에 따라 fxcity 서비스 이용을 위한 회원가입을 신청하시는 고객님께 수집하는 개인정보의 항목, 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내드리오니 자세히 확인 후 동의하여 주시기 바랍니다.</p>
                <ul>
                  <li>1. 개인정보 수집.</li>
                  <li>회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.</li>
                  <li>1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등</li>
                  <li>2) 금융정보 : 은행명, 계좌번호 등</li>
                  <li>3) 선택항목 : 이메일, 주소 등</li>
                </ul>
                <ul>
                  <li>1. 개인정보 수집.</li>
                  <li>회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.</li>
                  <li>1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등</li>
                  <li>2) 금융정보 : 은행명, 계좌번호 등</li>
                  <li>3) 선택항목 : 이메일, 주소 등</li>
                </ul>
                <ul>
                  <li>1. 개인정보 수집.</li>
                  <li>회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.</li>
                  <li>1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등</li>
                  <li>2) 금융정보 : 은행명, 계좌번호 등</li>
                  <li>3) 선택항목 : 이메일, 주소 등</li>
                </ul>
              </div>
            </div>
            <label><input type="checkbox" />서비스 이용약관 내용에 동의합니다</label>
          </div>
        </Form>
      </div>
      {/* <!-- // 서비스이용약관 --> */}

      {/* <!-- 서비스이용약관 --> */}
      <div className="signup_div">
        <Form onSubmit={onSubmit}>
          <div className="agree_content">
            <div className="agree_element">
              <span>메일링서비스(선택)</span>
              <label><input type="checkbox" />정보 메일을 받겠습니다.</label>
            </div>
            <div className="agree_element">
              <p>SMS 수신여부(선택)</p>
              <label><input type="checkbox" />휴대폰 문자메세지를 받겠습니다.</label>
            </div>
          </div>
        </Form>
      </div>
      {/* <!-- // 서비스이용약관 --> */}

      {/* <!-- 개인정보처리 방침안내(필수) --> */}
      <div className="signup_div">
      <h4 className="tit_02">개인정보처리 방침안내(필수)</h4>
        <Form onSubmit={onSubmit}>
          <table className="tb_02" width="100%" >
            <tr>
              <th width="33.3%">목적</th>
              <th width="33.3%">항목</th>
              <th width="33.3%">보유기간</th>
            </tr>
            <tr>
              <td>본인인증, 식별</td>
              <td>아이디, 비밀번호, 이름</td>
              <td>회원탈퇴시까지</td>
            </tr>
            <tr>
              <td>고객서비스 이용에 관한 통지, cs활용등</td>
              <td>연락처(이메일, 휴대전화)</td>
              <td>회원탈퇴시까지</td>
            </tr>
          </table>
          <div className="agree_content">
            <label><input type="checkbox" />개인정보처리방침안내의 내용에 동의합니다.</label>
          </div>
        </Form>
      </div>
      {/* <!-- // 개인정보처리 방침안내(필수) --> */}
      <div className="btn_div">
      <Button type="primary" size={'large'} > 회원가입 </Button>
      <Button type="primary" size={'large'} > 취소 </Button>
      </div>
    </>
  );
};

export default Signup;
