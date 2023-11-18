import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function WorldGround(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/world-ground.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <mesh
      name="World_Ground"
      geometry={nodes.World_Ground.geometry}
      material={material}
      scale={7.91}
    />
  );
}

export default WorldGround;
