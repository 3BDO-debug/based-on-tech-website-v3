import React, { Suspense } from "react";
// @Mui
import { Box } from "@mui/material";
// Three js
import * as THREE from "three";
// React Three Fibers
import { Canvas } from "@react-three/fiber";
// React Three Drei
import {
  Center,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useGLTF,
  useTexture,
} from "@react-three/drei";
// React Three Postprocessing
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
//
import TechStacksModel from "./TechStacksModel";

// ----------------------------------------------------------------------------------------------------------------------

function TechnologiesExperience() {
  return (
    <Suspense fallback={<>Tech Stacks Model</>}>
      <Canvas
        style={{ height: "50vh", width: "100%" }}
        pixelratio={3.0}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      >
        <Center>
          <TechStacksModel />
        </Center>

        <OrbitControls />
        <ambientLight intensity={2} />
        <directionalLight
          position={[0, 10, 0]} // Position of the light source
          intensity={0.5} // Intensity of the light
          color={"#a4c8f0"} // Color of the light, soft blue for moonlight
        />
        <EffectComposer>
          <BrightnessContrast
            brightness={0.05} // brightness. min: -1, max: 1
            contrast={0.1} // contrast: min -1, max: 1
          />
          <Bloom
            luminanceThreshold={1}
            luminanceSmoothing={0.1}
            intensity={0.05}
            opacity={1}
          />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
}

export default TechnologiesExperience;
