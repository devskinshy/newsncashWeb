import React from 'react';
import {Box, Divider, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {createNews} from "../utils/news";

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
    height: '100%',
    objectFit: 'cover'
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

const NewsDetail = ({content}) => {
  console.log(content)
  const {
    tl,
    nm,
    pdate,
    body,
    provider_link_page,
    naver_link_page
  } = content;
  return (
    <RootStyled>
      <TitleBoxStyled>
        <TitleStyled variant={'h6'} >
          {tl}
        </TitleStyled>
        <Typography variant={'caption'}>
          {nm} • {pdate}
        </Typography>
      </TitleBoxStyled>
      <Divider />
      <ContentBoxStyled>
        <Box dangerouslySetInnerHTML={{__html: createNews(body)}}/>
      </ContentBoxStyled>
      <LinkBoxStyled spacing={1}>
        <Typography variant={'subtitle2'}>ⓒ {nm}</Typography>
        <Typography variant={'button'}>언론사에서 보기 ></Typography>
        <Typography variant={'button'}>네이버에서 보기 ></Typography>
      </LinkBoxStyled>
    </RootStyled>
  );
};

export default NewsDetail;