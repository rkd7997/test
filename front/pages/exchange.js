import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import ChartComponent from '../components/ChartComponent';
import { Col,  Row } from 'antd';


const Exchange = () => {
  return (
    <Row>
      <Col xs={24} md={16}>
        <Row>

        <ChartComponent/>

        </Row>
        <Row>매수매도</Row>
      </Col>
      <Col xs={24} md={8}>거래내역</Col>
    </Row>
  );
};

export default Exchange;
