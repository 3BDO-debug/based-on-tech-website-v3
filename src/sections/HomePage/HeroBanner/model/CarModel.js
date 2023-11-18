import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function CarModel(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/car-model.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({ map: texture });

  return (
    <mesh
      name="DMC_Sci-Fi_Hover_Car"
      geometry={nodes["DMC_Sci-Fi_Hover_Car"].geometry}
      material={material}
      position={[-1.696, 0.382, 1.125]}
      rotation={[-Math.PI, 0.621, -Math.PI]}
      scale={0.089}
    />
  );
}

export default CarModel;
