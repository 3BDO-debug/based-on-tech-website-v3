"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
// React Three Fibres
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// Recoil
import { useRecoilState } from "recoil";
// React Three Drei
import {
  OrbitControls,
  PerformanceMonitor,
  Stars,
  Stats,
  useProgress,
} from "@react-three/drei";
// Threejs
import * as THREE from "three";
// React Three Postprocessing
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
// @Mui
import { Box, useMediaQuery, useTheme } from "@mui/material";

// ----------------------------------------------------------------------

const BasicSceneModel = React.lazy(() => import("./models/BasicSceneModel"));
const RoomSetup = React.lazy(() => import("./models/RoomSetup"));
const RubiksCube = React.lazy(() => import("./models/RubiksCube"));
const NewtonCraddles = React.lazy(() => import("./models/NewtonCraddles"));

// ----------------------------------------------------------------------

const StarsEffect = ({ isMobile }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!isMobile) {
      ref.current.rotation.y = clock.getElapsedTime() / 40;
    }
  });

  return <Stars ref={ref} count={isMobile ? 1000 : 7000} />;
};

const CameraDev = ({ controlsRef }) => {
  const { camera } = useThree();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  useEffect(() => {
    camera.position.set(
      isMobile ? 1.61 : 1.61,
      isMobile ? 1.8 : 1.4,
      isMobile ? 6 : 5
    );
    controlsRef.current &&
      controlsRef.current.target.set(0, isMobile ? 0.5 : 0, 0);
    camera.fov = isMobile ? 100 : 50;
    camera.updateProjectionMatrix();
  }, [camera, isMobile, controlsRef]);

  return null;
};
// ----------------------------------------------------------------------

function HeroExperience() {
  const theme = useTheme();

  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const canvasRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      canvasRef.current.getContext("webgl").restoreContext();
    };

    const canvas = canvasRef.current;
    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost, false);
    };
  }, []);

  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Model Loading Screen */}
      {/* End Model Loading Screen */}
      <Suspense fallback={<>Loading 3d scene</>}>
        <Canvas
          ref={canvasRef}
          pixelratio={1}
          dpr={isMobile ? 1 : 1.5}
          style={{ backgroundColor: "#161C24", zIndex: 1, height: "100vh" }}
          gl={{ antialias: !isMobile, toneMapping: THREE.LinearToneMapping }}
          linear
        >
          <CameraDev controlsRef={controlsRef} />

          <OrbitControls
            ref={controlsRef}
            minZoom={1}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 2}
          />
          <Suspense fallback={<>Loading sky</>}>
            <StarsEffect isMobile={isMobile} />
          </Suspense>
          {/* 3D Model */}
          <Suspense fallback={<>Loading room model</>}>
            <BasicSceneModel />
          </Suspense>
          <Suspense fallback={<>Loading room setup model</>}>
            <RoomSetup />
          </Suspense>
          <Suspense fallback={<>Loading rubiks cube</>}>
            <RubiksCube />
          </Suspense>
          <Suspense fallback={<>loading newton craddles</>}>
            <NewtonCraddles />
          </Suspense>
          {/* End 3D Model */}
          {!isMobile && (
            <EffectComposer>
              <BrightnessContrast brightness={0.05} contrast={0.1} />
              <Bloom
                luminanceThreshold={1}
                luminanceSmoothing={0.1}
                intensity={0.13}
                opacity={1}
              />
            </EffectComposer>
          )}
        </Canvas>
      </Suspense>
    </Box>
  );
}

export default HeroExperience;
