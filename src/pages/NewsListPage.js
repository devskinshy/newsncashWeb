import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import {useParams} from "react-router-dom";
import NewsList from "../components/NewsList";

const NewsListPage = () => {
  const {category} = useParams();

  useEffect(() => {
    console.log(`create`)
  }, []);

  useEffect(() => {
    console.log(`category`)
  }, [category]);

  return (
    <Container disableGutters maxWidth={false}>
      <NewsList list={[...Array(10)]} />
    </Container>
  );
};

export default NewsListPage;