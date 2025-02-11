import { Box, Button, Container, Fade } from "@mui/material";
import React, { useState } from "react";
import { melo2, separatorPink } from "../assets/index.ts";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Question = ({windowSize, action} : {windowSize : {width: number, height: number}, action : () => void} ) => {
   const [size, setSize] = useState(40);

    const increaseSize = () => {
        setSize(size + 10);
    }

    return (
        <Fade in={true} {...( { timeout: 500 })}>
            <Container >
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} position={"relative"}>
                <Box fontSize={"32px"} marginBottom={"5rem"} fontFamily={"Dancing Script"}>Do you want to be my valentine?</Box>
                <Box display={"flex"} justifyContent={"space-between"} width={windowSize.width > 430 ? "20%" : "50%"}>
                    <Button variant="contained" color="primary" style={{width: `${size}px`, height: `${size}px`}}>Yes</Button>
                    <Button variant="contained" color="secondary" onClick={increaseSize} style={{width: "40px", height: "40px"}}>No</Button>
                </Box>
                <Box position={'absolute'} top={-100} left={100}>
                    <Button size="large" style={{color: "white", width: "48px", height : "48px"}} onClick={action}><ArrowBackIcon style={{width: "32px", height : "32px"}}/></Button>
                </Box>
                <img src={melo2} width={windowSize.width > 430 ? "30%" : "100%"} height="300px"/>
            </Box>
            {windowSize.width <= 430 && <img src={separatorPink} width={windowSize.width > 430 ? "30%" : "100%"}/> }
            </Container>
        </Fade>
    );
}

export default Question;