import React from 'react';
import { Button, List, Card, Icon, Pagination} from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';

const Announcements = () => {
  return (
    <div className="sub_div">
      <div className="sub_menu">
        <ul>
          <li className="active"><a>공지사항</a></li>
          <li><a>소식</a></li>
        </ul>
      </div>
      <div className="sub_page">
        <h3 className="tit_01">공지사항</h3>
        <table className="tb_02" width="100%" >
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
            <tr>
              <td>1</td>
              <td>공지사항입니다.</td>
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
