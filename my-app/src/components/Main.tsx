import { Box, Button, Container, Fade } from "@mui/material";
import React, { useEffect, useState } from "react";
import { hkcouple, melo, separator } from "../assets/index.ts";
import { mainText } from "../constants/constants.ts";
import { getWindowDimensions } from "../helpers/helper.ts";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Main = ({action} : {action: () => void}) => {
    return (
        <Fade in={true} {...( { timeout: 1500 })}>
            <Container maxWidth={"sm"} >
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                    <Box position={'relative'}>
                        <Box>{mainText}</Box>
                        <Box position={'absolute'} top={'100%'} right={0}>
                            <Button size="large" style={{color: "white"}} onClick={action}><ArrowForwardIcon style={{width: "32px", height : "32px"}}/></Button>
                        </Box>
                    </Box>
                <img src={separator} width="100%" height="300px"/>
                </Box>
            </Container>
        </Fade>
    );
}

export default Main;