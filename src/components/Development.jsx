import React from "react";
import Atom from "./Atom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import "./Development.css"

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Atom />
        </Stage>

        <OrbitControls enableZoom={false} autoRotate/>
      </Canvas>
      <div className="Dev__desc">
        Разрабатываем быстро и с душой!
      </div>
    </>
  );
};

export default Development;
