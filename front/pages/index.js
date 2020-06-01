import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Home = () => {

  return (
    <div className="main_inner">
      {/* 메인배너 */}
      <div className="main_benner">
        <img src="/img/main_benner_img.jpg" />
      </div>
      {/* 메인배너 */}
      <div className="main_con gray">
        <div className="main_con_inner">
          <div className="main_tit">
            <h2>이용방법</h2>
            <p>차트업에서는 간단한 과정을 통해 계정을 생성하고, 등록한 본인의 계좌를 이용해 거래를 진행하실 수 있습니다.</p>
          </div>
          <div className="main_item_con">
            <div className="main_item01">
              <img src="/img/main_item_img01.png" />
              <h5>계정만들기</h5>
              <p>회원가입 버튼을 눌러 신규 회원가입을 진행 하실 수 있습니다.</p>
            </div>
            <div className="main_item01">
              <img src="/img/main_item_img02.png" />
              <h5>실명인증  계좌등록</h5>
              <p>안전하게 서비스를 제공해 드리기 위해 실명인증과 계좌번호를 등록 받고 있습니다.</p>
            </div>
            <div className="main_item01">
              <img src="/img/main_item_img03.png" />
              <h5>거래 시작하기</h5>
              <p>냉철한 분석에 따라 자신에게 잘 맞는 거래방식과 거래단위를 선택 하시기 바랍니다.</p>
            </div>
          </div>
          <div>
            <Link href="signup"><a>회원가입</a></Link> 
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Home;
