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
      {/* 메인컨텐츠 */}
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
          <div className="main_btn">
            <Link href="signup"><a>회원가입</a></Link> 
          </div>
        </div>
      </div>
      {/* 메인컨텐츠 */}
      {/* 메인컨텐츠 */}
      <div className="main_con red">
        <div className="main_con_inner">
          <div className="main_tit">
            <h2>빠르고 안정적인 거래 시스템</h2>
          </div>
          <div className="main_item_con">
            <div className="main_item_left">
              <div className="main_item02">
                <h5>쉽고 간편한 거래</h5>
                <p>언제 어디서나 PC, 모바일로<br/>빠르고 간편하게 거래</p>
              </div>
              <div className="main_item02">
                <h5>차트의 고급화</h5>
                <p>한눈에 파악할 수 있는 차트 구성<br/>다양한 모드와 기능 활용 가능</p>
              </div>
            </div>
            <div className="main_item_right">
              <div className="main_item02">
                <h5>자동 입금 시스템</h5>
                <p>실시간 입금처리 기능으로<br/>더욱 원활한 거래 가능</p>
              </div>
              <div className="main_item02">
                <h5>차별화된 거래 시스템</h5>
                <p>매수 매도 결과가 실시간 반영되는<br/>차별화된 거래 시스템 구축</p>
              </div>
            </div>
          </div>
          <div className="main_item_img">
            <img src="/img/main_con02_img.png" />
          </div>
        </div>
      </div>
      {/* 메인컨텐츠 */}
      {/* 메인컨텐츠 */}
      <div className="main_con">
        <div className="main_con_inner">
          <div className="main_tit">
            <h2>강력한 보안으로 24시간 안심거래</h2>
            <p>한단계 높은 보안과 최적화된 플렛폼으로 사용자들의 정보의 안전을 보장합니다.</p>
          </div>
          <div className="main_item_con">
            <div className="main_item03">
              <img src="/img/main_con03_img.png" />
            </div>
          </div>
        </div>
      </div>
      {/* 메인컨텐츠 */}
    </div> 
  );
};

export default Home;
