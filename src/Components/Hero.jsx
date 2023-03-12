import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
        height: 200hv;
        
    }
`;

const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`
const Left = styled.div`
flex: 2;
display:flex;
flex-direction: column;
justify-content: center;
gap: 20px;
margin: 100px;

@media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
}
`

const Right = styled.div`
flex: 2.5;
position: relative;
@media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
display:flex;
align-items: center;
gap: 10px;
`
const Line = styled.img`
height: 5px;
`
const Desc = styled.p`
font-size: 23px;
color: lightgray;
@media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`
const Subtitle = styled.h2`
  color: #b37e9b;
`;

const Botton = styled.button`
background-color: #da4d65;
color: white;
font-weight: 700;
width: 120px;
padding: 15px;
border: none;
border-radius: 5px;
cursor: pointer;
`
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

@keyframes animate {
    100%{
        transform: translateY(30px)
    }
}

`

const Hero = () => {
    return (
        <Section>
            <Navbar/>
              <Container>
                    <Left>
                        <Title>Think make solve</Title>
                        <WhatWeDo>
                            <Line src="./img/line.png"/>
                            <Subtitle>what we do</Subtitle>
                        </WhatWeDo>
                        <Desc>this is a description to describe yourself</Desc>
                        <Botton>Learn more</Botton>
                    </Left>
                    <Right>
                    <Canvas camera={{fov:45, position:[3,3,3]}}>
                            <OrbitControls enableZoom={false} autoRotate={true}/>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[3,2,1]}/>
                            <Sphere args={[1,100,100]} scale={1}>
                              <MeshDistortMaterial
                              color="#494a97" attach="material" distort={0.8} speed={3}
                              />
                            </Sphere>

                    </Canvas>
                    <Img src="./img/moon.png"/>
                    </Right>
                </Container> 
        </Section>
    )
};

export default Hero;