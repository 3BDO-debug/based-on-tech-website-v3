"use client";
import React, { Suspense, useRef, useState } from "react";
// React three fibers
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// React three drei
import { Html, OrbitControls, useProgress } from "@react-three/drei";
// Three ks
import * as THREE from "three";
// React post processing
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
// @Mui
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Button,
} from "@mui/material";
//
import PortfolioModel from "./PortfolioModel";
import { Icon } from "@iconify/react";

// -------------------------------------------------------------------------------------------------------------------

const CameraDev = ({ controlsRef, moveDirection }) => {
  const { camera } = useThree();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (isMobile) {
      camera.position.set(-0.52, 4, 15);
      camera.fov = 130;
    } else {
      camera.position.set(-0.52, 4, 20);
      camera.fov = 50;
    }
    camera.updateProjectionMatrix();
  }, [camera, isMobile]);

  useFrame(() => {
    camera.position.x += moveDirection.x;
    camera.position.y += moveDirection.y;
  });

  return null; // This component does not render anything itself
};

// -------------------------------------------------------------------------------------------------------------------

const PortfolioExperience = () => {
  const theme = useTheme();
  const controlsRef = useRef();

  // Define the min and max polar angles in radians to limit vertical rotation
  const minPolarAngle = Math.PI / 4; // 45 degrees
  const maxPolarAngle = Math.PI / 2.3; // 90 degrees

  // Define the min and max zoom distances to limit zoom in and out
  const minZoom = 10;
  const maxZoom = 50;

  const minAzimuthAngle = -Math.PI / 7;
  const maxAzimuthAngle = Math.PI / 7;

  // UseProgress to manage loading progress
  const { progress, active } = useProgress();
  const isLoading = active && progress < 100;

  const [moveDirection, setMoveDirection] = useState({ x: 0, y: 0 });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Suspense fallback={<CircularProgress />}>
        <Canvas
          style={{ height: "70vh", width: "100vw" }}
          pixelRatio={1}
          gl={{ antialias: false, toneMapping: THREE.NoToneMapping }}
        >
          <OrbitControls
            ref={controlsRef}
            minZoom={minZoom}
            maxZoom={maxZoom}
            minPolarAngle={minPolarAngle}
            maxPolarAngle={maxPolarAngle}
            minAzimuthAngle={minAzimuthAngle} // radians
            maxAzimuthAngle={maxAzimuthAngle} // radians
          />
          <CameraDev controlsRef={controlsRef} moveDirection={moveDirection} />
          <ambientLight intensity={2.7} />
          <PortfolioModel />
          <EffectComposer>
            <BrightnessContrast brightness={0.05} contrast={0.1} />
            <Bloom
              luminanceThreshold={1}
              luminanceSmoothing={0.1}
              intensity={0.13}
              opacity={1}
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            zIndex: 10,
          }}
        >
          <Typography variant="h6" sx={{ color: "white" }}>
            Loading 3D Portfolio Experience...
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          position: "absolute",
          bottom: "5vh",
          width: "100%",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon icon="solar:help-outline" width={30} height={30} />
        <Typography variant="subtitle1" sx={{ ml: 1 }}>
          Explore The Musuem By Zooming And Moving
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioExperience;
