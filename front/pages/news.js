import React, {useEffect} from 'react';
import { Button, List, Card, Icon, Pagination} from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import Link from 'next/link';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_NEWS_REQUEST} from "../reducers/service";
import AnnouncementsRow from "../components/AnnouncementsRow";

const News = () => {
  const { newsList } = useSelector(state => state.service);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_NEWS_REQUEST,
    });
  }, []);

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
          {newsList.map(c => {
            return (
              <AnnouncementsRow announcements={c} />
            );
          })}
          </table>
          <div className="btn_div">
            <Pagination defaultCurrent={1} total={50} />
          </div>
      </div>
    </div>
  );
};

export default News;
