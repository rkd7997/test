import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/signup'; // TODO: util 폴더로 옮기기
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id, password,
      },
    });
  }, [id, password]);
  return (
    <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
      <div className="login_form">
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required placeholder="아이디를 입력하세요" />
      </div>
      <div className="login_form">
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required placeholder="비밀번호를 입력하세요" />
      </div>
      <div className="btn_div">
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
      </div>
      <div className="join_btn_div">
        <Link href="#"><a>아이디찾기</a></Link><span></span>
        <Link href="#"><a>비밀번호찾기</a></Link><span></span>
        <Link href="#"><a>회원가입</a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;
