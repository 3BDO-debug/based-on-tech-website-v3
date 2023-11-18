"use client";
import React, { Suspense } from "react";
// React Three Fibers
import { Canvas } from "@react-three/fiber";
// React Three Drei
import { OrbitControls } from "@react-three/drei";
// Three Js
import * as THREE from "three";
// @Mui
import { useMediaQuery, useTheme } from "@mui/material";
// 3D Models
import AbstractModel from "./AbstractModel";

// -----------------------------------------------------------------------------------------------------------

function HeroExperience() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Suspense fallback={<>Loading 3d Model</>}>
      <Canvas
        style={{
          height: isMobile ? "35vh" : "55vh",
          width: "100%",
          overflow: "hidden",
        }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      >
        <ambientLight intensity={4} />
        <directionalLight intensity={3} />
        <AbstractModel />
      </Canvas>
    </Suspense>
  );
}

export default HeroExperience;
