import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function IkeaDesk(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/ikea-desk.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group>
      <mesh
        name="Cover"
        geometry={nodes.Cover.geometry}
        material={material}
        position={[-0.899, 0.376, -1.665]}
        scale={1.123}
      />
      <mesh
        name="Drawers"
        geometry={nodes.Drawers.geometry}
        material={material}
        position={[-0.899, 0.396, -1.365]}
        scale={1.123}
      />
      <mesh
        name="Cover001"
        geometry={nodes.Cover001.geometry}
        material={material}
        position={[0.389, 0.376, -1.665]}
        scale={1.123}
      />
      <mesh
        name="Drawers001"
        geometry={nodes.Drawers001.geometry}
        material={material}
        position={[0.389, 0.396, -1.365]}
        scale={1.123}
      />
      <mesh
        name="Desk_Counter_Top"
        geometry={nodes.Desk_Counter_Top.geometry}
        material={material}
        position={[-0.257, 0.678, -1.622]}
        scale={[0.817, 0.852, 0.314]}
      />
    </group>
  );
}

export default IkeaDesk;
