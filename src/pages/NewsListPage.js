import React from 'react';
import {Container} from "@mui/material";
import NewsListContainer from "../containers/NewsListContainer";

const NewsListPage = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <NewsListContainer />
    </Container>
  );
};

export default NewsListPage;
