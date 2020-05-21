import React from 'react';
import { Button, List, Card, Icon, Pagination} from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';

const Announcements = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <ul>
          <li className="active"><Link href="/announcements">공지사항</Link></li>
          <li><Link href="/news">소식</Link></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">공지사항</h3>
        <table className="tb_02" width="100%" >
            <tr>
              <th width="80px">번호</th>
              <th>제목</th>
              <th width="120px">등록일</th>
              <th width="100px">조회수</th>
            </tr>
            <tr>
              <td>1</td>
              <td align="left">공지사항입니다.</td>
              <td>2020-05-21</td>
              <td>100000</td>
            </tr>
            <tr>
              <td>100000</td>
              <td align="left">공지사항입니다.</td>
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

export default Announcements;
