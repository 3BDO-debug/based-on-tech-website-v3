import React, { Suspense, useEffect, useRef, useState } from "react";
// React Three Fibres
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// Recoil
import { useRecoilState } from "recoil";
// React Three Drei
import { OrbitControls, Stars, useProgress } from "@react-three/drei";
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
import RoomModel from "./model";
import ModelLoadingScreen from "../../../components/ModelLoadingScreen";

// ----------------------------------------------------------------------

const StarsEffect = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() / 40;
  });

  return <Stars ref={ref} />;
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

const SceneLoadingIndicator = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  const [heroBannerSceneLoading, setHeroBannerSceneLoading] = useRecoilState(
    heroBannerSceneLoadingAtom
  );

  useEffect(() => {
    // Update the Recoil atom with the current progress and loaded state
    setHeroBannerSceneLoading((current) => ({
      ...current,
      loaded: false, // Set to true when the model is fully loaded
      progress: progress,
    }));

    // Log the progress and active state for debugging
  }, [progress, active, setHeroBannerSceneLoading]);

  return null;
};

// ----------------------------------------------------------------------

function HeroExperience() {
  const theme = useTheme();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
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
          pixelratio={3.0}
          style={{
            backgroundColor: theme.palette.background.default,
            zIndex: 1,
            height: "100vh",
          }}
          gl={{ antialias: true, toneMapping: THREE.LinearToneMapping }}
          linear
        >
          <CameraDev controlsRef={controlsRef} />
          <OrbitControls
            ref={controlsRef}
            minZoom={1}
            minPolarAngle={Math.PI / 6} // radians
            maxPolarAngle={Math.PI / 2.2} // radians
            minAzimuthAngle={-Math.PI / 4} // radians
            maxAzimuthAngle={Math.PI / 2} // radians
          />
          <ambientLight intensity={3} />
          <StarsEffect />
          {/* 3D Model */}
          <Suspense fallback={<SceneLoadingIndicator />}>
            <RoomModel isMobile={isMobile} />
          </Suspense>
          {/* End 3D Model */}
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
      {/* Click To Explore */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
          position: "absolute",
          bottom: "5vh",
        }}
      >
        {exploreModel ? (
          <motion.div
            key="closeButton"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonVariants}
          >
            <IconButton onClick={() => triggerExploreModel(false)}>
              <Icon
                color={theme.palette.error.light}
                width={60}
                height={60}
                icon="solar:close-circle-broken"
              />
            </IconButton>
          </motion.div>
        ) : (
          <motion.div
            key="exploreButton"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonVariants}
          >
            <Button
              size="large"
              variant="outlined"
              startIcon={<Icon icon="icon-park-outline:click-tap" />}
              onClick={() => triggerExploreModel(true)}
            >
              Click To Explore
            </Button>
          </motion.div>
        )}
      </Box>
    </Box>
  );
}

export default HeroExperience;
