import React from 'react';
import { Button, List, Card, Icon, Pagination} from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const News = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <h5 className="lnb_tit">공지사항</h5>
        <ul>
          <li><Link href="/announcements">공지사항</Link></li>
          <li className="active"><Link href="/news">소식</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">소식</h3>
        <table className="tb_02" width="100%" >
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
            <tr>
              <td>1</td>
              <td>뉴스입니다.</td>
              <td>2020-05-21</td>
              <td>100000</td>
            </tr>
          </table>
          <div className="btn_div">


          <Pagination defaultCurrent={1} total={50} />
          </div>
      </div>
    </div>
  );
};

export default News;
