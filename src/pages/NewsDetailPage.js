import React from 'react';
import {Container} from "@mui/material";
import NewsDetailContainer from "../containers/NewsDetailContainer";

const NewsDetailPage = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <NewsDetailContainer/>
    </Container>
  );
};

export default NewsDetailPage;
