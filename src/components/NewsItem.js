import React from 'react';
import {styled} from "@mui/material/styles";
import {Box, Divider, Typography} from "@mui/material";
import {RNSender} from "../utils/RNNetwork";

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

const NewsItem = ({news}) => {
  const {
    tl,
    nm,
    pdate,
    image_link,
  } = news;

  return (
    <>
      <RootStyled onClick={() => {RNSender('TEST', news)}}>
        <TextBoxStyled>
          <TitleStyled variant={'subtitle1'} noWrap>
            {tl}
          </TitleStyled>
          <Box>
            <Typography variant={'caption'}>
              {nm} • {pdate}
            </Typography>
          </Box>
        </TextBoxStyled>
        {
          image_link && (
            <ImgBoxStyled>
              <ImgStyled src={image_link} alt={'news poster'} />
            </ImgBoxStyled>
          )
        }
      </RootStyled>
      <Divider/>
    </>
  );
};

export default NewsItem;
