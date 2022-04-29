import React from 'react';
import ThemePreset from "./presets/ThemePreset";
import RoutePreset from "./presets/RoutePreset";

const App = () => {
  return (
    <ThemePreset>
      <RoutePreset/>
    </ThemePreset>
  );
};

export default App;