import React from 'react';
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";

const RootStyled = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100vw',
  minHeight: '100vh'
});

const Layout = () => {
  return (
    <RootStyled disableGutters maxWidth={false}>
      <Outlet/>
    </RootStyled>
  );
};

export default Layout;
