import React from "react";
import "./Who.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Who = () => {
  return (
    <div className="Who">
      <div className="Who__container">
        <div className="Who__left">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 3]} />
            <Cube />
          </Canvas>
        </div>

        <div className="Who__right">
          <h1 className="Who__title">Think outside of the box.</h1>
          <div className="Who__about">
            <img src="./img/line.png" alt="" className="Who__line" />
            <h2 className="Who__subtitle">Who we are.</h2>
          </div>
          <p className="Who__desc">
            a creative group of designers and developers with the passion for
            the arts.
          </p>
          <button className="Who__button">See our works</button>
        </div>
      </div>
    </div>
  );
};

export default Who;
