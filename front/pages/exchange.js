import React, { useState, useCallback, useEffect } from 'react';
import { Button, List, Card, Icon, Tabs } from 'antd';
// import NicknameEditForm from '../components/NicknameEditForm';
// import ChartComponent from '../components/ChartComponent'
import dynamic from 'next/dynamic';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_TRANSACTIONS_REQUEST} from "../reducers/exchange";

// import TVChartContainer from '../components/TVChartContainer/'


const { TabPane } = Tabs;

const TVChartContainer = dynamic(
  () =>
    import('../components/TVChartContainer').then(mod => mod.TVChartContainer),
  { ssr: false },
);


var times = 59;

const Exchange = () => {

  const { UserTransactions } = useSelector(state => state.exchange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_USER_TRANSACTIONS_REQUEST,
    });
  }, []);

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

  return (
    <div className="exchange_div">

      <div className="left_div">

        <div className="trad_box" >



          <TVChartContainer />
          {/* <ChartComponent/> */}

        </div>
        <div className="buy_box">
          <div className="card-container">
            <Tabs type="card">
              <TabPane tab="1분거래" key="1">
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
                              <button>-</button>
                              <p>5,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>5,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>10,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>10,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>50,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>50,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>100,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>100,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                          <button className="sell_del">초기화</button>
                        </div>
                        <div className="div_btn">
                          <button className="buy_ok">매수신청</button>
                          <button className="buy_max">매수MAX</button>
                        </div>
                        <div className="div_btn">
                          <button className="sell_ok">매도신청</button>
                          <button className="sell_max">매도MAX</button>
                        </div>

                      </div>
                      {/* div_table_btn */}
                    </div>
                  </div>
                  {/* 매수매도 */}
                </div>
              </TabPane>
              <TabPane tab="2분거래" key="2">
                <div className="deal_div">
                  {/* 계약시간 */}
                  <div className="timer">
                    <div className="ing_deal">
                      <p>남은 계약 시간</p>
                      <ul>
                        <li><span>0</span></li>
                        <li><span>2</span></li>
                        <li>:</li>
                        <li><span>0</span></li>
                        <li><span>5</span></li>
                      </ul>
                    </div>
                    <div className="next_deal">
                      <p>다음 계약 시간</p>
                      <ul>
                        <li><span>0</span></li>
                        <li><span>2</span></li>
                        <li>:</li>
                        <li><span>0</span></li>
                        <li><span>5</span></li>
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
                              <button>-</button>
                              <p>5,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>5,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>10,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>10,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>50,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>50,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>100,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>100,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                          <button className="sell_del">초기화</button>
                        </div>
                        <div className="div_btn">
                          <button className="buy_ok">매수신청</button>
                          <button className="buy_max">매수MAX</button>
                        </div>
                        <div className="div_btn">
                          <button className="sell_ok">매도신청</button>
                          <button className="sell_max">매도MAX</button>
                        </div>

                      </div>
                      {/* div_table_btn */}
                    </div>
                  </div>
                  {/* 매수매도 */}
                </div>
              </TabPane>
              <TabPane tab="5분거래" key="3">
                <div className="deal_div">
                  {/* 계약시간 */}
                  <div className="timer">
                    <div className="ing_deal">
                      <p>남은 계약 시간</p>
                      <ul>
                        <li><span>0</span></li>
                        <li><span>2</span></li>
                        <li>:</li>
                        <li><span>0</span></li>
                        <li><span>5</span></li>
                      </ul>
                    </div>
                    <div className="next_deal">
                      <p>다음 계약 시간</p>
                      <ul>
                        <li><span>0</span></li>
                        <li><span>2</span></li>
                        <li>:</li>
                        <li><span>0</span></li>
                        <li><span>5</span></li>
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
                              <button>-</button>
                              <p>5,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>5,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>10,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>10,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>50,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>50,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                              <button>-</button>
                              <p>100,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_buy_max">MAX</button>
                          </div>
                        </div>
                        <div className="div_td">
                          <div className="deal_sell">
                            <div className="sell_ui">
                              <span>350</span>
                              <button>-</button>
                              <p>100,000(<em>0</em>)</p>
                              <button>+</button>
                            </div>
                            <button className="deal_sell_max">MAX</button>
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
                          <button className="sell_del">초기화</button>
                        </div>
                        <div className="div_btn">
                          <button className="buy_ok">매수신청</button>
                          <button className="buy_max">매수MAX</button>
                        </div>
                        <div className="div_btn">
                          <button className="sell_ok">매도신청</button>
                          <button className="sell_max">매도MAX</button>
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
