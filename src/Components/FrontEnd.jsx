import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "../ThreeDComps/Atom" 
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

const FrontEnd =() => {
    return (
        <>
            <Canvas camera={{fov:40, position:[1,1,6]}}>
                <Stage environment="night">
                    <Atom/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
            <Desc>
                Front-End development with React.Js
            </Desc>
        </>
    )
}

export default FrontEnd