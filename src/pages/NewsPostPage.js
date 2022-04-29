import React from 'react';
import {Container} from "@mui/material";
import NewsPost from "../components/NewsPost";
import {useParams} from "react-router-dom";

const NewsPostPage = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <Container disableGutters maxWidth={false}>
      <NewsPost/>
    </Container>
  );
};

export default NewsPostPage;