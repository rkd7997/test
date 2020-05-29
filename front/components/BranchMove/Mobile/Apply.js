import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import Link from 'next/link';

const MobileApply = () => {
  return (
    <>
      <h3 className="tit_01">지점이동신청</h3>
      <div className="page_div">
        <h4 className="con_txt01">지점이동신청</h4>
        <h5 className="con_txt01">이동을 원하시는 지점명을 선택해주십시오.<br />신청 후 <span className="point">7일간 미거래 시</span> 승인처리됩니다.</h5>
        <ul className="mobile_li_tb">
          <li>
            <label htmlFor="user-store">소속지점</label>
            <Input name="user-store" required disabled className="wd_100" />
          </li>
          <li>
            <label htmlFor="user-store-add">이동지점</label>
            <select name="user-store-addk" className="wd_100">
              <option value="">-- 선택 --</option>
              <option value="삼성점">삼성점</option>
              <option value="잠실점">잠실점</option>
              <option value="종로점">종로점</option>
            </select>
          </li>
        </ul>
        <div className="btn_div">
          <Button type="primary" size={'large'} > 신청하기 </Button>
        </div>
      </div>
    </>
  );
};

export default MobileApply;
