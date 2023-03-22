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
        We design the best components on the streets known to man!
      </div>
    </>
  );
};

export default WebDesign;
