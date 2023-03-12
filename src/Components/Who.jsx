import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Cube from "../ThreeDComps/Cube";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
  `;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

`
const Left = styled.div`
    flex: 2;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const Right = styled.div`
    flex: 2.5;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        text-align: center;
        align-items: center;
    }
`;

const Title = styled.h1`
    font-size: 74px;
    @media only screen and (max-width: 768px) {
        font-size: 60px;
    }
`

const WhatWeDo = styled.h1`
    display:flex;
    align-items: center;
    gap: 10px;
`
const Line = styled.img`
    height: 5px;
`
const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`
const Subtitle = styled.h2`
    color: #d9b4d1;
`
const Botton = styled.button`
    background-color: #da4d65;
    color: white;
    font-weight: 700;
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        align-content: center;
        text-align: center;
    }
`

const Who = () => {
    return (
        <Section>
                <Container>
                    <Left>
                        <Canvas camera={{fov:35, position:[3,3,3]}}>
                            <OrbitControls enableZoom={false} autoRotate={true}/>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[3,2,1]}/>
                            <Cube/>
                        </Canvas>
                    </Left>
                    <Right>
                        <Title>This is a moving cube</Title>
                        <WhatWeDo>
                            <Line src="./img/line.png"/>
                            <Subtitle>Who we are</Subtitle>
                        </WhatWeDo>
                        <Desc>
                            this is a description of a moving cube write what 
                            ever you want to 
                        </Desc>
                        <Botton>see our works</Botton>
                    </Right>
                </Container>
        </Section>
    )
};

export default Who;