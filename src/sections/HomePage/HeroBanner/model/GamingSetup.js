import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function GamingSetup(props) {
  const { nodes } = props;
  const texture = useTexture("/textures/gaming-setup.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group>
      <mesh
        name="Sit"
        geometry={nodes.Sit.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.226}
      >
        <mesh
          name="Arm_rest_tilt"
          geometry={nodes.Arm_rest_tilt.geometry}
          material={material}
          position={[0.016, 0.581, 0.432]}
        />
        <mesh
          name="elbow_rest"
          geometry={nodes.elbow_rest.geometry}
          material={material}
          position={[0, 0.051, 0]}
        />
        <mesh
          name="Handle002"
          geometry={nodes.Handle002.geometry}
          material={material}
          position={[0, 0.205, 0]}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={material}
          position={[0.304, 1.528, 0.025]}
          rotation={[Math.PI / 2, 0, 0.051]}
        />
        <mesh
          name="Plane007_1"
          geometry={nodes.Plane007_1?.geometry}
          material={material}
          position={[0.009, 1.646, -1.177]}
          rotation={[Math.PI / 2, 0, 0.051]}
          scale={0.03}
        />
        <mesh
          name="Strap_Clamp"
          geometry={nodes.Strap_Clamp.geometry}
          material={material}
          position={[0, 0.038, 0.432]}
          scale={0.058}
        />
      </mesh>
      <mesh
        name="Straps"
        geometry={nodes.Straps.geometry}
        material={material}
        position={[-0.037, 0.601, -0.958]}
        rotation={[Math.PI / 2, 0, 0.472]}
        scale={0.225}
      />
      <mesh
        name="Upper_Part"
        geometry={nodes.Upper_Part.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[Math.PI / 2, 0, 0.472]}
        scale={0.226}
      />
      <mesh
        name="Height_piston"
        geometry={nodes.Height_piston.geometry}
        material={material}
        position={[-0.161, 0.267, -1.061]}
        rotation={[0, -0.472, 0]}
        scale={0.226}
      />
      <mesh
        name="titlt_"
        geometry={nodes.titlt_.geometry}
        material={material}
        position={[0.034, 0.44, -0.958]}
        rotation={[0, -0.201, 0]}
        scale={0.009}
      />
      <mesh
        name="Side_Covers_2"
        geometry={nodes.Side_Covers_2.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.038}
      />
      <mesh
        name="wheels_frame"
        geometry={nodes.wheels_frame.geometry}
        material={material}
        position={[-0.177, 0.224, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.129}
      />
      <mesh
        name="Lamber_support"
        geometry={nodes.Lamber_support.geometry}
        material={material}
        position={[-0.123, 0.573, -1.134]}
        rotation={[-0.228, -0.462, -0.103]}
        scale={0.226}
      />
      <mesh
        name="Side_Covers"
        geometry={nodes.Side_Covers.geometry}
        material={material}
        position={[-0.177, 0.601, -1.029]}
        rotation={[0, -0.472, 0]}
        scale={0.226}
      />
      <mesh
        name="Upper_Body_"
        geometry={nodes.Upper_Body_.geometry}
        material={material}
        position={[0.008, 0.94, -1.236]}
        rotation={[-0.03, -0.472, -0.014]}
        scale={0.226}
      />
      <mesh
        name="neck_support"
        geometry={nodes.neck_support.geometry}
        material={material}
        position={[-0.084, 0.974, -1.221]}
        rotation={[0.046, -0.472, 0.021]}
        scale={0.071}
      />
      <mesh
        name="Chari_Wheels"
        geometry={nodes.Chari_Wheels.geometry}
        material={material}
        position={[-0.337, 0.659, -0.885]}
        rotation={[0, -0.822, Math.PI / 2]}
        scale={0.028}
      />
      <mesh
        name="case"
        geometry={nodes["case"].geometry}
        material={material}
        position={[0.365, 0.873, -1.769]}
        rotation={[0, -0.954, 0]}
        scale={0.009}
      />

      <mesh
        name="Mouse"
        geometry={nodes.Mouse.geometry}
        material={material}
        position={[-0.071, 0.709, -1.576]}
        rotation={[-Math.PI, 0.001, -Math.PI]}
      >
        <mesh
          name="Light_Mouse"
          geometry={nodes.Light_Mouse.geometry}
          material={material}
          position={[0, 0.022, -0.038]}
          rotation={[-0.475, 0, 0]}
          scale={0.008}
        />
      </mesh>
      <mesh
        name="Gaming_Keyboard"
        geometry={nodes.Gaming_Keyboard.geometry}
        material={material}
        position={[-0.357, 0.735, -1.6]}
        rotation={[0.092, 0, 0]}
        scale={0.009}
      />
      <mesh
        name="Text"
        geometry={nodes.Text.geometry}
        material={material}
        position={[-0.439, 0.722, -1.641]}
        rotation={[Math.PI / 2, 0, 3.136]}
        scale={[0.003, 0.004, 0.003]}
      />
      <mesh
        name="Mousepad"
        geometry={nodes.Mousepad.geometry}
        material={material}
        position={[-0.185, 0.709, -1.573]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.126, 0.172, 0.172]}
      />
    </group>
  );
}

export default GamingSetup;
