"use client";
import React, { useRef } from "react";
// React three drei
import { useGLTF, useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// -------------------------------------------------------------------------------------------------------------------

function RoomModel(props) {
  const { nodes, materials } = useGLTF("/models/room-scene/room-model.glb");

  const roomTexture = useTexture("/textures/room-scene/room-setup.jpg");
  roomTexture.flipY = false;
  const material = new THREE.MeshBasicMaterial({ map: roomTexture });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Creative_Software_Solutions.geometry}
        material={nodes.Creative_Software_Solutions.material}
        position={[-2, 1.46, -0.036]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.26}
      />
      <mesh
        geometry={nodes["DMC_Sci-Fi_Hover_Car"].geometry}
        material={material}
        position={[-1.696, 0.382, 1.125]}
        rotation={[-Math.PI, 0.621, -Math.PI]}
        scale={0.089}
      />
      <mesh
        geometry={nodes.Living_Wall.geometry}
        material={material}
        position={[-2.067, 0.998, -0.05]}
        scale={[4, 2, 2]}
      />
      <mesh
        geometry={nodes.Setup_Wall.geometry}
        material={material}
        position={[0.603, 1.137, -2.044]}
        scale={[1, 1, 2]}
      />
      <mesh
        geometry={nodes.Floor.geometry}
        material={material}
        position={[0, 0.032, 0.05]}
        scale={[2, 0.034, 2]}
      />
      <mesh
        geometry={nodes.Cover.geometry}
        material={material}
        position={[-0.899, 0.376, -1.665]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Drawers.geometry}
        material={nodes.Drawers.material}
        position={[-0.899, 0.396, -1.365]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Cover001.geometry}
        material={nodes.Cover001.material}
        position={[0.389, 0.376, -1.665]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Drawers002.geometry}
        material={nodes.Drawers002.material}
        position={[0.39, 0.398, -1.355]}
        scale={1.123}
      />
      <mesh
        geometry={nodes.Desk_Counter_Top.geometry}
        material={material}
        position={[-0.257, 0.678, -1.622]}
        scale={[0.817, 0.852, 0.314]}
      />
      <mesh
        geometry={nodes.Carpet.geometry}
        material={material}
        position={[0, 0.087, 0.371]}
        scale={[0.702, 0.617, 0.971]}
      />
      <mesh
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[-1.721, 0.782, -0.727]}
        rotation={[Math.PI / 2, 0, -1.181]}
        scale={0.186}
      />
      <mesh
        geometry={nodes.Strelizia_nikolai.geometry}
        material={material}
        position={[-1.847, 0.087, 1.693]}
        rotation={[-Math.PI, 1.202, -Math.PI]}
      />
      <mesh
        geometry={nodes.Bean_Bag.geometry}
        material={material}
        position={[1.313, 0.283, -1.434]}
        rotation={[0, -0.382, 0]}
        scale={0.562}
      />
      <mesh
        geometry={nodes.Sofa.geometry}
        material={material}
        position={[1.44, 0.211, 0.449]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.752, 0.792, 0.792]}
      />
      <mesh
        geometry={nodes.Cabinet_cover.geometry}
        material={material}
        position={[-1.723, 0.106, 0.391]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          geometry={nodes.Cabinet1.geometry}
          material={material}
          position={[-0.9, 0.01, -0.184]}
        />
        <mesh
          geometry={nodes.Cabinet1_Door.geometry}
          material={material}
          position={[-0.6, 0.086, 0.176]}
        />
        <mesh
          geometry={nodes.legs003.geometry}
          material={material}
          position={[-0.762, -0.032, -0.139]}
          rotation={[0.155, 0, -0.235]}
          scale={[0.014, 0.037, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.book_cover007.geometry}
        material={material}
        position={[-1.707, 0.394, -0.392]}
        rotation={[-Math.PI / 2, 0, -2.185]}
      >
        <mesh
          geometry={nodes.book_inside007.geometry}
          material={material}
          position={[0, 0, 0.001]}
        />
      </mesh>
      <mesh
        geometry={nodes.book_cover006.geometry}
        material={material}
        position={[-1.689, 0.28, 1.091]}
        rotation={[-Math.PI / 2, 0, -3.029]}
      />
      <mesh
        geometry={nodes.book_cover005.geometry}
        material={material}
        position={[-1.689, 0.256, 1.091]}
        rotation={[-Math.PI / 2, 0, -2.896]}
      >
        <mesh geometry={nodes.book_inside005.geometry} material={material} />
        <mesh
          geometry={nodes.book_inside006.geometry}
          material={material}
          position={[0, 0, 0.024]}
          rotation={[0, 0, -0.134]}
        />
      </mesh>
      <mesh
        geometry={nodes.Coffee_Table001.geometry}
        material={material}
        position={[0.024, 0.105, 0.426]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.307, 0.168, 0.022]}
      />
      <mesh
        geometry={nodes["case"].geometry}
        material={material}
        position={[0.365, 0.873, -1.769]}
        rotation={[0, -0.954, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Mouse.geometry}
        material={material}
        position={[-0.071, 0.709, -1.576]}
        rotation={[-Math.PI, 0.001, -Math.PI]}
      >
        <mesh
          geometry={nodes.Light_Mouse.geometry}
          material={material}
          position={[0, 0.022, -0.038]}
          rotation={[-0.475, 0, 0]}
          scale={0.008}
        />
      </mesh>
      <mesh
        geometry={nodes.Gaming_Keyboard.geometry}
        material={material}
        position={[-0.357, 0.735, -1.6]}
        rotation={[0.092, 0, 0]}
        scale={0.009}
      />
      <mesh
        geometry={nodes.Mousepad.geometry}
        material={material}
        position={[-0.185, 0.709, -1.573]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.126, 0.172, 0.172]}
      />
      <mesh
        geometry={nodes.Window.geometry}
        material={nodes.Window.material}
        position={[1.555, 1.213, -2.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.401, 0.722, 0.401]}
      />
      <mesh
        geometry={nodes.Window_Glass.geometry}
        material={nodes.Window_Glass.material}
        position={[1.555, 1.213, -2.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.401, 0.722, 0.401]}
      />
      <mesh
        geometry={nodes.Wall_Lamp_.geometry}
        material={material}
        position={[0.709, 1.553, -1.95]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Window_Blind.geometry}
        material={nodes.Window_Blind.material}
        position={[1.395, 1.845, -2.013]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.681, 1, 2.029]}
      />
      <mesh
        geometry={nodes.Lamp_Stand.geometry}
        material={material}
        position={[-1.921, 0.317, -1.859]}
        rotation={[-Math.PI, 1.569, -Math.PI]}
        scale={0.014}
      />
      <mesh
        geometry={nodes.wheel001_Material003_0001.geometry}
        material={material}
        position={[-1.388, 0.071, -1.157]}
        rotation={[Math.PI, 0.39, Math.PI / 2]}
        scale={[0.018, 0.018, 0.016]}
      />
      <mesh
        geometry={nodes.wheel002_Material007_0001.geometry}
        material={material}
        position={[-1.669, 0.071, -1.268]}
        rotation={[0.032, -0.274, -1.558]}
        scale={[0.018, 0.018, 0.015]}
      />
      <mesh
        geometry={nodes.wheel003_Material005_0001.geometry}
        material={material}
        position={[-1.594, 0.071, -0.657]}
        rotation={[Math.PI, 0.39, Math.PI / 2]}
        scale={[0.018, 0.018, 0.016]}
      />
      <mesh
        geometry={nodes.wheel004_Material006_0001.geometry}
        material={material}
        position={[-1.872, 0.071, -0.775]}
        rotation={[0.032, -0.274, -1.558]}
        scale={[0.018, 0.018, 0.015]}
      />
      <mesh
        geometry={nodes.whiteboard_original_Material_0001.geometry}
        material={material}
        position={[-1.634, 0.377, -0.967]}
        rotation={[-Math.PI / 2, 0, 1.181]}
        scale={[0.055, 0.042, 0.042]}
      />
      <mesh
        geometry={nodes.BottleBase.geometry}
        material={material}
        position={[-0.264, 0.46, 0.562]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          geometry={nodes.Cap.geometry}
          material={material}
          position={[0, 0.207, -0.045]}
        >
          <mesh geometry={nodes.Hook.geometry} material={material} />
        </mesh>
      </mesh>
      <mesh
        geometry={nodes.Ball_2.geometry}
        material={material}
        position={[-0.912, 0.751, -1.72]}
        rotation={[0, -1.011, 0]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Ball_3.geometry}
        material={material}
        position={[-0.882, 0.751, -1.738]}
        rotation={[0, -1.011, 0]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Ball_4.geometry}
        material={material}
        position={[-0.852, 0.751, -1.757]}
        rotation={[0, -1.011, 0]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Ball_5.geometry}
        material={material}
        position={[-0.823, 0.751, -1.775]}
        rotation={[0, -1.011, 0]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Ball_1.geometry}
        material={material}
        position={[-1.02, 0.785, -1.652]}
        rotation={[-1.007, -0.706, -0.798]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Base.geometry}
        material={material}
        position={[-0.881, 0.717, -1.739]}
        rotation={[0, -1.011, 0]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Frame.geometry}
        material={material}
        position={[-0.882, 0.89, -1.738]}
        rotation={[Math.PI / 2, 0, 1.011]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Thread_points.geometry}
        material={material}
        position={[-0.881, 0.896, -1.742]}
        rotation={[0, -1.011, Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Thread_2.geometry}
        material={material}
        position={[-0.911, 0.824, -1.72]}
        rotation={[0, -1.011, -Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Thread_3.geometry}
        material={material}
        position={[-0.882, 0.824, -1.738]}
        rotation={[0, -1.011, -Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Thread_4.geometry}
        material={material}
        position={[-0.852, 0.824, -1.757]}
        rotation={[0, -1.011, -Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Thread_5.geometry}
        material={material}
        position={[-0.823, 0.824, -1.775]}
        rotation={[0, -1.011, -Math.PI / 2]}
        scale={0.017}
      />
      <mesh
        geometry={nodes.Thread_1.geometry}
        material={material}
        position={[-0.98, 0.841, -1.677]}
        rotation={[-1.007, -0.706, -2.369]}
        scale={0.017}
      />
    </group>
  );
}

useGLTF.preload("/models/room-scene/room-model.glb");

export default RoomModel;
