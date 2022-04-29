import React from 'react';
import {Box, Divider, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const test = `<div class="news_end" id="newsEndContents">
  K3리그 부산교통공사와 울산시민축구단이 프로팀을 꺾는 이변을 연출하며 대한축구협회(FA)컵 16강에 올랐다.
 <br>
 <br>부산교통공사는 27일 김포솔터축구장에서 열린 김포FC(K리그2)와의 2022 하나원큐 FA컵 3라운드 경기에서 연장 접전 끝에 2-1로 이겼다.
 <br>
 <br>
 <span class="end_photo_org"><img src="https://imgnews.pstatic.net/image/031/2022/04/27/0000669124_001_20220427233401214.jpg?type=w647" alt=""><em class="img_desc">부산교통공사 [사진=대한축구협회(KFA)]</em></span>
 <br>
 <br>부산교통공사는 전반 10분 김소웅의 선제골로 앞서다 후반 26분 김포 박재우에게 실점하며 동점을 허용했다.
 <br>
 <br>1-1로 맞이한 연장전. 이민우는 부산교통공사의 영웅으로 등극했다. 이민우는 연장 후반 9분 김민준의 슈팅 이후 흘러나온 공을 놓치지 않고 득점으로 연결해 팀에 승리를 안겼다.
 <br>
 <br>울산시민축구단은 부산 아이파크(K리그2)를 제물로 삼았다.
 <br>
 <br>신인 김훈옥의 활약이 빛난 경기였다. 김훈옥은 전반 24분 부산의 뒷공간으로 돌파해 들어가 간결한 슛으로 골을 터트렸다.
 <br>
 <br>후반 38분에는 김훈옥이 페널티에어리어 오른쪽에서 드리블로 공을 지킨 후 크로스를 올렸고, 이형경이 문전 발리슛으로 연결해 쐐기골을 만들어 2-0 승리를 완성했다.
 <br>
 <br>16강 진출은 울산시민축구단의 FA컵 최고 성적이다. 윤균상 감독은 지난 2월 1라운드 승리 당시 "전북 현대를 만나는 것이 목표"라고 밝힌 바 있는데, 목표가 현실이 됐다. 울산시민축구단과 전북은 5월 25일 16강전에서 격돌한다.
 <br>
 <br>
 <span class="end_photo_org"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="imageLazyLoad" lazy-src="https://imgnews.pstatic.net/image/031/2022/04/27/0000669124_002_20220427233401247.jpg?type=w647" alt=""><em class="img_desc">울산시민축구단 [사진=대한축구협회(KFA)]</em></span>
 <br>
 <br>K리그1 팀을 꺾은 K리그2 팀들도 있다. 광주FC는 인천 유나이티드를 6-1로 완파했다.
 <br>
 <br>김진영이 멀티골을 터트린 가운데 하승운, 박준강, 허율, 마이키도 득점 행진에 가세했다.
 <br>
 <br>부천FC는 수원FC를 홈으로 불러들여 1-0 승리를 거뒀다. 최재영이 결승골을 기록했다. 광주와 부천은 16강에서 서로를 만난다.
 <br>
 <br>K리그1 FC서울은 K3리그 창원시청을 상대로 승부차기 접전 끝에 힘겹게 16강에 올랐다.
 <br>
 <br> 
 <p class="source"><b>기사제공</b> 아이뉴스24</p> 
 <p class="byline">송대성 기자 snowball@inews24.com</p> 
 <!-- /* 기자 카드 + 본문 내 기자 정보 --> 
 <div class="reporter_area"> 
  <div class="reporter _type_journalist _JOURNALIST_76528"> 
   <div class="reporter_profile"> 
    <a href="https://media.naver.com/journalist/031/76528" class="link_thumbnail" onclick="clickcr(this, 'art.more', '', '', event);"> 
     <div class="thumbnail"> 
      <!-- [D] 이미지 원본 사이즈 : 40x40 --> 
      <img src="https://mimgnews.pstatic.net/image/upload/spubs/0lG0000031/profile/2021/09/27/profile_155232277.jpg" onerror="$(this).parent().hide();" width="40" height="40" alt=""> 
     </div> </a> 
    <div class="profile_info"> 
     <a href="https://media.naver.com/journalist/031/76528" class="link_press" onclick="clickcr(this, 'art.more', '', '', event);"> 
      <div class="press">
       <img src=" https://mimgnews.pstatic.net/image/upload/office_logo/031/2020/12/02/logo_031_6_20201202114450.png " height="20" alt="아이뉴스24" title="" class="press_img" onerror="$(this).parent().hide();">
      </div> 
      <div class="name">
       송대성 기자
      </div> </a> 
     <div class="subscribe"> 
      <button type="button" class="button_subscribe _reporter_subscribe_btn" data-journalist-id="76528">구독</button> 
      <!-- <button type="button" class="button_subscribe is_on">구독중</button> --> 
      <!-- [D] 레이어 토글 --> 
      <div class="subscribe_layer" style="display: none"> 
       <p><strong>송대성 기자의 구독을 <br>취소하시겠습니까?</strong><br>구독에서 해당 기자의 기사가 제외됩니다.</p> 
       <div class="button_group"> 
        <button type="button" class="button_layer _btn_y" data-journalist-id="76528">예</button> 
        <button type="button" class="button_layer _btn_n">아니오</button> 
       </div> 
       <button type="button" class="button_layer_close"><span class="blind">닫기</span></button> 
      </div> 
     </div> 
    </div> 
    <div class="subscribe_info"> 
     <dl class="subscribe_info_list"> 
      <div class="subscribe_info_item" style="display:none"> 
       <dt>
        구독자
       </dt> 
       <dd class="_reporter_subscribe_count">
        -
       </dd> 
      </div> 
      <div class="subscribe_info_item _reactionModule" data-sid="JOURNALIST" data-cid="76528" data-ccounttype="period" style="display:none"> 
       <dt>
        응원수
       </dt> 
       <dd class="_reporter_cheer_count">
        -
       </dd> 
      </div> 
     </dl> 
    </div> 
   </div> 
   <p class="message">아이뉴스24 스포츠부에서 축구와 배구를 담당합니다.</p> 
   <div class="reporter_morenews"> 
    <ul class="morenews_list"> 
     <li class="morenews_item"> <a href="/news.nhn?oid=031&amp;aid=0000669592" class="link_morenews" onclick="clickcr(this, 'art.bestart', '', '', event);">인천 무고사, 4월 '이달의 선수상'…K리그 최초 2회 연속 수상</a> </li> 
     <li class="morenews_item"> <a href="/news.nhn?oid=031&amp;aid=0000669493" class="link_morenews" onclick="clickcr(this, 'art.bestart', '', '', event);">'도움 1위' 강원 양현준, 4월 K리그 '영플레이어상' 수상</a> </li> 
    </ul> 
   </div> 
  </div> 
  <div class="reporter_recommend" style="display:none"> 
  </div> 
 </div> 
 <!-- 카피라이트 배너 --> 
 <div class="copyright"> 
  <p>Copyright ⓒ 아이뉴스24. All rights reserved. 무단 전재 및 재배포 금지.</p> 
 </div> 
 <!-- 기사 분류 --> 
 <div class="categorize" id="_article_section_guide"> 
  <a href="#wa_categorize_tooltip" class="btn_guide_categorize" role="button" aria-describedby="wa_categorize_tooltip">기사 섹션 분류 가이드</a> 
  <div class="guide_categorize" style="display: none;"> 
   <em class="guide_title">기사 섹션 분류 안내</em> 
   <p class="guide_text" role="tooltip" id="wa_categorize_tooltip">스포츠 기사 섹션(종목) 정보는 언론사 분류와 기술 기반의 자동 분류 시스템을 따르고 있습니다. 오분류에 대한 건은 네이버스포츠로 제보 부탁드립니다.</p> 
   <a href="https://help.naver.com/support/contents/contents.nhn?serviceNo=1001&amp;categoryNo=21210" class="btn_report" target="_blank" title="새창">오분류 제보하기</a> 
   <button type="button" class="btn_close"><span class="blind">가이드 닫기</span></button> 
  </div> 
 </div> 
 <!-- 언론사 프로모션 링크 --> 
 <div class="promotion"> 
  <ul class="promotion_list"> 
   <li class="promotion_item"> <a href="https://media.naver.com/channel/promotion.nhn?oid=031" class="link_promotion">네이버 채널에서 '아이뉴스24'를 구독해주세요.</a> </li> 
   <li class="promotion_item"> <a href="https://tv.naver.com/inewstv" class="link_promotion">재밌는 아이뉴스TV 영상보기</a> </li> 
  </ul> 
 </div> 
</div>`;

const RootStyled = styled(Box)(({theme}) => ({
  padding: theme.spacing(2)
}))

const TitleBoxStyled = styled(Box)(({theme}) => ({
  paddingBottom: theme.spacing(1)
}))

const ContentBoxStyled = styled(Box)(({theme}) => ({
  paddingTop: theme.spacing(2),
  '.end_photo_org > img' : {
    width: '100%',
    height: '100%'
  },
  '.end_photo_org > em' : {
    display: 'block',
    paddingTop: '11px',
    color: '#999 !important',
    fontSize: '12px !important',
    lineHeight: '21px !important',
    textAlign: 'center'
  },
  '.source, .byline, .reporter_area, .copyright, .categorize, .promotion' : {
    display: 'none'
  }
}))

const LinkBoxStyled = styled(Stack)(({theme}) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1)
}))

const TitleStyled = styled(Typography)(({theme}) => ({
  fontWeight: 'bold'
}))

const NewsPost = () => {
  return (
    <>
      <RootStyled>
        <TitleBoxStyled>
          <TitleStyled variant={'h6'} >
            송파구, 마이스 전문인력 양성교육 참여자 모집
          </TitleStyled>
          <Typography variant={'caption'}>
            세계신문 • 2시간 전
          </Typography>
        </TitleBoxStyled>
        <Divider />
        <ContentBoxStyled>
          <Box dangerouslySetInnerHTML={{__html: test}}/>
        </ContentBoxStyled>
        <LinkBoxStyled spacing={1}>
          <Typography variant={'subtitle2'}>ⓒ 아시아경제</Typography>
          <Typography variant={'button'}>언론사에서 보기 ></Typography>
          <Typography variant={'button'}>네이버에서 보기 ></Typography>
        </LinkBoxStyled>
      </RootStyled>
    </>
  );
};

export default NewsPost;