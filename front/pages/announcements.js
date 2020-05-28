import React, {useEffect} from 'react';
import { Button, List, Card, Icon, Pagination} from 'antd';
import AnnouncementsRow from '../components/AnnouncementsRow';
import Link from 'next/link';
import {useDispatch, useSelector} from "react-redux";
import { LOAD_ANNOUNCEMENTS_REQUEST } from "../reducers/service";

const Announcements = () => {

    const { announcementsList } = useSelector(state => state.service);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_ANNOUNCEMENTS_REQUEST,
        });
    }, []);

    return (
        <div className="sub_div">
            <div className="sub_menu">
                <h5 className="lnb_tit">공지사항</h5>
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
                    {announcementsList.map(c => {
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

export default Announcements;
