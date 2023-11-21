import React, { useEffect, useRef } from "react";
// React three drei
import { useGLTF, useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";
// React three fibers
import { useFrame } from "@react-three/fiber";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
// atoms
import {
  exploreHeroModelAtom,
  heroBannerSceneLoadingAtom,
} from "@/recoil/atoms";

// --------------------------------------------------------------------------------

function BasicSceneModel({ isMobile, ...props }) {
  const group = useRef();

  const { nodes, materials } = useGLTF("models/room-scene/basic-scene.glb");

  const basicSceneTexture = useTexture("/textures/room-scene/basic-scene.jpg");
  basicSceneTexture.flipY = false;

  const exploreHeroModel = useRecoilValue(exploreHeroModelAtom);

  const basicSceneLightmap = useTexture(
    "/textures/room-scene/basic-scene-lightmap.jpg"
  );
  basicSceneLightmap.flipY = false;

  const basicSceneMaterial = new THREE.MeshBasicMaterial({
    map: basicSceneTexture,
  });

  const creativeWord = new THREE.MeshStandardMaterial({
    emissive: "#D5B4C1",
    color: "#D5B4C1",
    emissiveIntensity: 10,
    toneMapped: false,
  });

  const setheroBannerModelLoaded = useSetRecoilState(
    heroBannerSceneLoadingAtom
  );

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
    setheroBannerModelLoaded({ loaded: true, progress: 100 });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.World_Ground.geometry}
        material={basicSceneMaterial}
        scale={7.91}
      />
      <mesh
        geometry={nodes.Floor.geometry}
        material={basicSceneMaterial}
        position={[0, 0.032, 0.05]}
        scale={[2, 0.034, 2]}
      />
      <mesh
        geometry={nodes.Floor_Plamks.geometry}
        material={basicSceneMaterial}
        position={[0, 0, 0.05]}
        scale={2}
      />
      <mesh
        geometry={nodes.Living_Wall.geometry}
        material={basicSceneMaterial}
        position={[-2.067, 0.998, -0.05]}
        scale={[4, 2, 2]}
      />
      <mesh
        geometry={nodes.Setup_Wall.geometry}
        material={basicSceneMaterial}
        position={[0.603, 1.137, -2.044]}
        scale={[1, 1, 2]}
      />
      <mesh
        geometry={nodes.Carpet.geometry}
        material={basicSceneMaterial}
        position={[0, 0.087, 0.371]}
        scale={[0.702, 0.617, 0.971]}
      />
      <mesh
        geometry={nodes.Bean_Bag.geometry}
        material={basicSceneMaterial}
        position={[1.313, 0.283, -1.434]}
        rotation={[0, -0.382, 0]}
        scale={0.562}
      />
      <mesh
        geometry={nodes.Sofa.geometry}
        material={basicSceneMaterial}
        position={[1.44, 0.211, 0.449]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.752, 0.792, 0.792]}
      />
      <mesh
        geometry={nodes.Coffee_Table001.geometry}
        material={basicSceneMaterial}
        position={[0.024, 0.105, 0.426]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.307, 0.168, 0.022]}
      />
      <mesh
        geometry={nodes.Tv_Cabinet.geometry}
        material={basicSceneMaterial}
        position={[-1.723, 0.106, 0.391]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          geometry={nodes.Cabinet1.geometry}
          material={basicSceneMaterial}
          position={[-0.9, 0.01, -0.184]}
        />
        <mesh
          geometry={nodes.Cabinet1_Door.geometry}
          material={basicSceneMaterial}
          position={[-0.6, 0.086, 0.176]}
        />
        <mesh
          geometry={nodes.legs003.geometry}
          material={basicSceneMaterial}
          position={[-0.762, -0.032, -0.139]}
          rotation={[0.155, 0, -0.235]}
          scale={[0.014, 0.037, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Floor_Plant.geometry}
        material={basicSceneMaterial}
        position={[-1.847, 0.087, 1.693]}
        rotation={[-Math.PI, 1.202, -Math.PI]}
      />
      <mesh
        geometry={nodes.Cover001.geometry}
        material={basicSceneMaterial}
        position={[0.389, 0.376, -1.665]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Drawers.geometry}
        material={basicSceneMaterial}
        position={[-0.899, 0.396, -1.365]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Desk_Counter_Top.geometry}
        material={basicSceneMaterial}
        position={[-0.257, 0.678, -1.622]}
        scale={[0.817, 0.852, 0.314]}
      />
      <mesh
        geometry={nodes.Cover002.geometry}
        material={basicSceneMaterial}
        position={[-0.899, 0.384, -1.677]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Drawers002.geometry}
        material={basicSceneMaterial}
        position={[0.382, 0.395, -1.361]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Creative_Software_Solutions.geometry}
        material={creativeWord}
        position={[-2, 1.46, -0.036]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.26}
      />
    </group>
  );
}

useGLTF.preload("models/room-scene/basic-scene.glb");

export default BasicSceneModel;
