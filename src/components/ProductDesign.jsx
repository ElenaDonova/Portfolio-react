import React from "react";
import Chair from "./Chair";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import "./ProductDesign.css"


const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Chair />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="Prod__desc">
        Read more about our products.
      </div>
    </>
  );
};

export default ProductDesign;
