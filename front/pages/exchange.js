import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import { Col,  Row } from 'antd';

const Exchange = () => {
  return (
    // <Row>
    //    <Col xs={24} md={16}>
    //     영역 1
    //      </Col>
    //     <Col xs={24} md={8}>
    //       영역2
    //     </Col>
    // </Row>
    <Row>
      <Col xs={24} md={16}>
        <Row>챠트</Row>
        <Row>매수매도</Row>
      </Col>
      <Col xs={24} md={8}>거래내역</Col>
    </Row>
  );
};

export default Exchange;
