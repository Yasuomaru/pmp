import React from 'react';
import globalStyles from './Components/GlobalStyles'
// import { Playlists } from './Screens/Playlists';
import ScrollAreaDemo from './Components/Playlist'


function App() {
  globalStyles();
  return (
      <ScrollAreaDemo/>
  );
}

export default App;
