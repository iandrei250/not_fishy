import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Main from './components/Main.tsx';
import { hkcouple, melo } from './assets/index.ts';
import { getWindowDimensions } from './helpers/helper.ts';
import Question from './components/Question.tsx';
import { Fade } from '@mui/material';

const App = () => {
  const [isTimeForQuestion, setIsTimeForQuestion] = useState(false);

  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const changeIsTimeForQuestion = () => {
    setIsTimeForQuestion(!isTimeForQuestion);
  }
  return (
    <Box  color={"white"} fontWeight={500} fontFamily={'Roboto'} bgcolor={"#FFC5D9"}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} marginBottom={"20px"}>
          <img src={hkcouple} width="20%" height="10%"/>
          {!isTimeForQuestion &&  <Fade in={true} {...( { timeout: 1500 })}><Box fontSize={windowDimensions.width >= 435 ? "52px" : "32px"} fontFamily={"Dancing Script"} style={{textShadow: " 0px 0.5px 0.2px black"}}>For you, my princess</Box></Fade>}
          <img src={melo} width="20%" height="10%"/>
        </Box>
        {!isTimeForQuestion ? <Main action={changeIsTimeForQuestion}/> : <Question windowSize={windowDimensions} action={changeIsTimeForQuestion}/>}
    </Box>
  );
}

export default App;
