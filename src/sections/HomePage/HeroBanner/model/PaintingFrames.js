import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function PaintingFrames(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/painting-frames.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({ map: texture });

  const emissionText = new THREE.MeshStandardMaterial({
    emissive: "#C8FCFF",
    color: "#C8FCFF",
    opacity: 1,
  });

  return (
    <group>
      <mesh
        name="Be_Next_Client"
        geometry={nodes.Be_Next_Client.geometry}
        material={emissionText}
        position={[-0.01, 1.367, -1.937]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.041}
      />
      <mesh
        name="Be_Next_Client_Frame"
        geometry={nodes.Be_Next_Client_Frame.geometry}
        material={material}
        position={[-0.011, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        name="Bistro_Box"
        geometry={nodes.Bistro_Box.geometry}
        material={material}
        position={[-0.011, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        name="Cairo_Runners"
        geometry={nodes.Cairo_Runners.geometry}
        material={material}
        position={[-0.278, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        name="Coach_Sama"
        geometry={nodes.Coach_Sama.geometry}
        material={material}
        position={[-0.278, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        name="Informa_Image"
        geometry={nodes.Informa_Image.geometry}
        material={material}
        position={[-0.541, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        name="SIYL"
        geometry={nodes.SIYL.geometry}
        material={material}
        position={[-0.541, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        name="Cairo_Runners_Image"
        geometry={nodes.Cairo_Runners_Image.geometry}
        material={material}
        position={[-0.278, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
    </group>
  );
}

export default PaintingFrames;
