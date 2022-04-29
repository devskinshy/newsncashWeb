import React from 'react';
import {useRoutes} from "react-router-dom";
import {routes} from "../config/routes";

const RoutePreset = () => {
  return (
    <>
      {useRoutes(routes)}
    </>
  );
};

export default RoutePreset;