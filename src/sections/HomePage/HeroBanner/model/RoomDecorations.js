import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function RoomDecorations(props) {
  const { nodes, materials } = props;

  const texture = useTexture("/textures/room-decorations.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({ map: texture });

  return (
    <group>
      <mesh
        name="Carpet"
        geometry={nodes.Carpet.geometry}
        material={material}
        position={[0, 0.087, 0.371]}
        scale={[0.702, 0.617, 0.971]}
      />
      <mesh
        name="Text001"
        geometry={nodes.Text001.geometry}
        material={material}
        position={[-1.721, 0.782, -0.727]}
        rotation={[Math.PI / 2, 0, -1.181]}
        scale={0.186}
      />
      <mesh
        name="Strelizia_nikolai"
        geometry={nodes.Strelizia_nikolai.geometry}
        material={material}
        position={[-1.847, 0.087, 1.693]}
        rotation={[-Math.PI, 1.202, -Math.PI]}
      />

      <mesh
        name="whiteboard_original_Material_0001"
        geometry={nodes.whiteboard_original_Material_0001.geometry}
        material={material}
        position={[-1.645, 0.392, -0.967]}
        rotation={[-Math.PI / 2, 0, 1.158]}
        scale={[0.053, 0.043, 0.04]}
      />
    </group>
  );
}

export default RoomDecorations;
