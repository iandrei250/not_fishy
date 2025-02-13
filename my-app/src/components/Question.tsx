import { Box, Button, Container, Fade, Grow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { happyMelo, melo2, sad, separatorPink } from "../assets/index.ts";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Question = ({windowSize, action} : {windowSize : {width: number, height: number}, action : () => void} ) => {
   const [size, setSize] = useState(40);
   const [isYes, setIsYes] = useState(false);
   const [isNo, setIsNo] = useState(false);
   
    const increaseSize = () => {
        setSize(size + 10);
    }

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }, []);

    return (
        <Fade in={true} {...( { timeout: 500 })}>
            <Container style={{ height: "100vh"}}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} position={"relative"}>
                <Box fontSize={"32px"} marginBottom={"5rem"} fontFamily={"Dancing Script"} style={{textShadow: " 0px 0.5px 0.2px black"}}>Do you want to be my valentine?</Box>
                <Box display={"flex"} justifyContent={"space-between"} width={windowSize.width > 430 ? "20%" : "50%"}>
                    <Button variant="contained" color="primary" style={{width: `${size}px`, height: `${size}px`}} onClick={() => {setIsYes(true)}}>Yes</Button>
                    {isNo ? <img src={sad} width={"38px"} height="38px"/> 
                    : 
                    <Button variant="contained" color="secondary" onClick={() => setIsNo(true)} style={{width: "40px", height: "40px"}}>No</Button>}
                    
                </Box>
                <Box position={'absolute'} top={-100} left={100}>
                    <Button size="large" style={{color: "white", width: "48px", height : "48px"}} onClick={action}><ArrowBackIcon style={{width: "32px", height : "32px"}}/></Button>
                </Box>

                {isYes ? 
                 <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1000 })}>
                    <img src={happyMelo} width={windowSize.width > 430 ? "30%" : "100%"} height="300px"/>
                </Grow>
                : <img src={melo2} width={windowSize.width > 430 ? "30%" : "100%"} height="300px"/>}
               
            </Box>
            {windowSize.width <= 430 && <img src={separatorPink} width={windowSize.width > 430 ? "30%" : "100%"}/> }
            </Container>
        </Fade>
    );
}

export default Question;