import React, { useState } from "react";
import styled from "styled-components";
import BackEnd from "./BackEnd";
import WebDesign from "./WebDesign";
import SystemDev from "./SystemDev";
import FrontEnd from "./FrontEnd";

const data =[
    "Front End",
    "Web Design",
    "Back End",
    "System Dev",
];

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
justify-content: center; 
display: flex;
font-size: 60px;
font-weight: 300;
position: relative;
color: black;
`;

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 768px) {
    padding: 20px;
}
`;

const Right = styled.div`
flex: 1;
`;

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;

const ListItem = styled.li`
font-style: 90px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;

@media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px white;
}

::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top:0;
    left:0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
}

&:hover{
    ::after{
        animation: moveText 0.5s linear both;
        @keyframes moveText {
            to{
                width: 100%;
            }
        }
    }
}
`;


const Work = () => {
    const [work, setWork]= useState("Web Design")
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {work == "Front End" ? <FrontEnd/>
                    : work == "Web Design" ? <WebDesign/> 
                    : work == "Back End" ? <BackEnd/> 
                    : <SystemDev/>}
                </Right>
            </Container>
        </Section>
    )
};

export default Work;