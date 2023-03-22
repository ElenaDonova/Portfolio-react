import React from "react";
import Mac from "./Mac";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import "./WebDesign.css";

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="Works__desc">
        Мы разрабатываем лучшие компоненты известные человеку!
      </div>
    </>
  );
};

export default WebDesign;
