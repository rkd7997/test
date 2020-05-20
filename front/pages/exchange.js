import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import { Col,  Row } from 'antd';

const Exchange = () => {
  return (
    <Row gutter={8}>
       <Col xs={24} md={16}>
        영역 1
         </Col>
        <Col xs={24} md={8}>
          영역2
        </Col>
    </Row>
  );
};

export default Exchange;
