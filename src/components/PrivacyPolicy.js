import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: "100vw",
  minHeight: "100vh",
}));

const TitleBoxStyled = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
}));

const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 28,
}));

const ContentBoxStyled = styled(Box)(({theme}) => ({
  
}));

const ContentStyled = styled(Typography)(({theme}) => ({
  fontSize: 12,
  marginTop: 10,
}));

const PrivacyPolicy = () => {
  return (
    <RootStyled>
      <TitleBoxStyled>
        <TitleStyled variant={"h1"}>개인정보 처리방침</TitleStyled>
      </TitleBoxStyled>
      <ContentBoxStyled>
        <ContentStyled>
        주식회사 시그널코리아(이하 “회사”)는 회원의 개인정보를 매우 소중하게 생각하며, 각별히 주의를 기울여 개인정보를 취급하고 있습니다. 회사는 기본적 인권 침해의 우려가 있는 민감한 개인정보는 수집하지 않고 있으며, 관련 법령을 준수하고 있습니다.
        회사는 개인정보처리방침을 통하여 회원의 개인정보가 남용되거나 유출되지 않도록 할 것이며, 회원이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있고, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지를 본 개인정보처리방침에서 자세히 안내 드립니다.
        </ContentStyled>
        <ContentStyled>
        1. 수집하는 개인정보의 항목<br />
        회사는 회원가입, 상담, 서비스 제공 등 해당 서비스의 본질적 기능을 수행하기 위해 아래와 같은 정보를 수집/이용하고 있습니다.<br />
        1) 회원 가입 시 수집하는 정보<br />
        닉네임, 프로필 이미지, 기기식별번호(UDID 또는 IMEI), 출생년월일, 성별, SNS계정 정보 등
        서비스 이용기록, 접속로그, 쿠키, 접속IP, 불량 이용 기록 등 사업처리 과정에서 생성되는 각종 이용정보 및 컨텐츠/광고에 대한 개인 성향 정보
        모바일 서비스의 경우 그 특성상 단말기에 관한 정보(단말기 모델, 이동통신사 정보, 하드웨어 ID, 서비스 이용에 대한 기본 통계)가 자동 수집될 수 있으나, 이는 개인을 식별할 수 없는 형태입니다.
        2) 해당 신청자에 한해 추가로 수집하는 정보<br />
        아래의 정보들은 신청자가 요청한 특정한 목적을 위해서만 이용됩니다. 단, 설문조사 광고 참여, 설치형 광고 참여 시 수집된 정보의 경우 이후 광고 타게팅 목적으로도 이용될 수 있음을 알려 드립니다.<br />
        • 경품 응모 : 이름, 휴대폰번호, 이메일<br />
        • 포인트 현금 환전 : 성명, 휴대폰번호, 은행계좌정보, 주민등록번호<br />
        </ContentStyled>
        <ContentStyled>
        2. 개인정보 수집 목적<br />
        회사가 개인정보를 수집하는 것은 수집한 정보를 바탕으로 원활한 “서비스”를 제공하기 위함입니다. 수집정보는 아래와 같이 정해진 목적에만 이용되며, 이외 다른 목적을 위해서는 사용되지 않습니다. 사용목적이 변경될 시에는 정해진 절차에 따라 회원 동의를 거쳐 변경합니다.
        회원가입, 회원식별, 적립금 적립/사용/정산, 고객문의 응대, 불량회원 부정이용 방지 및 비인가 사용방지 등 본질적인 서비스 운영
        이벤트, 마케팅, 서비스 개선을 위한 연구조사 등 본 서비스 이용을 촉진할 수 있는 마케팅 활동
        회사는 보다 나은 서비스 제공을 위해 다양한 방법(푸시알림 등)을 통해 서비스 관련 정보(콘텐츠, 이벤트 등)를 회원에게 제공할 수 있습니다. 단 회원이 서비스 혜택 정보 제공을 원치 않는다는 의사를 명확히 밝히는 경우 정보 제공을 하지 않으며, 구체적인 수신 거절 방식은 아래를 참고해 주시기 바랍니다.<br />
        • 푸시알림 수신 거절 : 앱 내 MY 페이지 -&gt; 알림 설정 메뉴의 해당 푸시알림 OFF
        </ContentStyled>
        <ContentStyled>
        3. 개인정보의 수집방법<br />
        회사는 다음과 같은 방법으로 개인정보를 수집합니다.
        • 회원가입 및 수정
        • 경품 응모
        • 포인트 현금 환전 신청
        • 로그 분석 프로그램을 통한 생성정보 수집
        • 쿠키(cookie)에 의한 정보 수집
        • 단말기를 통한 자동 수집 등
        </ContentStyled>
        <ContentStyled>
        4. 개인정보 제3자 제공 및 동의<br />
        1) 회사는 사전 동의 없이 회원의 개인정보를 제3자에게 제공하지 않습니다. 단, 아래와 같이 서비스 운영 상 반드시 필요한 경우 및 법령에서 정하는 경우는 회원의 사전 동의 없이 개인정보를 제3자에게 제공할 수 있습니다.<br />
        • 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있을 경우<br />
        • 영업의 양수로 인하여 개인정보 이전이 필요한 경우 (별도의 사전 공지 후 진행)<br />
        • 회원이 사전에 동의 한 경우<br />
        </ContentStyled>
        <ContentStyled>
        5. 개인정보 보관<br />
        1) 회사는 회원이 서비스를 이용하는 기간 또는 관련 법령이 정한 바가 있는 경우 이에 따라 회원의 개인정보를 보유 및 이용합니다.<br />
        2) 회사는 회원이 서비스를 탈퇴하더라도, 아래의 목적을 위해 일정 기간 회원의 정보를 보관할 수 있습니다.<br />
        • 제공하던 고객 지원 서비스를 완결하기 위하여<br />
        • 적용되는 법률 및 규제 의무를 준수하기 위하여<br />
        • 허가되지 않은 부정한 서비스 이용 또는 남용을 예방하기 위하여<br />
        • 회원간 혹은 기타 분쟁을 조정하기 위하여<br />
        </ContentStyled>
        <ContentStyled>
        6. 회원 및 법정대리인의 권리와 그 행사 방법<br />
        1) 회사는 회원 및 법정대리인의 권리를 다음과 같이 보호하고 있습니다.
        언제든지 자신의 개인정보를 조회하거나 수정 요청을 할 수 있습니다. 단, 일부 정보는 수정이 불가함을 고지 드립니다.
        언제든지 개인정보 제공에 관한 동의철회/회원가입 해지를 요청할 수 있습니다.
        정확한 개인정보의 이용 및 제공을 위해 회원의 개인정보 수정 진행 시 수정이 완료될 때까지 회원의 개인정보는 이용되거나 제공되지 않습니다. 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.<br />
        2) 회원 정보 조회, 변경 및 탈퇴 신청은 회사가 운영하는 서비스를 통하여 할 수 있습니다. 이 외 권리행사는 고객센터를 통해 서면, 전화 또는 이메일로 진행할 수 있습니다.
        </ContentStyled>
        <ContentStyled>
        7. 회원의 의무<br />
        1) 회원은 자신의 계정 정보를 외부에 유출되지 않도록 하여야 합니다. 회원 본인의 SNS 계정이 유출되어, 본 서비스 이용 시 불이익이 발생하면 회사는 이로 인해 발생하는 문제에 대해 일체의 책임을 지지 않습니다.<br />
        2) 회원의 개인정보를 최신의 상태로 정확하게 입력하시기 바랍니다. 회원의 부정확한 정보입력으로 발생하는 불이익은 회사에서 책임지지 않습니다.<br />
        </ContentStyled>
        <ContentStyled>
        8. 링크사이트 이용 관련 주의사항<br />
        1) 회사는 회원에게 회사가 운영하는 서비스를 통해 제휴사 또는 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 외부 인터넷 사이트로부터 회원이 제공받는 서비스나 자료의 유용성 또는 회원과 당해 인터넷 사이트의 거래에 대해서 회사는 어떠한 책임도 지지 않습니다.<br />
        2) 링크 페이지 또는 연결된 페이지로 옮겨갈 경우 해당 인터넷 사이트의 개인정보처리방침은 회사와 무관하므로 새로 방문한 인터넷 사이트의 정책을 검토해 보시기 바랍니다.<br />
        </ContentStyled>
        <ContentStyled>
        9. 개인정보보호를 위한 기술적 대책<br />
        1) 회사는 회원의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 최선을 다하고 있으며 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다. 단, 다음의 기술적 대책에도 불구하고 해커의 침입 및 신종 바이러스 침투와 같은 사고 발생 당시의 기술로 예방, 조치할 수 없는 불가항력 사유로 인하여 발생한 개인정보의 분실, 도난, 누출, 변조 또는 훼손에 대하여는 회원에게 책임을 지지 않습니다.<br />
        2) 회원의 개인정보, 파일 및 전송 데이터, 고객수집정보 등의 중요한 데이터는 암호화하는 등 별도의 보안기능을 통해 보호되고 있습니다.<br />
        3) 회사는 암호화 알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안 장치를 채택하고 있습니다.<br />
        4) 해킹 등 외부로부터의 비인가 접근을 통제하기 위하여 침입차단시스템을 설치/운영하여 있으며 서버에의 접근은 업무 역할에 따라 필요한 최소한의 인원으로 제한하고 있습니다.<br />
        </ContentStyled>
        <ContentStyled>
        10. 개인정보 관련 문의처<br />
        본 개인정보취급정책에 대해 궁금하신 사항이 있거나, 개인정보 처리절차에 대한 질문, 의견 또는 우려가 있을 경우 아래 연락처로 연락 주시기 바랍니다.<br />
        • 이메일 : newspic_app_cs@notiplus.co.kr<br />
        • 우편 : 경기도 성남시 분당구 정자일로 72, 303<br />
        </ContentStyled>
        <ContentStyled>
        11. 개인정보 처리 위탁<br />
        1) 회사는 서비스 향상을 위해서 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.<br />
        2) 회사의 개인정보 위탁처리 기관 및 위탁업무 내용은 아래와 같습니다.<br />
        • 수탁업체 : AWS<br />
        • 위탁 업무 내용 : 클라우드 서버 운영 및 관리<br />
        </ContentStyled>
        <ContentStyled>
        12. 개인정보의 보유 및 이용기간<br />
        회사는 서비스를 제공하기 위하여 필요한 기간에 한하여 수집된 정보를 보유·이용합니다. 다만 관계법령(아래 예시한 것에 한정되지 않습니다)에 의해 보관해야 하는 정보는 법령이 정한 기간 동안 보유하며 그 목적 범위 내에서 이용합니다.<br />
        • 보존 항목 : 서비스 이용기록, 접속 로그, 접속 IP 정보 : 3개월 (통신비밀보호법)<br />
        • 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래 등에서의 소비자보호에 관한 법률)<br />
        • 본인확인에 관한 기록 : 6개월 (정보통신망 이용촉진 및 정보보호 등에 관한 법률)<br />
        • 방문에 관한 기록 : 3개월 (통신비밀보호법)<br />
        </ContentStyled>
        <ContentStyled>
        13. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항<br />
        1) 회사는 회원의 계정 생성 시 기기식별번호(디바이스 아이디 또는 IMEI)를 자동으로 수집하게 됩니다.<br />
        2) 이용자가 기기식별번호를 자동으로 수집하는 것을 거부하는 경우에는 일부 서비스이용에 제약이 발생할 수 있습니다.<br />
        </ContentStyled>
        <ContentStyled>
        14. 개인정보의 파기<br />
        1) 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 해당 개인정보를 복구·재생할 수 없도록 지체 없이 파기합니다.<br />
        2) 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br />
        A. 파기절차<br />
        회사는 파기 사유가 발생한 개인정보를 선정하여, 개인정보를 파기합니다.<br />
        B. 파기방법<br />
        회사는 완전파괴(소각·파쇄 등), 전용 소자장비를 이용하여 삭제, 개인정보의 일부만을 파기하는 경우 또는 앞의 방법으로 파기하는 것이 어려울 때에는 다음의 조치를 취합니다.<br />
        • 전자적 파일 형태인 경우 : 개인정보를 삭제한 후 복구 및 재생되지 않도록 관리 및 감독<br />
        • 그 밖의 기록물, 인쇄물, 서면, 그 밖의 기록매체인 경우 : 해당 부분을 마스킹, 천공 등으로 삭제<br />
        </ContentStyled>
        <ContentStyled>
        15. 개인정보의 안전성 확보조치<br />
        회사에서는 고객님의 개인정보를 보호하기 위해 기술적 대책과 관리적 대책을 마련하고 있으며, 이를 적용하고 있습니다.<br />
        1) 기술적 대책<br />
        회사는 고객님의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.
        고객의 개인정보는 비밀번호에 의해 보호되며 파일 및 전송데이터를 암호화하거나 파일 잠금 기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.
        회사는 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL)를 채택하고 있습니다.
        해킹 등 외부침입에 대비하여 침입차단시스템 및 취약점 분석시스템 등을 이용하여 보안에 만전을 기하고 있습니다.
        2) 관리적 대책<br />
        회사는 고객님의 개인정보에 대한 접근권한을 최소한의 인원으로 제한하고 있습니다. 그 최소한의 인원에 해당하는 자는 다음과 같습니다.<br />
        • 이용자를 직접 상대로 하여 마케팅 업무를 수행하는 자<br />
        • 개인정보관리책임자 및 담당자 등 개인정보관리업무를 수행하는 자<br />
        • 기타 업무상 개인정보의 처리가 불가피한 자<br />
        개인정보를 처리하는 직원을 대상으로 새로운 보안 기술 습득 및 개인정보 보호 의무 등에 관해 정기적인 사내 교육 및 외부 위탁교육을 실시하고 있습니다.
        개인정보를 처리하는 임직원들을 대상으로 개인정보보호 의무와 보안에 대한 정기적인 교육이나 캠페인을 실시하고 있습니다.
        개인정보 관련 처리자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을 명확화하고 있습니다.<br />
        3) 물리적 대책 : 전산실, 자료보관실 등의 접근통제
        </ContentStyled>
        <ContentStyled>
        16. 개인정보 관리책임자 안내<br />
        1) 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 회원의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 관리책임자를 지정하고 있습니다.<br />

        개인정보 보호책임자<br />
        • 성명 : 서민응<br />
        • 직책 : 서비스 운영책임자<br />
        • 연락처 : hogwarts@newsncash.com<br />

        개인정보 보호담당자<br />
        • 성명 : 서민응<br />
        • 직책 : 최고기술책임자<br />
        • 연락처 : hogwarts@newsncash.com<br />

        2) 회원은 회사의 서비스(또는 사업)을 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의할 수 있습니다. 회사는 회원의 문의에 대해 지체 없이 답변 및 처리할 것입니다.<br />
        • 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)<br />
        • 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)<br />
        • 경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)<br />
        • 개인정보분쟁조정위원회 (kopico.go.kr / 02-1833-6972)<br />
        </ContentStyled>
        <ContentStyled>
        17. 개정이력<br />
        이 개인정보처리방침은 아래 시행일자부터 시행됩니다.<br />
        - 개인정보처리방침 변경공고일 : 2022년 6월 7일<br />
        - 개인정보처리방침 시행일 : 2022년 6월 7일<br />
        </ContentStyled>
      </ContentBoxStyled>
    </RootStyled>
  );
};

export default PrivacyPolicy;