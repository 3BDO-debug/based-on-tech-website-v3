import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function RoomStructure(props) {
  const { nodes } = props;
  const texture = useTexture("/textures/room-structure.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({ map: texture });

  return (
    <group>
      <mesh
        name="Floor_Plamks"
        geometry={nodes.Floor_Plamks.geometry}
        material={material}
        position={[0, 0, 0.05]}
        scale={2}
      />
      <mesh
        name="Living_Wall"
        geometry={nodes.Living_Wall.geometry}
        material={material}
        position={[-2.067, 0.998, -0.05]}
        scale={[4, 2, 2]}
      />
      <mesh
        name="Setup_Wall"
        geometry={nodes.Setup_Wall.geometry}
        material={material}
        position={[0.603, 1.137, -2.044]}
        scale={[1, 1, 2]}
      />
      <mesh
        name="Floor"
        geometry={nodes.Floor.geometry}
        material={material}
        position={[0, 0.032, 0.05]}
        scale={[2, 0.034, 2]}
      />
    </group>
  );
}

export default RoomStructure;
