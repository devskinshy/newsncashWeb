import React from 'react';
import ThemePreset from "./presets/ThemePreset";
import RoutePreset from "./presets/RoutePreset";
import RNNetwork from "./utils/RNNetwork";
import {networking} from "./config/networking";
import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  return (
    <RNNetwork networking={networking(dispatch)}>
      <ThemePreset>
        <RoutePreset/>
      </ThemePreset>
    </RNNetwork>
  );
};

export default App;
