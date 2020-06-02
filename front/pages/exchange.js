import React, { useState, useCallback, useEffect } from 'react';
import { Button, List, Card, Icon, Tabs } from 'antd';
import dynamic from 'next/dynamic';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_ORDER_CATEGORY_REQUEST, LOAD_USER_TRANSACTIONS_REQUEST, LOAD_TRANSACTIONS_REQUEST} from "../reducers/exchange";

const { TabPane } = Tabs;

const TVChartContainer = dynamic(
  () =>
    import('../components/TVChartContainer').then(mod => mod.TVChartContainer),
  { ssr: false },
);

var times = 59;

const Exchange = () => {

  const { orderCategoryNumber } = useSelector(state => state.exchange);
  const dispatch = useDispatch();

  // const [time, settime] = useState(times);
  const [smallsec, setsmallsec] = useState(times % 10);
  const [bigsec, setbigsec] = useState(parseInt(times / 10));
  const [First, setFirst] = useState(false);
  const next_hours = new Date().getHours();
  const next_minutes = new Date().getMinutes() + 1;
  const smallHours = next_hours % 10;
  const bigHours = parseInt(next_hours / 10);
  const smallMinutes = next_minutes % 10;
  const bigMinutes = parseInt(next_minutes / 10);

  // TODO :
  //  1. timer -> state 로
  //  2. components 로 분리

  const [buy1 , setbuy1] = useState(0);
  const [buy2 , setbuy2] = useState(0);
  const [buy3 , setbuy3] = useState(0);
  const [buy4 , setbuy4] = useState(0);

  const [sell1 , setsell1] = useState(0);
  const [sell2 , setsell2] = useState(0);
  const [sell3 , setsell3] = useState(0);
  const [sell4 , setsell4] = useState(0);

  const [orderCateNum , setorderCateNum] = useState(1);

  useEffect(() => {
    dispatch({
      type: LOAD_ORDER_CATEGORY_REQUEST,
      data: orderCateNum,
    });
  }, [orderCateNum]);
  useEffect(() => {
    dispatch({
      type: LOAD_TRANSACTIONS_REQUEST,
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: LOAD_USER_TRANSACTIONS_REQUEST,
    });
  }, []);

  if (!First) {
    setFirst(true);
    setInterval(function () {
      // var i = times;
      // i = times -1;

      if (times === 0) {
        times = 59;
      }
      else {
        times--;
      }
      // settime(times);
      setsmallsec(times % 10);
      setbigsec(parseInt(times / 10));
      // console.log(smallsec,bigsec,time,i)
    }, 1000);
  }

  const onClickBuyPlus = (num) => {
      if(num === 1){
        if(buy1 === 10) {return;}
        const buys = buy1 + 1;
        setbuy1(buys);
      }
      else if(num ===2){
        if(buy2 === 10) {return;}
        const buys = buy2 + 1;
        setbuy2(buys);

      }
      else if(num ===3){
        if(buy3 === 10) {return;}
        const buys = buy3 + 1;
        setbuy3(buys);

      }
      else if(num ===4){
        if(buy4 === 10) {return;}
        const buys = buy4 + 1;
        setbuy4(buys);
      }
  }

  const onClickBuyMinus = (num) => {
    if(num === 1){
      if(buy1 === 0) {return;}
      const buys = buy1 - 1;
      setbuy1(buys);
    }
    else if(num ===2){
      if(buy2 === 0) {return;}
      const buys = buy2 - 1;
      setbuy2(buys);

    }
    else if(num ===3){
      if(buy3 === 0) {return;}
      const buys = buy3 - 1;
      setbuy3(buys);

    }
    else if(num ===4){
      if(buy4 === 0) {return;}
      const buys = buy4 - 1;
      setbuy4(buys);
    }
}


const onClickSellPlus = (num) => {
  if(num === 1){
    if(sell1 === 10) {return;}
    const sells = sell1 + 1;
    setsell1(sells);
  }
  else if(num ===2){
    if(sell2 === 10) {return;}
    const sells = sell2 + 1;
    setsell2(sells);

  }
  else if(num ===3){
    if(sell3 === 10) {return;}
    const sells = sell3 + 1;
    setsell3(sells);

  }
  else if(num ===4){
    if(sell4 === 10) {return;}
    const sells = sell4 + 1;
    setsell4(sells);
  }
}

const onClickSellMinus = (num) => {
if(num === 1){
  if(sell1 === 0) {return;}
  const sells = sell1 - 1;
  setsell1(sells);
}
else if(num ===2){
  if(sell2 === 0) {return;}
  const sells = sell2 - 1;
  setsell2(sells);

}
else if(num ===3){
  if(sell3 === 0) {return;}
  const sells = sell3 - 1;
  setsell3(sells);

}
else if(num ===4){
  if(sell4 === 0) {return;}
  const sells = sell4 - 1;
  setsell4(sells);
}
}

const onClickBuyMax = (num) => {
  if(num === 1){
    setbuy1(10);
  }
  else if(num ===2){
    setbuy2(10);

  }
  else if(num ===3){
    setbuy3(10);

  }
  else if(num ===4){
    setbuy4(10);
  }
}

const onClickSellMax = (num) => {
  if(num === 1){
    setsell1(0);
  }
  else if(num ===2){
    setsell2(0);

  }
  else if(num ===3){
    setsell3(0);

  }
  else if(num ===4){
    setsell4(0);
  }
  }


const onClickReset = (num) => {
    setsell1(0);
    setsell2(0);
    setsell3(0);
    setsell4(0);
    setbuy1(0);
    setbuy2(0);
    setbuy3(0);
    setbuy4(0);
  }

  return (
    <div className="exchange_div">
      <div className="left_div">
        <div className="trad_box" >
          <TVChartContainer />
        </div>
        <div className="buy_box">
          <div className="card-container">
            <Tabs type="card">
              <TabPane tab={ `${orderCategoryNumber}분거래` } key={ orderCategoryNumber }>
                <div className="deal_div">
                  {/* 계약시간 */}
                  <div className="timer">
                    <div className="ing_deal">
                      <p>남은 계약 시간</p>
                      <ul>
                        <li><span>0</span></li>
                        <li><span>0</span></li>
                        <li>:</li>
                        <li><span>{bigsec}</span></li>
                        <li><span>{smallsec}</span></li>
                      </ul>
                    </div>
                    <div className="next_deal">
                      <p>다음 계약 시간</p>
                      <ul>
                        <li><span>{bigHours}</span></li>
                        <li><span>{smallHours}</span></li>
                        <li>:</li>
                        <li><span>{bigMinutes}</span></li>
                        <li><span>{smallMinutes}</span></li>
                      </ul>
                    </div>
                  </div>
                  {/* 계약시간 */}
                  {/* 매수매도 */}
                  <div className="buy_sell">
                    <div className="div_table">
                      <div className="div_table_th">
                      <div className="div_th">수량</div>
                        <div className="div_th">실현/실격</div>
                        <div className="div_th buy_color">매수</div>
                        <div className="div_th sell_color">매도</div>
                      </div>
                      {/* div_table_td */}
                      <div className="div_table_td">
                        <div className="div_td">1LOT</div>
                        <div className="div_td">10</div>
                        <div className="div_td">
                          <div className="deal_buy">
                            <div className="buy_ui">
                              <span>350</span>
                              <button onClick={() => onClickBuyMinus(1)}>-</button>
                              <p>5,000(<em>{buy1}</em>)</p>
                              <button onClick={() => onClickBuyPlus(1)}>+</button>
                            </div>
                            <button className="deal_buy_max" onClick={() => onClickBuyMax(1)}>MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button onClick={() => onClickSellMinus(1)}>-</button>
                              <p>5,000(<em>{sell1}</em>)</p>
                              <button onClick={() => onClickSellPlus(1)}>+</button>
                            </div>
                            <button className="deal_sell_max" onClick={() => onClickSellMax(1)}>MAX</button>
                          </div>
                        </div>
                      </div>
                      {/* div_table_td */}
                      {/* div_table_td */}
                      <div className="div_table_td">
                        <div className="div_td">2LOT</div>
                        <div className="div_td">10</div>
                        <div className="div_td">
                          <div className="deal_buy">
                            <div className="buy_ui">
                              <span>350</span>
                              <button onClick={() => onClickBuyMinus(2)}>-</button>
                              <p>10,000(<em>{buy2}</em>)</p>
                              <button onClick={() => onClickBuyPlus(2)}>+</button>
                            </div>
                            <button className="deal_buy_max" onClick={() => onClickBuyMax(2)}>MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button onClick={() => onClickSellMinus(2)}>-</button>
                              <p>10,000(<em>{sell2}</em>)</p>
                              <button onClick={() => onClickSellPlus(2)}>+</button>
                            </div>
                            <button className="deal_sell_max" onClick={() => onClickSellMax(2)}>MAX</button>
                          </div>
                        </div>
                      </div>
                      {/* div_table_td */}
                      {/* div_table_td */}
                      <div className="div_table_td">
                        <div className="div_td">10LOT</div>
                        <div className="div_td">10</div>
                        <div className="div_td">
                          <div className="deal_buy">
                            <div className="buy_ui">
                              <span>350</span>
                              <button onClick={() => onClickBuyMinus(3)}>-</button>
                              <p>50,000(<em>{buy3}</em>)</p>
                              <button onClick={() => onClickBuyPlus(3)}>+</button>
                            </div>
                            <button className="deal_buy_max" onClick={() => onClickBuyMax(3)}>MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button onClick={() => onClickSellMinus(3)}>-</button>
                              <p>50,000(<em>{sell3}</em>)</p>
                              <button onClick={() => onClickSellPlus(3)}>+</button>
                            </div>
                            <button className="deal_sell_max" onClick={() => onClickSellMax(3)}>MAX</button>
                          </div>
                        </div>
                      </div>
                      {/* div_table_td */}
                      {/* div_table_td */}
                      <div className="div_table_td">
                        <div className="div_td">20LOT</div>
                        <div className="div_td">10</div>
                        <div className="div_td">
                          <div className="deal_buy">
                            <div className="buy_ui">
                              <span>350</span>
                              <button onClick={() => onClickBuyMinus(4)}>-</button>
                              <p>100,000(<em>{buy4}</em>)</p>
                              <button onClick={() => onClickBuyPlus(4)}>+</button>
                            </div>
                            <button className="deal_buy_max" onClick={() => onClickBuyMax(4)}>MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button onClick={() => onClickSellMinus(4)}>-</button>
                              <p>100,000(<em>{sell4}</em>)</p>
                              <button onClick={() => onClickSellPlus(4)}>+</button>
                            </div>
                            <button className="deal_sell_max" onClick={() => onClickSellMax(4)}>MAX</button>
                          </div>
                        </div>
                      </div>
                      {/* div_table_td */}
                      {/* div_table_foot */}
                      <div className="div_table_foot">
                        <div className="div_foot">보유금액: 10,000 원</div>
                        <div className="div_foot">신청금액:</div>
                        <div className="div_foot buy_color">100,000</div>
                        <div className="div_foot sell_color">200,000</div>
                      </div>
                      {/* div_table_foot */}
                      {/* div_table_btn */}
                      <div className="div_table_btn">
                        <div className="div_btn">
                          <button className="sell_del" onClick={() =>onClickReset()}>초기화</button>
                        </div>
                        <div className="div_btn">
                          <button className="buy_ok">매수신청</button>
                          <button className="buy_max" onClick={() => onClickAllBuyMax()}>매수MAX</button>
                        </div>
                        <div className="div_btn">
                          <button className="sell_ok">매도신청</button>
                          <button className="sell_max" onClick={() => onClickAllSellMax()}>매도MAX</button>
                        </div>

                      </div>
                      {/* div_table_btn */}
                    </div>
                  </div>
                  {/* 매수매도 */}
                </div>
              </TabPane>











            </Tabs>
          </div>
        </div>
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
