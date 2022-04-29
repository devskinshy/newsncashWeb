import React from 'react';
import {styled} from "@mui/material/styles";
import {Box, Divider, Typography} from "@mui/material";

const RootStyled = styled(Box)(({theme}) => ({
  display: 'flex',
}))

const TextBoxStyled = styled(Box)(({theme}) => ({
  flex: 3,
}))

const ImgBoxStyled = styled(Box)(({theme}) => ({
  flex: 1,
  marginLeft: theme.spacing(2),
}))

const TitleStyled = styled(Typography)(({theme}) => ({
  display: '-webkit-box',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
}))

const ImgStyled = styled('img')(({theme}) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}))

const NewsItem = () => {
  return (
    <>
      <RootStyled>
        <TextBoxStyled>
          <TitleStyled variant={'subtitle1'} noWrap>
            123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
          </TitleStyled>
          <Box>
            <Typography variant={'caption'}>
              세계신문 • 2시간 전 • 댓글 0
            </Typography>
          </Box>
        </TextBoxStyled>
        <ImgBoxStyled>
          <ImgStyled src={'https://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_379366_16511323245025499.jpg'} alt={'news poster'} />
        </ImgBoxStyled>
      </RootStyled>
      <Divider/>
    </>
  );
};

export default NewsItem;