import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="Hero">
      <Navbar />
      <div className="Hero__container">
        <div className="Hero__left">
          <h1 className="Hero__title">Think. Make. Love</h1>
          <div className="Hero__about">
            <img src="./img/line.png" alt="" className="Hero__line" />
            <h2 className="Hero__subtitle">What we do.</h2>
          </div>
          <p className="Hero__desc">
            We enjoy creating delightful, human-centered digital experience.
          </p>
          <button className="Hero__button">Learn more</button>
        </div>

        <div className="Hero__right">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 3]} />
            <Sphere args={[1, 100, 200]} scale={1.4}>
              {" "}
              <MeshDistortMaterial
                color="#220736"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img className="Hero__img" src="./img/moon.png" alt="austranaut" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
