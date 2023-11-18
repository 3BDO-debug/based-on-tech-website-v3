import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function CreativeWord(props) {
  const { nodes } = props;

  const material = new THREE.MeshStandardMaterial({
    emissive: "#D5B4C1",
    color: "#D5B4C1",
    emissiveIntensity: 10,
    toneMapped: false,
  });

  return (
    <mesh
      name="Creative_Software_Solutions"
      geometry={nodes.Creative_Software_Solutions.geometry}
      material={material}
      position={[-2, 1.46, -0.036]}
      rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      scale={0.26}
    />
  );
}

export default CreativeWord;
