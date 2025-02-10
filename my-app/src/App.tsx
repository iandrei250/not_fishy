import React from 'react';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { hkcouple } from './assets/index.ts';
import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import { mainText } from '../src/constants/constants.ts';



const App = () => {
  return (
    <Box fontFamily={'Roboto'} height={"100dvh"} bgcolor={"#FFC5D9"}>
      <Box>
        <img src={hkcouple}/>
      </Box>
      <Container maxWidth={"sm"}>
        <Box>{mainText}</Box>
      </Container>
    </Box>
  );
}

export default App;
