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
// Framer
import { motion } from "framer-motion";
// React Three Postprocessing
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
// Iconify
import { Icon } from "@iconify/react";
// @Mui
import {
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// atoms
import {
  exploreHeroModelAtom,
  heroBannerSceneLoadingAtom,
} from "@/recoil/atoms";
//
import ModelLoadingScreen from "../../../components/ModelLoadingScreen";
import RubiksCube from "./models/RubiksCube";
import BasicSceneModel from "./models/BasicSceneModel";
import RoomSetup from "./models/RoomSetup";
import NewtonCraddles from "./models/NewtonCraddles";

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

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleZoom = (event) => {
    console.log("Current Zoom Value:", event.target.object.zoom);
    console.log("Current Camera Position:", camera.position);
  };

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.addEventListener("change", handleZoom);
    }

    return () => {
      if (controlsRef.current) {
        controlsRef.current.removeEventListener("change", handleZoom);
      }
    };
  }, [controlsRef]);

  useEffect(() => {
    // Set different positions for mobile and desktop
    if (isMobile) {
      camera.position.set(1.61, 1.8, 6); // Example values, adjust as needed
      controlsRef.current && controlsRef.current.target.set(0, 0.5, 0); // Adjust target position as needed
      camera.fov = 100;
    } else {
      camera.position.set(1.61, 1.4, 5);
      controlsRef.current && controlsRef.current.target.set(0, 0, 0);
      camera.fov = 50;
    }
    camera.updateProjectionMatrix();
  }, [camera, isMobile, controlsRef]);

  return <></>;
};

// ----------------------------------------------------------------------

function HeroExperience() {
  const theme = useTheme();

  const canvasRef = useRef();

  const [dpr, setDpr] = useState(1.5);

  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.gammaOutput = true; // set gammaOutput to true
  renderer.gammaFactor = 2.2;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const controlsRef = useRef();

  const [exploreModel, triggerExploreModel] =
    useRecoilState(exploreHeroModelAtom);

  const buttonVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
  };

  // Handle WebGL context restoration
  const handleContextRestored = () => {
    console.log("WebGL context restored.");
    // Implement any logic needed after context restoration
  };

  // Update handleContextLost to include additional logic
  const handleContextLost = (event) => {
    event.preventDefault();
    console.log("WebGL context lost. Attempting to restore...");

    // Implement logic for reducing resource usage here
    // Provide user feedback here

    canvasRef.current.getContext("webgl").restoreContext();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    canvas.addEventListener(
      "webglcontextrestored",
      handleContextRestored,
      false
    );

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost, false);
      canvas.removeEventListener(
        "webglcontextrestored",
        handleContextRestored,
        false
      );
    };
  }, [canvasRef]);

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
          pixelratio={isMobile ? 1 : 3}
          dpr={dpr}
          style={{
            backgroundColor: "#161C24",
            zIndex: 1,
            height: "100vh",
          }}
          gl={{
            antialias: isMobile ? false : true,
            toneMapping: THREE.LinearToneMapping,
          }}
          linear
        >
          <PerformanceMonitor
            factor={1}
            onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor, 1))}
          />
          <CameraDev controlsRef={controlsRef} />
          <OrbitControls
            ref={controlsRef}
            minZoom={1}
            minPolarAngle={Math.PI / 6} // radians
            maxPolarAngle={Math.PI / 2.2} // radians
            minAzimuthAngle={-Math.PI / 4} // radians
            maxAzimuthAngle={Math.PI / 2} // radians
          />
          <StarsEffect isMobile={isMobile} />
          {/* 3D Model */}
          <Suspense fallback={<>Loading room model</>}>
            <BasicSceneModel />
          </Suspense>
          <Suspense>
            <RoomSetup />
          </Suspense>
          <Suspense fallback={<>Loading rubiks cube</>}>
            <RubiksCube />
          </Suspense>
          <Suspense fallback={<>Loading model</>}>
            <NewtonCraddles />
          </Suspense>
          {/* End 3D Model */}
          {!isMobile && (
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
          )}
        </Canvas>
      </Suspense>

      {/* Click To Explore */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10000,
          position: "absolute",
          bottom: "5vh",
        }}
      ></Box>
    </Box>
  );
}

export default HeroExperience;
