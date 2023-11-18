import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function MonitorTv(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/monitor-tv.jpg");
  texture.flipY = false;
  const material = new THREE.MeshStandardMaterial({ map: texture });

  const tvTexture = useTexture("/textures/youtube.png");
  tvTexture.flipY = false;

  const tvMaterial = new THREE.MeshStandardMaterial({
    map: tvTexture,
  });

  return (
    <group>
      <group
        name="Curved_Monitor"
        position={[-0.283, 0.709, -1.917]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={4.958}
      >
        <mesh
          name="Curved_MonitorScreen"
          geometry={nodes.Curved_MonitorScreen.geometry}
          material={material}
          position={[0.02, 0, -0.049]}
          rotation={[0, 0.12, 0]}
        />
        <mesh
          name="Monitor_Stand"
          geometry={nodes.Monitor_Stand.geometry}
          material={material}
          position={[0.001, 0, 0]}
        />
      </group>
      <mesh
        name="Tv"
        geometry={nodes.Tv.geometry}
        material={tvMaterial}
        position={[-1.7225, 0.381, 0.361]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.718}
      />
    </group>
  );
}

export default MonitorTv;
