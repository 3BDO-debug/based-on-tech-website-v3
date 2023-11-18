import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function LightsWindow(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/lights-window.jpg");
  texture.flipY = false;

  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const cornetLampDiffusor = new THREE.MeshStandardMaterial({
    emissive: true,
    emissiveIntensity: 10,
    color: "#EEE2FF",
  });

  const windowFrameMaterial = new THREE.MeshStandardMaterial({
    color: "#C0C0C0",
  });

  const windowMaterial = new THREE.MeshPhongMaterial({
    color: "#D5B4C1",
    transparent: true,
    opacity: 0.2,
  });

  return (
    <group>
      <group name="Wall_light" position={[0.709, 1.722, -1.95]}>
        <mesh
          name="Wall_Lamp_"
          geometry={nodes.Wall_Lamp_.geometry}
          material={material}
          position={[0, -0.168, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="Basic_Blinds"
        position={[1.395, 1.845, -2.013]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.552, 0.81, 1.24]}
      >
        <group
          name="Empty"
          position={[0.817, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.234}
        />
        <group
          name="Empty001"
          position={[0, 0, -0.051]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.234}
        />
        <mesh
          name="Window_Blind"
          geometry={nodes.Window_Blind.geometry}
          material={material}
          morphTargetDictionary={nodes.Window_Blind.morphTargetDictionary}
          morphTargetInfluences={nodes.Window_Blind.morphTargetInfluences}
          scale={[1.234, 1.234, 1.636]}
        />
      </group>
      <group
        name="Corner_Lamp_Warm_White"
        position={[-1.978, 0.053, -1.914]}
        rotation={[0, -1.569, 0]}
        scale={0.721}
      >
        <mesh
          name="Diffusor"
          geometry={nodes.Diffusor.geometry}
          material={cornetLampDiffusor}
          position={[0.012, 0.557, -0.016]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.019, 0.688, 0.019]}
        />

        <mesh
          name="Lamp_Stand"
          geometry={nodes.Lamp_Stand.geometry}
          material={material}
          position={[0.077, 0.367, -0.08]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.02}
        />
      </group>
      <mesh
        name="Window"
        geometry={nodes.Window.geometry}
        material={windowFrameMaterial}
        position={[1.555, 1.213, -2.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.401, 0.722, 0.401]}
      />
      <mesh
        name="Window_Glass"
        geometry={nodes.Window_Glass.geometry}
        material={windowMaterial}
        position={[1.555, 1.213, -2.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.401, 0.722, 0.401]}
      />
    </group>
  );
}

export default LightsWindow;
