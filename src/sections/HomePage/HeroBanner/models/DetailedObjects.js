"use client";
import React, { useRef } from "react";
// React three drei
import { useGLTF, useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// -------------------------------------------------------------------------------------------------------------------

function DetailedObjects(props) {
  const { nodes, materials } = useGLTF(
    "/models/room-scene/detailed-objects.glb"
  );

  const texture = useTexture("/textures/room-scene/detailed-objects.jpg");
  texture.flipY = false;
  const material = new THREE.MeshBasicMaterial({ map: texture });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.World_Ground.geometry}
        material={material}
        scale={7.91}
      />
      <mesh
        geometry={nodes.Floor_Plamks.geometry}
        material={material}
        position={[0, 0, 0.05]}
        scale={2}
      />
      <mesh
        geometry={nodes.Sit.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.226}
      >
        <mesh
          geometry={nodes.Arm_rest_tilt.geometry}
          material={material}
          position={[0.016, 0.581, 0.432]}
        />
        <mesh
          geometry={nodes.elbow_rest.geometry}
          material={material}
          position={[0, 0.051, 0]}
        />
        <mesh
          geometry={nodes.Handle002.geometry}
          material={material}
          position={[0, 0.205, 0]}
        />
        <mesh
          geometry={nodes.Strap_Clamp.geometry}
          material={material}
          position={[0, 0.038, 0.432]}
          scale={0.058}
        />
      </mesh>
      <mesh
        geometry={nodes.Straps.geometry}
        material={material}
        position={[-0.037, 0.601, -0.958]}
        rotation={[Math.PI / 2, 0, 0.472]}
        scale={0.225}
      />
      <mesh
        geometry={nodes.Upper_Part.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[Math.PI / 2, 0, 0.472]}
        scale={0.226}
      />
      <mesh
        geometry={nodes.Height_piston.geometry}
        material={material}
        position={[-0.161, 0.267, -1.061]}
        rotation={[0, -0.472, 0]}
        scale={0.226}
      />
      <mesh
        geometry={nodes.titlt_.geometry}
        material={material}
        position={[0.034, 0.44, -0.958]}
        rotation={[0, -0.201, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Side_Covers_2.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.038}
      />
      <mesh
        geometry={nodes.wheels_frame.geometry}
        material={material}
        position={[-0.177, 0.224, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.129}
      />
      <mesh
        geometry={nodes.Lamber_support.geometry}
        material={material}
        position={[-0.123, 0.573, -1.134]}
        rotation={[-0.228, -0.462, -0.103]}
        scale={0.226}
      />
      <mesh
        geometry={nodes.Side_Covers.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.226}
      />
      <mesh
        geometry={nodes.Upper_Body_.geometry}
        material={material}
        position={[0.008, 0.94, -1.236]}
        rotation={[-0.03, -0.472, -0.014]}
        scale={0.226}
      />
      <mesh
        geometry={nodes.neck_support.geometry}
        material={material}
        position={[-0.084, 0.974, -1.221]}
        rotation={[0.046, -0.472, 0.021]}
        scale={0.071}
      />
      <mesh
        geometry={nodes.Chari_Wheels.geometry}
        material={material}
        position={[-0.337, 0.659, -0.885]}
        rotation={[0, -0.822, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        geometry={nodes.Be_Next_Client.geometry}
        material={nodes.Be_Next_Client.material}
        position={[-0.01, 1.367, -1.937]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.041}
      />
      <mesh
        geometry={nodes.Be_Next_Client_Frame.geometry}
        material={nodes.Be_Next_Client_Frame.material}
        position={[-0.011, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Bistro_Box.geometry}
        material={material}
        position={[-0.011, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Cairo_Runners.geometry}
        material={material}
        position={[-0.278, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Coach_Sama.geometry}
        material={material}
        position={[-0.278, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Informa_Image.geometry}
        material={material}
        position={[-0.541, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.SIYL.geometry}
        material={material}
        position={[-0.541, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Tv.geometry}
        material={material}
        position={[-1.725, 0.421, 0.361]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.718}
      />
      <mesh
        geometry={nodes.Curved_MonitorScreen.geometry}
        material={material}
        position={[-0.283, 0.954, -1.816]}
        rotation={[1.45, 0, Math.PI / 2]}
        scale={4.958}
      />
      <mesh
        geometry={nodes.Monitor_Stand.geometry}
        material={material}
        position={[-0.283, 0.709, -1.913]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={4.958}
      />
    </group>
  );
}

useGLTF.preload("/models/room-scene/detailed-objects.glb");

export default DetailedObjects;
