import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Test = () => {
  return (
    <div
      style={{ scrollSnapAlign: "center", height: "100%", width: "100%" }}
      className="Test"
    >
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default Test;
