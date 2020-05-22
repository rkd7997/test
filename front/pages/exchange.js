import React from 'react';
import { Button, List, Card, Icon, Tabs } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import ChartComponent from '../components/ChartComponent'

const { TabPane } = Tabs;

const Exchange = () => {
  return (
  <div className="exchange_div">

    <div className="left_div">
      <div className="trad_box"><ChartComponent/></div>
      <div className="buy_box">매수매도영역</div>
    </div>

    <div className="right_div">
      <div className="list_box">
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="거래내역" key="1">
              <table className="tab_tb" width="100%" >
                <tr>
                  <th width="120px">계약시간</th>
                  <th width="75px">투자종류</th>
                  <th className="tb_r">투자금액</th>
                  <th width="60px">결과</th>
                </tr>
                <tr>
                  <td>14일 17시 20분</td>
                  <td>1분매수</td>
                  <td className="tb_r">10,000</td>
                  <td className="green_txt">진행중</td>
                </tr>
                <tr>
                  <td>14일 17시 20분</td>
                  <td>1분매수</td>
                  <td className="tb_r">100,000</td>
                  <td className="blue_txt">실현</td>
                </tr>
                <tr>
                  <td>14일 17시 20분</td>
                  <td>1분매수</td>
                  <td className="tb_r">100,000</td>
                  <td className="red_txt">실격</td>
                </tr>
              </table>
            </TabPane>
            <TabPane tab="거래결과" key="2">
              <table className="tab_tb" width="100%" >
                  <tr>
                    <th>계약시간</th>
                    <th className="tb_r">시가</th>
                    <th>결과</th>
                  </tr>
                  <tr>
                    <td>14일 17시 20분</td>
                    <td className="tb_r">1.89680</td>
                    <td className="green_txt">진행중</td>
                  </tr>
                  <tr>
                    <td>14일 17시 20분</td>
                    <td className="tb_r">1.89680</td>
                    <td className="blue_txt">실현</td>
                  </tr>
                  <tr>
                    <td>14일 17시 20분</td>
                    <td className="tb_r">1.89680</td>
                    <td className="red_txt">실격</td>
                  </tr>
                </table>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>

  </div>
  );
};

export default Exchange;
