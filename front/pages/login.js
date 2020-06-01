import React from 'react';
import { Button, List, Card, Icon } from 'antd';
// import ChartComponent from '../components/ChartComponent';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'

import { Col,  Row } from 'antd';
import LoginForm from '../components/LoginForm';


const Login = () => {

  const { me } = useSelector(state => state.user);


  React.useEffect(() => {
    if (me) {
      alert('로그인했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  return (
    <div className="login_div">
      <div className="login_div_inner">
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
