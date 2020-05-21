import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import ChartComponent from '../components/ChartComponent';
import { Col,  Row } from 'antd';
import LoginForm from '../components/LoginForm';


const Login = () => {
  return (
    <div className="login_div">
      <div className="login_div_inner">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
