import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { hkcouple, melo, separator } from './assets/index.ts';
import { BottomNavigation, BottomNavigationAction, Container, Fade, Grow } from '@mui/material';
import { mainText } from '../src/constants/constants.ts';

const App = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <Box  color={"white"} fontWeight={500} fontFamily={'Roboto'} height={"100dvh"} bgcolor={"#FFC5D9"}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} marginBottom={"20px"}>
        <img src={hkcouple} width="20%" height="10%"/>
        <Box fontSize={windowDimensions.width >= 435 ? "52px" : "32px"} fontFamily={"Dancing Script"}>For you, my princess</Box>
        <img src={melo} width="20%" height="10%"/>
      </Box>
      <Container maxWidth={"sm"} >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
          <Fade in={true} {...( { timeout: 1500 })}>
            <Box>{mainText}</Box>
          </Fade>
          <img src={separator} width="100%" height="300px"/>
        </Box>
      </Container>
    </Box>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default App;
