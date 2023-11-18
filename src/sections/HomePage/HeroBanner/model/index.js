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
    if (group.current) {
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

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* Lights & Window */}
        <LightsWindow nodes={nodes} />
        {/* End Lights & Window */}

        {/* Living Table Objects */}
        <LivingTableObjects nodes={nodes} />
        {/* End Living Table Objects */}

        {/* Tv Monitor */}
        <MonitorTv nodes={nodes} />
        {/* End Tv Monitor */}

        {/* Newton Craddle */}
        <NewtonCraddle nodes={nodes} />
        {/* End Newton Craddle */}

        {/* Creative Word */}
        <CreativeWord nodes={nodes} />
        {/* End Creative Word */}

        {/* World Ground */}
        <WorldGround nodes={nodes} />
        {/* End World Ground */}

        {/* DMC Car Model */}
        <CarModel nodes={nodes} />
        {/* End DMC Car Model */}

        {/* Room Structure */}
        <RoomStructure nodes={nodes} />
        {/* End Room Structure */}

        {/* Ikea Desk */}

        <IkeaDesk nodes={nodes} />

        {/* End Ikea Desk */}

        {/* Room Decorations */}
        <RoomDecorations nodes={nodes} materials={materials} />
        {/* End Room Decorations */}

        {/* Living Furniture */}
        <LivingFurniture nodes={nodes} />
        {/* End Living Furniture */}

        {/* Gaming Setup */}
        <GamingSetup nodes={nodes} />
        {/* End Gaming Setup */}

        {/* Painting Frames */}
        <PaintingFrames nodes={nodes} />
        {/* End Painting Frames */}

        {/* Rubik Cube */}
        <RubikCube nodes={nodes} />
        {/* Rubiks Cube */}
      </group>
    </group>
  );
}

export default RoomModel;

useGLTF.preload("/models/scene.glb");
