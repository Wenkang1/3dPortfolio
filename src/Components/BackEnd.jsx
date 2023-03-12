import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Coffee from "../ThreeDcomps/Coffee"
import styled from "styled-components";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    bottom: 100px;
    right: 100px;
    font-size: 15px;
    @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
`
const BackEnd =() => {
    return (
        <>
            <Canvas camera={{fov:60, position:[3,2,1]}}>
                <Stage environment="night" intensity={0.5}>
                    <Coffee/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate={true} />
            </Canvas>
            <Desc>
                Back-End development with Java and Spring FrameWork
            </Desc>
        </>
    )
}
export default BackEnd