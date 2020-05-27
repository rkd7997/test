import React from 'react';
import { Button, List, Card, Icon } from 'antd';
// import ChartComponent from '../components/ChartComponent';
import { useDispatch, useSelector } from 'react-redux';

import { Col,  Row } from 'antd';
import LoginForm from '../components/LoginForm';


const Login = () => {

  const { me } = useSelector(state => state.user);

  return (
    <div className="login_div">
      <div className="login_div_inner">
        {!me
        ?
        <LoginForm/>
        :
        <div>
          {`${me.nickname}님 하위~~~~~~~~~~~~~~~~~~` }
        </div>
        }
      </div>
    </div>
  );
};

export default Login;
