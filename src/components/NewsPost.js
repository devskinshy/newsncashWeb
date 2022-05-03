import React from 'react';
import {Box, Divider, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {createNews} from "../utils/news";

const content = "<div id=\"articeBody\" class=\"article_body font1 size3\"> \n <table align=\"center\" border=\"0\" class=\"class_div_main image\" style=\";text-align:center;\" width=\"500\">\n  <tbody>\n   <tr>\n    <td> <span class=\"end_photo_org\"> <img id=\"img1\" src=\"https://ssl.pstatic.net/mimgnews/image/022/2022/05/03/20220503513258_20220503152504533.jpg?type=w540\" onerror=\"javascript:this.src=&quot;https://ssl.pstatic.net/static.news/image/news/2009/press/empty.png&quot;;javascript:this.height=&quot;0px&quot;;javascript:imageErrorDetector(1, &quot;https://ssl.pstatic.net/mimgnews/image/022/2022/05/03/20220503513258_20220503152504533.jpg&quot;);\"> </span></td>\n   </tr>\n  </tbody>\n </table> 배우 한소희가 3일 오후 서울 송파구 잠실 롯데시그니엘호텔에서 진행된 아티스트 브랜드 샬롯 틸버리 ’필로우 토크 파티’ 이벤트에 참석해 포즈를 취하고 있다.\n <br>\n <br> \n</div>";

const RootStyled = styled(Box)(({theme}) => ({
  padding: theme.spacing(2)
}))

const TitleBoxStyled = styled(Box)(({theme}) => ({
  paddingBottom: theme.spacing(1)
}))

const ContentBoxStyled = styled(Box)(({theme}) => ({
  paddingTop: theme.spacing(2),
  '.class_div_main.image': {
    width: '100%'
  },
  '.media_end_summary' : {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: '26px 10px 27px 4px',
    paddingLeft: '14px',
    fontWeight: 'normal',

    '&::before' : {
      position: 'absolute',
      left: 0,
      top: 6,
      bottom: 5,
      width: 2,
      background: 'rgb(48, 48, 56)',
      content: '""'
    }
  },
  '.end_photo_org img' : {
    width: '100%',
    height: '100%'
  },
  '.end_photo_org em' : {
    display: 'block',
    paddingTop: '11px',
    color: '#999 !important',
    fontSize: '12px !important',
    lineHeight: '21px !important',
    textAlign: 'center'
  },
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
          <Box dangerouslySetInnerHTML={{__html: createNews(content)}}/>
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
