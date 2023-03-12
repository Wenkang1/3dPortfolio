import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Computer from "../ThreeDcomps/Computer"

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

const SystemDev =() => {
    return (
        <>
            <Canvas camera={{fov:85, position:[4,3,8]}} >
                <Stage environment="night" intensity={0.5} adjustCamera={true}>
                    <Computer/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
            <Desc>
                Develpment and Operations of the system
            </Desc>
        </>
    )
}
export default SystemDev