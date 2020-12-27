import React, { useCallback, useState } from 'react';
import './App.css';

import {MissionContainer} from './components/Mission/index';
import InfoContainer from './components/MissionInfo/index';

const App = () => {

  const [id, setId] = useState(0);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);
  return (
    
   
    <div className="App">
      <MissionContainer handleIdChange={handleIdChange} />
     <InfoContainer id={id}/>
    </div>
   
  );
}

export default App;