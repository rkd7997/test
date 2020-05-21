import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import ChartComponent from '../components/ChartComponent'
const Exchange = () => {
  return (
  <div className="exchange_div">

    <div className="left_div">
      <div className="trad_box"><ChartComponent/></div>
      <div className="buy_box">매수매도영역</div>
    </div>

    <div className="right_div">
      <div className="list_box">거래내역</div>
    </div>

  </div>
  );
};

export default Exchange;
