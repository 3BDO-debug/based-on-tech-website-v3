"use client";
import React, { Suspense } from "react";
// React Three Fibers
import { Canvas } from "@react-three/fiber";
// React Three Drei
import { OrbitControls } from "@react-three/drei";
// React Three Postprocessing
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
// Three Js
import * as THREE from "three";
// Michi Model
import BotModel from "./BotModel";

// -----------------------------------------------------------------------------------------------------------

function MichiBot() {
  return (
    <Suspense fallback={<>Loading 3d Model</>}>
      <Canvas
        style={{ height: "55vh", width: "100%", overflow: "hidden" }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      >
        <ambientLight intensity={4} />
        <directionalLight intensity={3} />
        <BotModel />
        <OrbitControls />
        <EffectComposer>
          <BrightnessContrast
            brightness={0.05} // brightness. min: -1, max: 1
            contrast={0.1} // contrast: min -1, max: 1
          />
          <Bloom
            luminanceThreshold={1}
            luminanceSmoothing={0.1}
            intensity={0.13}
            opacity={1}
          />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
}

export default MichiBot;
