import React from "react";
// React three drei
import { useGLTF, useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// ---------------------------------------------------------------------------

function RoomSetup(props) {
  const { nodes, materials } = useGLTF("/models/room-scene/room-setup.glb");

  const roomSetupTexture = useTexture("/textures/room-scene/room-setup.jpg");
  roomSetupTexture.flipY = false;

  const roomSetupMaterial = new THREE.MeshBasicMaterial({
    map: roomSetupTexture,
  });

  const caseMaterial = new THREE.MeshBasicMaterial({ color: "#000000" });

  const caseTransparentMaterial = new THREE.MeshPhongMaterial({
    color: "#a9a9a9",
    transparent: true,
    opacity: 0.6,
  });

  const windowFrameMaterial = new THREE.MeshBasicMaterial({
    color: "#C0C0C0",
  });

  const windowMaterial = new THREE.MeshPhongMaterial({
    color: "#D5B4C1",
    transparent: true,
    opacity: 0.2,
  });

  const creativeWord = new THREE.MeshStandardMaterial({
    emissive: "#D5B4C1",
    color: "#D5B4C1",
    emissiveIntensity: 10,
    toneMapped: false,
  });

  const gamingChairText = new THREE.MeshBasicMaterial({
    color: "#3CC0FF",
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-0.314, 0.442, 0.562]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.BottleBase.geometry}
          material={roomSetupMaterial}
          position={[-0.05, 0.018, 0]}
        />
      </group>
      <group
        position={[0.239, 0.442, -0.129]}
        rotation={[-Math.PI, 0.936, -Math.PI]}
      >
        <mesh
          geometry={nodes.Open_book_1.geometry}
          material={roomSetupMaterial}
          position={[-0.11, 0.016, -0.139]}
        />
      </group>
      <group
        position={[-1.978, 0.053, -1.914]}
        rotation={[0, -1.569, 0]}
        scale={0.721}
      >
        <mesh
          geometry={nodes.Diffusor.geometry}
          material={nodes.Diffusor.material}
          position={[0.012, 0.557, -0.016]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.019, 0.688, 0.019]}
        />
        <mesh
          geometry={nodes.Lamp_Stand.geometry}
          material={nodes.Lamp_Stand.material}
          position={[0.077, 0.367, -0.08]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.02}
        />
      </group>
      <group
        position={[1.395, 1.845, -2.013]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.552, 0.81, 1.24]}
      >
        <mesh
          name="Window_Blind"
          geometry={nodes.Window_Blind.geometry}
          material={roomSetupMaterial}
          morphTargetDictionary={nodes.Window_Blind.morphTargetDictionary}
          morphTargetInfluences={nodes.Window_Blind.morphTargetInfluences}
          scale={[1.234, 1.234, 1.636]}
        />
      </group>
      <group position={[0.709, 1.722, -1.95]}>
        <mesh
          geometry={nodes.Wall_Lamp_.geometry}
          material={roomSetupMaterial}
          position={[0, -0.168, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[-0.283, 0.709, -1.917]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={4.958}
      >
        <mesh
          geometry={nodes.Curved_MonitorScreen.geometry}
          material={roomSetupMaterial}
          position={[0.02, 0, -0.049]}
          rotation={[0, 0.12, 0]}
        />
        <mesh
          geometry={nodes.Monitor_Stand.geometry}
          material={roomSetupMaterial}
          position={[0.001, 0, 0]}
        />
      </group>
      <group position={[-0.256, 0.087, -0.986]} rotation={[0, -0.663, 0]}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={roomSetupMaterial}
          position={[0, 0.526, 0.045]}
          scale={[0.154, 0.202, 0.255]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={roomSetupMaterial}
          position={[-0.008, 0.571, -0.129]}
          rotation={[-0.208, 0, 0]}
          scale={[0.119, 0.115, 0.093]}
        />
        <mesh
          geometry={nodes.Cube007.geometry}
          material={roomSetupMaterial}
          position={[-0.04, 0.078, 0.054]}
          rotation={[Math.PI, -0.882, Math.PI]}
          scale={[0.02, 0.02, 0.018]}
        />
        <mesh
          geometry={nodes.Cube008.geometry}
          material={roomSetupMaterial}
          position={[-0.005, 0.077, 0.016]}
          rotation={[0, -0.343, 0]}
          scale={[0.061, 0.034, 0.061]}
        />
        <mesh
          geometry={nodes.Cube009.geometry}
          material={roomSetupMaterial}
          position={[-0.131, 0.291, 0.074]}
          rotation={[Math.PI, -0.452, Math.PI]}
          scale={[0.36, 0.412, 0.36]}
        />
        <mesh
          geometry={nodes.Cube010.geometry}
          material={roomSetupMaterial}
          position={[0.168, 0.359, -0.064]}
          rotation={[-0.12, 0.051, -0.401]}
          scale={0.255}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={roomSetupMaterial}
          position={[-0.004, 0.141, 0.015]}
          scale={0.028}
        />
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={roomSetupMaterial}
          position={[-0.275, 0.016, -0.077]}
          rotation={[Math.PI / 2, 0, 0.315]}
          scale={0.283}
        />
        <mesh
          geometry={nodes.Cylinder006.geometry}
          material={roomSetupMaterial}
          position={[0.245, 0.34, 0.148]}
          scale={[0.012, 0.006, 0.017]}
        />
        <mesh
          geometry={nodes.Gaming_chair_text.geometry}
          material={gamingChairText}
          position={[-0.051, 1.041, -0.205]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.038}
        />
        <mesh
          geometry={nodes.Plane.geometry}
          material={roomSetupMaterial}
          position={[-0.006, 0.774, -0.178]}
          rotation={[1.605, 0, 0]}
          scale={[0.132, 0.143, 0.096]}
        />
        <mesh
          geometry={nodes.Plane002.geometry}
          material={roomSetupMaterial}
          position={[-0.005, 0.883, -0.189]}
          rotation={[1.381, 0, 0]}
          scale={[0.118, 0.087, 0.079]}
        />
        <mesh
          geometry={nodes.Plane003.geometry}
          material={roomSetupMaterial}
          position={[0.245, 0.584, 0.166]}
          scale={[0.169, 0.255, 0.266]}
        />
        <mesh
          geometry={nodes.Plane008.geometry}
          material={roomSetupMaterial}
          position={[-0.19, 0.525, -0.13]}
          rotation={[-0.126, 0.075, -1.481]}
          scale={0.013}
        />
        <mesh
          geometry={nodes.Plane010.geometry}
          material={roomSetupMaterial}
          position={[0.07, 0.585, -0.074]}
          rotation={[1.293, 0, 0]}
          scale={[0.019, 0.079, 0.079]}
        />
        <mesh
          geometry={nodes.Plane013.geometry}
          material={roomSetupMaterial}
          position={[-0.005, 0.883, -0.189]}
          rotation={[1.381, 0, 0]}
          scale={[0.118, 0.087, 0.08]}
        />
      </group>
      <group position={[-0.297, 0.71, -1.582]} scale={0.455}>
        <mesh
          geometry={nodes.Cube004.geometry}
          material={roomSetupMaterial}
          position={[0.275, 0.036, -0.098]}
          rotation={[0.046, 0, 0]}
          scale={0.019}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={roomSetupMaterial}
          position={[0.275, 0.036, -0.098]}
          rotation={[0.046, 0, 0]}
          scale={0.019}
        />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={roomSetupMaterial}
          position={[0, 0.021, 0]}
          scale={0.091}
        />
        <mesh
          geometry={nodes.Text003.geometry}
          material={roomSetupMaterial}
          position={[-0.044, 0.055, -0.024]}
          rotation={[0.092, 0, 0]}
          scale={0.019}
        />
      </group>
      <mesh
        geometry={nodes.Be_Next_Client.geometry}
        material={creativeWord}
        position={[-0.01, 1.367, -1.937]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.041}
      />
      <mesh
        geometry={nodes.Be_Next_Client_Frame.geometry}
        material={roomSetupMaterial}
        position={[-0.011, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Bistro_Box.geometry}
        material={roomSetupMaterial}
        position={[-0.011, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Cairo_runners.geometry}
        material={roomSetupMaterial}
        position={[-0.278, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Coach_Sama.geometry}
        material={roomSetupMaterial}
        position={[-0.278, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Informa_Image.geometry}
        material={roomSetupMaterial}
        position={[-0.541, 1.688, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.SIYL.geometry}
        material={roomSetupMaterial}
        position={[-0.541, 1.375, -1.942]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.138, 0.138]}
      />
      <mesh
        geometry={nodes.Mouse.geometry}
        material={roomSetupMaterial}
        position={[-0.071, 0.709, -1.576]}
        rotation={[-Math.PI, 0.001, -Math.PI]}
      />
      <mesh
        geometry={nodes["case"].geometry}
        material={caseMaterial}
        position={[0.365, 0.873, -1.769]}
        rotation={[0, -0.954, 0]}
        scale={0.009}
      >
        <mesh
          geometry={nodes.Fans.geometry}
          material={roomSetupMaterial}
          position={[-18.892, 3.85, -0.249]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[1.391, 0.454, 1.391]}
        />
        <mesh
          geometry={nodes.liquid_cooling2.geometry}
          material={roomSetupMaterial}
          position={[9.585, -12.353, -6.06]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[1.048, 0.336, 1.031]}
        />
        <mesh
          geometry={nodes.motherboard.geometry}
          material={roomSetupMaterial}
          position={[-6.648, -2.278, -7.67]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={11.127}
        />
        <mesh
          geometry={nodes.Ram.geometry}
          material={roomSetupMaterial}
          position={[-1.231, 2.013, -5.316]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.302, 2.047, 4.646]}
        />
      </mesh>
      <mesh
        geometry={nodes.Mousepad.geometry}
        material={roomSetupMaterial}
        position={[-0.185, 0.709, -1.573]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.126, 0.172, 0.172]}
      />
      <mesh
        geometry={nodes.book_cover007.geometry}
        material={roomSetupMaterial}
        position={[-1.707, 0.394, -0.392]}
        rotation={[-Math.PI / 2, 0, -2.185]}
      />
      <mesh
        geometry={nodes.book_inside006.geometry}
        material={roomSetupMaterial}
        position={[-1.689, 0.28, 1.091]}
        rotation={[-Math.PI / 2, 0, -3.029]}
      />
      <mesh
        geometry={nodes.Whiteboard_text.geometry}
        material={roomSetupMaterial}
        position={[-1.721, 0.782, -0.727]}
        rotation={[Math.PI / 2, 0, -1.181]}
        scale={0.186}
      />
      <mesh
        geometry={nodes.Window.geometry}
        material={windowFrameMaterial}
        position={[1.555, 1.213, -2.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.401, 0.722, 0.401]}
      />
      <mesh
        geometry={nodes.Window_Glass.geometry}
        material={windowMaterial}
        position={[1.555, 1.213, -2.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.401, 0.722, 0.401]}
      />
      <mesh
        geometry={nodes.Tv.geometry}
        material={roomSetupMaterial}
        position={[-1.725, 0.382, 0.361]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.718}
      />
      <mesh
        geometry={nodes["DMC_Sci-Fi_Hover_Car"].geometry}
        material={roomSetupMaterial}
        position={[-1.696, 0.382, 1.125]}
        rotation={[-Math.PI, 0.621, -Math.PI]}
        scale={0.089}
      />
      <mesh
        geometry={nodes.Transparent_case.geometry}
        material={caseTransparentMaterial}
        position={[0.365, 0.873, -1.769]}
        rotation={[0, -0.954, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.whiteboard001.geometry}
        material={roomSetupMaterial}
        position={[-1.634, 0.377, -0.967]}
        rotation={[-Math.PI / 2, 0, 1.181]}
        scale={[0.055, 0.042, 0.042]}
      />
    </group>
  );
}

useGLTF.preload("/models/room-scene/room-setup.glb");

export default RoomSetup;
