"use client";
import React, { useRef, useEffect } from "react";
// React three fibers
import { useFrame } from "@react-three/fiber";
// Recoil
import { useRecoilState } from "recoil";
// Three js
import * as THREE from "three";
// recoil
import { useRecoilValue } from "recoil";
// atoms
import {
  exploreHeroModelAtom,
  heroBannerSceneLoadingAtom,
} from "@/recoil/atoms";
// React three drei
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
//
import CarModel from "./CarModel";
import LightsWindow from "./LightsWindow";
import RoomStructure from "./RoomStructure";
import IkeaDesk from "./IkeaDesk";
import RoomDecorations from "./RoomDecorations";
import LivingTableObjects from "./LivingTableObjects";
import LivingFurniture from "./LivingFurniture";
import GamingSetup from "./GamingSetup";
import PaintingFrames from "./PaintingFrames";
import MonitorTv from "./MonitorTv";
import NewtonCraddle from "./NewtonCraddle";
import WorldGround from "./WorldGround";
import CreativeWord from "./CreativeWord";
import RubikCube from "./RubikCube";

// -----------------------------------------------------------------------------------------------------

function RoomModel({ isMobile, ...props }) {
  const group = useRef();

  const { cameraRef } = props;

  const { nodes, materials, animations } = useGLTF("/models/scene.glb");
  const { actions, names } = useAnimations(animations, group);

  const exploreHeroModel = useRecoilValue(exploreHeroModelAtom);

  const [heroBannerSceneLoading, setHeroBannerSceneLoading] = useRecoilState(
    heroBannerSceneLoadingAtom
  );

  useEffect(() => {
    // Play all animations
    names.forEach((name) => {
      actions[name].play();
    });
  }, [actions, names]);

  const targetY = useRef(0); // Store the target Y position

  // Update the target Y position based on conditions
  useEffect(() => {
    if (isMobile && !exploreHeroModel) {
      targetY.current = -2.5;
    } else if (isMobile && exploreHeroModel) {
      targetY.current = 0.2;
    } else {
      // Default position when not on mobile or other conditions
      targetY.current = 0;
    }
  }, [isMobile, exploreHeroModel]);

  // Animate the position on each frame
  useFrame(() => {
    if (group.current && !isMobile) {
      // Interpolate current position with the target position for smooth animation
      group.current.position.lerp(
        new THREE.Vector3(0, targetY.current, 0),
        0.1
      );
    }
  });

  useEffect(() => {
    setHeroBannerSceneLoading({ progress: 100, loaded: true });
  }, []);

  return <group ref={group} {...props} dispose={null}></group>;
}

export default RoomModel;

useGLTF.preload("/models/scene.glb");
