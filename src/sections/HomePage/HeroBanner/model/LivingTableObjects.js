import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function LivingTableObjects(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/living-table-objects.jpg");
  texture.flipY = false;

  /*   const controllerMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 12,
  });

  const controllerBodyMaterial = new THREE.MeshStandardMaterial({
    color: "#b3b3b3",
  });

  const controllerTouchpadMaterial = new THREE.MeshStandardMaterial({
    emissive: "#00ffcc",
    color: "#00ffcc",
    emissiveIntensity: 9,
  });
 */
  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group>
      {/*    <group
        name="Dualsense_controller_PS5"
        position={[0.154, 0.461, 0.842]}
        rotation={[-Math.PI, 1.064, -Math.PI]}
        scale={1.379}
      >
        <mesh
          name="button_mic"
          geometry={nodes.button_mic.geometry}
          material={material}
          position={[0, 0.043, 0]}
          rotation={[-0.209, 0, 0]}
        />
        <mesh
          name="buttons"
          geometry={nodes.buttons.geometry}
          material={material}
          position={[0.024, 0.034, -0.023]}
          rotation={[-0.209, 0, 0.03]}
        />
        <mesh
          name="headphones"
          geometry={nodes.headphones.geometry}
          material={material}
          position={[0, 0.021, 0.01]}
          rotation={[-0.209, 0, 0]}
        />
        <mesh
          name="main_controler"
          geometry={nodes.main_controler.geometry}
          material={controllerMaterial}
          position={[-0.006, 0.031, -0.018]}
          rotation={[0.02, 0, 0]}
        />
        <mesh
          name="main_controler001"
          geometry={nodes.main_controler001.geometry}
          material={controllerBodyMaterial}
          position={[0, 0.043, 0]}
          rotation={[-0.209, 0, 0]}
        />
        <meshStandardMaterial
          name="options"
          geometry={nodes.options.geometry}
          color="hotpink"
          attach="material"
          position={[0, 0.043, 0]}
          rotation={[-0.318, -0.177, 0]}
        />
        <mesh
          name="ps_logo"
          geometry={nodes.ps_logo.geometry}
          color="#ff1493"
          attach="material"
          position={[0, 0.043, 0]}
          rotation={[1.607, 0, 0]}
        />
        <mesh
          name="sticks"
          geometry={nodes.sticks.geometry}
          material={material}
          position={[0, 0.043, 0]}
          rotation={[-0.209, 0, 0]}
        />
        <mesh
          name="touchpad"
          geometry={nodes.touchpad.geometry}
          material={controllerTouchpadMaterial}
          position={[0, 0.043, 0]}
          rotation={[-0.219, 0, 0]}
        />
        <mesh
          name="trigers"
          geometry={nodes.trigers.geometry}
          material={material}
          position={[0, 0.017, -0.031]}
          rotation={[1.248, 0.015, -3.029]}
        />
        <mesh
          name="usb"
          geometry={nodes.usb.geometry}
          material={material}
          position={[0, 0.043, 0.002]}
          rotation={[-0.209, 0, 0]}
        />
      </group> */}
      <group
        name="Water_bottle"
        position={[-0.314, 0.461, 0.562]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name="BottleBase"
          geometry={nodes.BottleBase.geometry}
          material={material}
          position={[-0.05, 0, 0]}
        >
          <mesh
            name="Cap"
            geometry={nodes.Cap.geometry}
            material={material}
            position={[0, 0.207, -0.045]}
          >
            <mesh
              name="Hook"
              geometry={nodes.Hook.geometry}
              material={material}
            />
          </mesh>
        </mesh>
      </group>
      <group
        name="Open_book"
        position={[0.239, 0.442, -0.129]}
        rotation={[-Math.PI, 0.936, -Math.PI]}
      >
        <mesh
          name="Open_book_1"
          geometry={nodes.Open_book_1.geometry}
          material={material}
          position={[-0.11, 0.016, -0.139]}
        />
      </group>
    </group>
  );
}

export default LivingTableObjects;
