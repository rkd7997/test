import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input,Modal , Pagination} from 'antd';
import Link from 'next/link';


const PCApplyHistory = () => {
  return (
      <div>
        <h4 className="con_txt01">신청내역</h4>
        <table className="tb_02" width="100%" >
          <tr>
            <th width="80px">소속지점</th>
            <th>이동지점</th>
            <th width="95px">신청일자</th>
            <th width="90px">상태</th>
          </tr>
          <tr>
            <td>강남</td>
            <td>안드로메다</td>
            <td>2020-05-27</td>
            <td>승인</td>
          </tr>
          <tr>
            <td>강남</td>
            <td>안드로메다</td>
            <td>2020-05-27</td>
            <td>대기</td>
          </tr>
        </table>
        <div className="btn_div">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
  );
};

export default PCApplyHistory;
