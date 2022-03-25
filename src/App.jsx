import React from 'react';
import globalStyles from './Components/GlobalStyles'
import { Playlists } from './Screens/Playlists';


function App() {
  globalStyles();
  return (
      <Playlists/>
  );
}

export default App;
