"use client";
import React, { useRef } from "react";
// React Three Fibers
import { Canvas, useFrame } from "@react-three/fiber";
// React Three Drei
import { GradientTexture, Icosahedron, OrbitControls } from "@react-three/drei";
// Three js
import * as THREE from "three";

// ---------------------------------------------------------------------------------------------

function Shape(props) {
  const shapeRef = useRef();

  useFrame(() => {
    if (shapeRef.current) {
      shapeRef.current.rotation.x += 0.002;
      shapeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Icosahedron ref={shapeRef} scale={3}>
      <meshBasicMaterial wireframe>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["#7575fd", "#40ffef"]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </Icosahedron>
  );
}

function ContactUsExperience() {
  return (
    <Canvas
      pixelratio={3.0}
      gl={{ antialias: true, toneMapping: THREE.LinearToneMapping }}
      linear
    >
      <ambientLight intensity={1} />
      <OrbitControls />
      <Shape />
    </Canvas>
  );
}

export default ContactUsExperience;
