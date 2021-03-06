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

const ContentBoxStyled = styled(Box)(({ theme }) => ({}));

const ContentStyled = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  marginTop: 10,
}));

const TOS = () => {
  return (
    <RootStyled>
      <TitleBoxStyled>
        <TitleStyled variant={"h1"}>서비스 이용약관</TitleStyled>
      </TitleBoxStyled>
      <ContentBoxStyled>
        <ContentStyled>
        시행일 : 2022년 6월 7일
        </ContentStyled>
        
        <ContentStyled>
        제1조 (목적)<br />
        이 약관은 주식회사 시그널코리아(이하 “회사”)가 제공하는 뉴스앤캐시 앱 “서비스”를 이용함에 있어 “회사”와 “회원”간의 권리, 의무 및 책임사항과 절차 등의 규정을 목적으로 합니다.
        </ContentStyled>
        <ContentStyled>
        제2조 (용어의 정의)<br />
        이 약관에서 사용하는 용어의 정의는 다음 각 항과 같으며, 정의되지 않은 용어에 대한 해석은 관계법령 및 홈페이지 내 별도 안내에서 정하는 바에 따릅니다.<br />
        1. “서비스”란 “회원”의 단말기(모바일, 태블릿PC 등 각종 유무선 장치를 포함)를 통하여 “회사”가 제공하는 뉴스앤캐시 앱 및 관련 “서비스” 일체를 의미합니다.<br />
        2. “회원”이란 “서비스”에 접속하여 이 약관에 따라 “회사”와 이용계약을 체결함으로써 “서비스”를 이용하는 고객 여러분을 의미합니다.<br />
        3. “뉴스앤캐시 계정”이란 “회원”이 “서비스”에 로그인한 이후 이용하는 “서비스” 이용 이력을 “회원” 별로 관리하기 위해 설정된 회원 식별 단위입니다.<br />
        4. “포인트” 및 “응모권”이란 “회원”이 “회사”가 정하는 일정한 행위를 마친 때에 시스템에 적립되는 “서비스” 상의 데이터로서 소멸 전까지 “서비스”상에서 경품의 응모 등에 사용할 수 있는 것을 말하며 재화로서의 가치는 없습니다.<br />
        5. “경품”이란 “회원”이 보유한 “포인트” 또는 “응모권”을 사용하여 응모할 수 있는 다양한 서비스(기프티콘, 쿠폰 등)를 의미합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제3조 (약관의 명시, 효력 및 개정)<br />
        1. 회사는 서비스 화면에 게시하여, 회원에게 공지함으로써 효력이 발생합니다.<br />
        2. 회사는 “약관의 규제에 관한 법률” "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br />
        3. 회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 14일 전부터 적용일자까지 공지합니다.<br />
        4. 회사는 개정 약관의 공지를 규정된 방법 중 1가지 이상의 방법으로 회원에게 명확하게 공지하도록 합니다.<br />
        A. 서비스 화면 내 게시<br />
        B. 회사가 정한 기타 공지 방법(푸시알림) 등<br />
        5. 본 약관의 개정과 관련하여 이의가 있는 회원은 회원탈퇴를 할 수 있습니다. 단, 이의가 있음에도 불구하고 본 조 제1항및 제2항에 따른 회사의 공지가 있은 후 14일 이내에 회원탈퇴 및 거부의사를 표명하지 않은 회원은 개정 약관에 동의한 것으로 봅니다.<br />
        6. 본 조의 규정에 의하여 개정 약관은 원칙적으로 그 효력 발생일로부터 장래를 향하여 유효합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제4조 (이용계약의 체결 및 “뉴스앤캐시 계정”의 생성)<br />
        1. 서비스 이용계약은 회원이 본 약관 및 개인정보취급방침 등에 동의를 선택하고, 정해진 신청양식을 작성하여 서비스 이용을 신청한 경우, 회사가 이를 승낙함으로써 성립합니다. 필요한 경우 “회사”는 본인확인기관을 통한 실명확인 및 본인인증을 요청할 수 있으며, 약관을 읽지 않음으로 인한 피해의 책임은 전적으로 회원에게 있습니다.<br />
        2. 회원은 제1항의 이용 신청 시 반드시 실제정보를 기재하여야 하며, 허위정보를 기재한 회원의 경우 서비스 이용이 제한되거나 제5조에 의거 회원과의 서비스 이용계약을 해지할 수 있습니다.<br />
        3. 만 14세 미만의 연소자는 뉴스앤캐시 앱의 회원가입, 경품 응모 및 환전신청이 불가능 합니다.<br />
        4. 본 이용약관 제16조 (회원의 의무)에서 지정한 회원의 의무에 반하는 행위를 한 회원의 계정은 사전 통지 없이 삭제될 수 있으며, 당해 회원은 서비스 이용금지 및 법적 제재를 받을 수 있습니다.<br />
        5. 회사는 회원들에게 원활한 서비스 제공을 위해 회원에게 푸시알림 등을 통한 광고 및 서비스 관련 각종 정보를 제공할 수 있습니다. 회원이 원치 않는 경우 언제든지 무선서비스를 통해서 수신거부를 할 수 있습니다.<br />
        6. 회사는 법률에서 정한 특별한 규정이 없는 경우를 제외하고 기본적으로 회원의 별도 동의 없이 회원정보를 제3자에게 제공하지 않습니다.<br />
        </ContentStyled>
        <ContentStyled>
        제5조 (회원정보의 변경)<br />
        1. 회원은 서비스 내 프로필변경 화면을 통하여 본인의 개인정보를 열람하고 수정할 수 있습니다. 단, 단말기 식별번호 등은 수정이 불가능합니다.<br />
        2. 회원은 선택적 수집 정보를 제외하고 본인의 개인정보를 허위로 설정하여 부당한 방법으로 이익을 취할 경우, 당사자의 포인트는 소멸되며 서비스 이용이 제한될 수 있습니다.<br />
        </ContentStyled>
        <ContentStyled>
        제6조 (이용계약의 해지, 자격상실 및 정지)<br />
        1. 회원은 본인 희망 시 서비스 내 회원탈퇴 화면을 통하여 계약을 해지하거나 서비스의 이용중지를 요청할 수 있습니다.<br />
        2. 회원이 서비스 이용중지를 요청할 경우, 서비스 내 탈퇴 기능 등 회사가 지정한 절차를 거쳐 신청해야 합니다.<br />
        3. 회사는 다음 각 호에 해당하는 회원이 확인될 경우, 당해 회원에 대한 사전 통보 없이 회원자격 유보/중지/해지 등의 조치를 취할 수 있으며, 이 경우 회원은 서비스와 관련된 모든 권리를 주장할 수 없고, 이후 회원 재가입이 금지될 수 있습니다.<br />
        A. 회원가입 신청 시에 허위의 내용을 등록한 경우<br />
        B. 포인트 부정적립 및 부정사용 등 서비스를 부정한 방법 또는 목적으로 이용한 경우<br />
        부정 적립이란 회원이 실제로 콘텐츠를 읽거나 시청하지 않았음에도 불구하고 회원에게 적립된 경우 또는 설정된 포인트 금액 이상이 지급된 경우, 또는 부정한 방법으로 추천인을 모집하여 포인트가 지급된 경우를 말합니다. 회원은 포인트를 지급받기 위해 정상적인 방법으로 서비스를 이용하여야 하며 회사가 제공하는 절차를 이행해야 합니다. 그 이외의 경우에는 부정적립으로 간주합니다.
        C. 회사가 서비스 내 공지사항을 통하여 공시하는 저작권 규정을 위반하는 경우<br />
        D. 회원이 사망한 경우<br />
        E. 다른 회원의 서비스 홈페이지 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우<br />
        F. 서비스 내 다른 회원 및 회사의 임직원에 대한 위협/희롱/지속적인 고통 및 불편을 끼치는 경우<br />
        G. 서비스 내에서 회사의 운영자/임직원 또는 회사를 사칭한 경우<br />
        H. 회원 가입 신청 시 제3자의 개인정보를 이용 및 불법으로 도용한 경우<br />
        I. 서비스 이용 중 법률 위반행위 및 사회의 안녕/질서/미풍양속을 해치는 행위를 한 경우<br />
        J. 제3자의 특허권, 상표권, 저작권, 영업비밀 등 지적재산권을 포함한 기타 권리를 침해하는 행위를 한 경우<br />
        K. 회사로부터 특별한 권한을 부여 받지 않고 회사의 홈페이지 나 클라이언트 프로그램을 변경 또는 회사의 서버를 해킹하는 등의 시스템을 위협하는 행위를 한 경우<br />
        L. 회사의 사전승인 및 다른 회원에 대한 사전 동의 없이 Active X, 스파이웨어, 애드웨어 등의 프로그램을 강제로 설치하게 한 경우<br />
        M. 서비스 방문자나 타 회원의 의사와 무관하게 특정 사이트로 방문을 유도한 경우<br />
        N. 서비스 이용 중 불법복제 소프트웨어, 제3자의 저작물을 밀매하는 등의 관련 법률에 저촉되는 행위를 한 경우<br />
        O. 인종/성/광신/이적 등의 반 사회적/도덕적 편견에 기반한 단체를 결성하는 행위를 한 경우<br />
        P. 다른 회원의 계정 등의 개인정보를 수집하는 행위<br />
        Q. 범죄와의 결부, 관련 법령 위반 활동으로 판단되는 행위를 한 경우<br />
        R. 다른 회원으로 하여금 상기 F항 내지 Q항의 금지행위를 하도록 유발 및 조장하는 활동을 한 경우<br />
        X. 본 약관에 규정된 회원의 의무를 위반한 경우<br />
        Y. 기타 당사가 공지한 서비스 운영 정책을 위반한 경우<br />
        </ContentStyled>
        <ContentStyled>
        제7조 (회원탈퇴와 포인트 처리)<br />
        1. 본 약관 제6조 제1항에 정해진 방법으로 탈퇴를 하고자 하는 회원은 회원탈퇴 요청 후 회사가 제공하는 절차를 이행하면 탈퇴를 하게 됩니다. 이때 잔여포인트 및 응모권은 자동으로 소멸되고 회원가입 시 작성한 기본정보는 영구 소멸됩니다.<br />
        2. 본 약관 제6조 제2항에 정해진 바에 의하여 자격상실 된 회원은 기 적립된 가용 포인트를 자격 상실일로부터 사용할 수 없고 추후 해당 포인트는 자동 소멸됩니다.<br />
        3. 본 조 제2항의 규정에도 불구하고 본 약관 제 6조 제2항 B호에 해당하여 회사로부터 자격상실 통보를 받은 회원의 포인트 중 부정 적립된 포인트 및 응모권은 자격상실 통보와 동시에 소멸하고, 이에 대하여 회원은 어떠한 권리도 주장할 수 없습니다. 또한, 해당 회원은 이후 재가입이 금지될 수 있습니다.<br />
        </ContentStyled>
        <ContentStyled>
        제8조 (서비스 내용 및 제공)<br />
        1. 회사가 본 약관에 정해진 바에 따라 회원에게 제공하는 서비스는 다음 각 호와 같으며 서비스를 이용하고자 하는 고객은 본 약관에 정해진 제반 절차를 거쳐 회원으로 가입하여야 합니다.<br />
        A. 적립 서비스<br />
        회원은 본 약관에 정해진 바에 따라 모바일을 통해 콘텐츠를 읽거나, 시청하고 제공되는 절차를 이행할 경우 포인트를 적립 받을 수 있습니다.<br />
        B. 현금 환전 서비스<br />
        회원은 본 약관에 정해진 바에 따라 기 적립된 포인트를 현금으로 환전할 수 있습니다.<br />
        C. 경품 응모 서비스<br />
        회원은 본 약관에 정해진 바에 따라 기 적립된 포인트로 제휴된 경품 이벤트에 응모할 수 있습니다.<br />
        D. 기타<br />
        회사는 상기 각 호의 서비스 이외에도 추가적인 서비스를 개발하여 회원에게 제공할 수 있습니다.<br />
        </ContentStyled>
        <ContentStyled>
        제9조 (서비스의 변경 및 중단)<br />
        1. 회사는 서비스의 내용, 품질, 또는 기술적 사양 등에 대해 회사의 합리적 판단에 따라 변경할 수 있습니다.<br />
        2. 회사는 아래 각 호에 해당하는 사유가 발생한 경우에는 본 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.<br />
        A. 서비스 설비 점검, 보수 또는 공사로 인하여 부득이한 경우<br />
        B. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우<br />
        C. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등 광고서비스 이용에 지장이 있는 때<br />
        D. 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우<br />
        3. 회사는 제1항 및 제2항의 각호 규정에 의하여 서비스를 변경하거나 서비스 이용을 제한 및 중지할 때에는 그 사유 및 제한기간 등을 회원에게 서비스 내 공지사항 및 푸시알림을 발송하는 등의 방법으로 알립니다.<br />
        </ContentStyled>
        <ContentStyled>
        제10조 (포인트 적립)<br />
        1. 회사에서 제공하는 콘텐츠를 단말기를 통해 회원본인이 읽고, 시청하거나 제휴 광고에서 요구하는 액션을 수행하면 포인트를 적립 받게 됩니다. 포인트 지급을 위하여 특정 회원의 자격요건이 요구될 수 있습니다.<br />
        2. 회사 내규 상에 적립 금액으로 명시된 금액만큼의 포인트가 쌓이며, 적립 금액이 명시되지 않은 액션의 경우 확률적으로 차등의 금액이 지급될 수 있습니다. 각 액션별 지급 포인트 금액은 사전 예고없이 변경될 수 있습니다.<br />
        3. 서버에 규정된 적립 금액과 클라이언트 앱 서비스 상 명시된 적립 금액과 차이가 나는 경우 서버에 규정된 적립 금액이 우선 적용되며, 서버와 클라이언트 앱과의 비동기화로 인한 포인트 차이는 보상하지 않습니다.<br />
        4. 포인트 적립과 관련하여 발생하는 제세공과금은 회원이 부담하는 것을 원칙으로 합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제11조 (포인트의 현금 환전 및 경품 응모)<br />
        1. 회사가 정한 일정액 이상의 적립금을 보유한 회원은 회사가 정한 절차에 따라 보유하고 있는 가용 적립금을 회사가 정한 현금 환전 비율로 현금으로 환산한 금액을 지급받을 수 있습니다. 이 경우 회사는 회원이 지정하는 은행계좌에 상기 금액을 입금함으로써 적법하게 지급한 것으로 봅니다.<br />
        2. 포인트의 현금 환전과 관련하여 환전 비율은 회사 내규에 따라 책정되며, 사전예고 없이 변경될 수 있습니다.<br />
        3. 포인트의 현금 환전 및 경품 당첨에 따라 발생하는 제세공과금은 회원이 부담합니다.<br />
        4. 회원의 현금 환전 및 경품 응모에 대한 입력 정보가 유효하지 않아 환급 받지 못하는 경우 귀책사유는 회원에게 있으며 회사는 이를 보상하지 않습니다.<br />
        5. 회사가 제휴한 경품을 가용포인트를 이용하여 응모 참여하여 당첨되는 경우 해당 바코드가 전송되거나, 우편으로 발송됨으로써 적법하게 지급한 것으로 봅니다.<br />
        6. 회원은 포인트를 타인에게 양도하거나 대여 또는 담보의 목적으로 이용할 수 없습니다. 다만, 회사가 인정하는 적법한 절차를 따른 경우는 예외로 합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제12조 (포인트 정정, 취소 및 소멸)<br />
        1. 적립금에 오류가 발생한 경우 회원은 오류 발생일로부터 90일 이내에 회사에 정정요구를 할 수 있으며, 회사는 정당한 요구임이 확인된 경우 정정요구일로부터 90일 이내에 정정하여야 합니다.<br />
        2. 클라이언트 변경, 해킹, 매크로 등 회사가 허용하지 않는 부정한 방법으로 적립금을 적립하신 경우, 부정 적립이 되어 그 적립금은 0으로 정정됩니다.<br />
        3. 적립된 날로부터 12개월 간 사용되지 않은 적립금은 차례로 소멸됩니다.<br />
        4. 적립금의 적립 또는 사용이 없는 비활성화 상태가 3개월 이상 계속된 회원의 적립금은 소멸될 수 있습니다.<br />
        5. 환전 신청 상태 전환 및 안내 고지 후 필요 서류 미제출 또는 부정 적립에 대한 소명이 이루어지지 않아 환전 신청 상태가 90일을 초과하는 경우, 이를 회원 본인의 귀책사유로 판단하여 해당 환전 신청 건은 무효가 되며 신청한 수익은 자동적으로 소멸 처리됩니다.<br />
        </ContentStyled>
        <ContentStyled>
        제13조 (서비스의 변경 등)<br />
        1. 회사는 운영상, 기술상의 필요에 따라 제공하는 서비스의 전부 또는 일부를 변경, 일시중단 또는 종료(이하 ‘변경 등’)할 수 있으며, 이에 대하여 약관이나 법령에 다른 규정이 없는 한 회원에게 별도의 보상을 하지는 않습니다.<br />
        2. 서비스를 변경 등을 하는 경우 사전에 통지함을 원칙으로 하지만, 예측이 불가능한 경우에는 예외적으로 사후에 통지할 수 있습니다. 변경 등의 사유 또는 내용을 구체적으로 공지하기 어려운 경우에는 그 이유를 밝힙니다.<br />
        3. 서비스 변경 등의 통지일로부터 서비스 변경 등이 있는 날까지 서비스의 일부가 제한될 수 있습니다.<br />
        4. 서비스가 종료되는 경우, 회원은 적립금을 서비스 종료일까지 소진하여야 하며, 서비스 종료일 이후로는 자동 소멸되어 적립금에 관한 권리를 주장할 수 없습니다.<br />
        </ContentStyled>
        <ContentStyled>
        제14조 (뉴스앤캐시 앱 계정(이하 ‘계정’)<br />
        1. 회원은 자신의 계정을 선량한 관리자로서의 주의 의무를 다하여 관리하여야 합니다. 회원 본인의 계정을 타인이 사용하게 하여서는 안 되며, 계정 관리에 주의를 기울여야 합니다.<br />
        2. 회사는 회원의 최소한의 개인정보만 수집하므로 회원이 계정을 분실한 경우 이를 회원의 다른 개인정보와 대조하여 찾는 것이 불가능합니다. 따라서 계정 분실에 대한 책임은 전적으로 회원에게 있습니다.<br />
        3. 회사는 회원이 자신의 계정을 소홀히 관리하거나 제3자에게 이용을 승낙함으로써 발생하는 손해에 대해 어떠한 책임도 부담하지 않습니다.<br />
        4. 회원이 자신의 계정을 도난당하거나 제3자가 사용하고 있음을 인지한 경우 즉시 회사에 통지하고 회사의 안내를 따라야 합니다.<br />
        5. 전항의 경우 회사에 통지하지 않거나, 안내에 따르지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.<br />
        </ContentStyled>
        <ContentStyled>
        제15조 (회사의 의무)<br />
        1. 회사는 관련 법령 또는 이 약관을 위반하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다합니다.<br />
        2. 회사는 회원의 개인정보 보호를 위하여 보안시스템을 갖추어야 하며 개인정보취급방침을 공시하고 준수하겠습니다.<br />
        3. 회사는 서비스 이용과 관련한 회원의 의견이나 불만사항 등이 정당하다고 인정할 경우 이를 처리하여야 합니다. 처리된 결과는 푸시알림 등을 통해 회원에게 통보합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제16조 (회원의 의무)<br />
        회원은 서비스 이용과 관련하여 다음의 행위를 하여서는 안됩니다.<br />
        1. 서비스 이용 관련 제반 신청 및 변경행위 시 허위내용의 등록<br />
        2. 적립금을 부정한 방법으로 적립하거나 사용<br />
        3. 다른 회원의 서비스 이용을 방해하는 등 전자거래질서를 위협<br />
        4. 서비스 내외에서 회사 또는 회사의 운영자, 임직원 등을 사칭<br />
        5. 서비스 내 게시된 각종 정보의 무단 변경, 삭제 등 훼손<br />
        6. 일체의 가공행위를 통해 서비스를 분해, 변경, 모방<br />
        7. 회사 기타 제3자의 지적재산권을 포함하여 권리를 침해<br />
        8. 다른 회원의 개인정보 수집하거나 명예를 손상<br />
        9. 회사의 명시적인 동의 없이 광고를 전송하거나 외설, 폭력적인 정보 등을 노출<br />
        10. 기타 약관상의 의무를 불이행하는 행위 또는 불법, 부당한 행위<br />
        </ContentStyled>
        <ContentStyled>
        제17조 (저작권의 귀속 및 이용제한)<br />
        1. 회사의 상표, 로고, 제공하는 서비스 및 광고내용에 관한 지적재산권 등의 권리는 회사에 귀속합니다.<br />
        2. 회원은 서비스를 이용함으로써 얻은 정보를 “회사”의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하도록 하여서는 안 됩니다.<br />
        </ContentStyled>
        <ContentStyled>
        제18조 (서비스관련 분쟁해결)<br />
        1. 회사는 서비스 이용과 관련한 회원의 의견이나 불만사항을 신속하게 처리합니다. 단, 신속한 처리가 곤란한 경우에는 그 사유와 처리일정을 통보하여 드립니다.<br />
        2. 회사와 회원간에 발생한 분쟁은 전자거래기본법에 의해 설치된 전자거래분쟁 조정위원회의 조정절차에 의해 해결할 수 있습니다.<br />
        3. 모바일 상품권을 획득한 회원이 회사가 제공하지 않는 방법으로 제3자에게 모바일 상품권을 전송함으로써 모바일 상품권의 수신자와 제3자 간에 모바일 상품권의 사용 권한에 관한 분쟁이 발생한 경우, 회사는 이에 관여하지 않으며 모바일 교환권의 당첨자와 해당 제3자가 해결하여야 합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제19조 (서비스 종료)<br />
        1. 서비스를 종료하고자 할 경우, 회사는 서비스를 종료하고자 하는 날로부터 3개월 이전에 본 약관 제3조 제4항에 규정된 통지방법을 준용하여 회원에게 알려드립니다.<br />
        2. 본 조 제1항에 따른 서비스 종료 통지가 있은 날(이하 "통지일") 현재 기 적립된 포인트는 회사가 별도 지정하는 날("서비스 종료일")까지 본 약관이 정하는 바에 따라 현금 환급을 받거나 경품 응모 등을 통해 소진하여야 합니다. 서비스 종료일까지 사용하지 않은 포인트는 자동으로 소멸됩니다.<br />
        3. 본 조 제1항에 따른 서비스 종료 통지일 이후 회원은 회사로부터 서비스를 제공받지 못합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제20조 (준거법 및 합의관할)<br />
        1. 본 약관에서 정하지 않은 사항과 본 약관의 해석에 관하여는 대한민국 법 및 상관례에 따릅니다.<br />
        2. 서비스 및 본 약관과 관련한 제반 분쟁 및 소송은 서울중앙지방법원 또는 민사소송법상의 관할법원을 제1심 관할법원으로 합니다.<br />
        </ContentStyled>
        <ContentStyled>
        제21조 (개인정보보호 의무)<br />
        회사는 관련법령이 정하는 바에 따라서 회원 등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다. 회원의 개인정보보호에 관해서는 관련법령 및 회사가 정하는 개인정보처리방침에서 정한 바에 의하며, 회원이 상시 확인할 수 있도록 앱 내에 공지하고 있습니다.<br />
        </ContentStyled>
        <ContentStyled>
        부칙<br />
        본 약관은 2022년 6월 7일부터 적용됩니다.<br />
        </ContentStyled>
      </ContentBoxStyled>
    </RootStyled>
  );
};

export default TOS;
