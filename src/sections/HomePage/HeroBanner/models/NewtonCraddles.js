import React, { useEffect, useRef } from "react";
// React three drei
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------------------

function NewtonCraddles(props) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF(
    "models/room-scene/newton-craddles.glb"
  );

  const newtonCraddlesTexture = useTexture(
    "/textures/room-scene/newton-craddles.jpg"
  );
  newtonCraddlesTexture.flipY = false;

  const newtonCraddlesMaterial = new THREE.MeshBasicMaterial({
    map: newtonCraddlesTexture,
  });

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play all animations
    names.forEach((name) => {
      actions[name].play();
    });
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[-0.941, 0.747, -1.701]}
          rotation={[-Math.PI / 2, 0, -1.011]}
          scale={0.017}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="ball001_10" position={[0, 0, -2]}>
                <mesh
                  name="Ball_2"
                  geometry={nodes.Ball_2.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-0.001, 0.236, -0.001]}
                />
              </group>
              <group name="ball002_5" position={[0, 0, -4]}>
                <mesh
                  name="Ball_3"
                  geometry={nodes.Ball_3.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-0.001, 0.236, -0.001]}
                />
              </group>
              <group name="ball003_4" position={[0, 0, -6]}>
                <mesh
                  name="Ball_4"
                  geometry={nodes.Ball_4.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-0.001, 0.236, -0.001]}
                />
              </group>
              <group name="ball004_3" position={[0, 0, -8]}>
                <mesh
                  name="Ball_5"
                  geometry={nodes.Ball_5.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-0.001, 0.236, -0.001]}
                />
              </group>
              <group
                name="ball_12"
                position={[0, 2.008, 5.51]}
                rotation={[-0.699, 0, 0]}
              >
                <mesh
                  name="Ball_1"
                  geometry={nodes.Ball_1.geometry}
                  material={newtonCraddlesMaterial}
                  position={[0, 0.234, 0]}
                />
              </group>
              <group
                name="thread001_9"
                position={[0, 1.039, -2]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Thread_2"
                  geometry={nodes.Thread_2.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-3.416, 0.027, -0.005]}
                />
              </group>
              <group
                name="thread002_8"
                position={[0, 1.039, -4]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Thread_3"
                  geometry={nodes.Thread_3.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-3.416, 0.027, -0.005]}
                />
              </group>
              <group
                name="thread003_7"
                position={[0, 1.039, -6]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Thread_4"
                  geometry={nodes.Thread_4.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-3.416, 0.027, -0.005]}
                />
              </group>
              <group
                name="thread004_6"
                position={[0, 1.039, -8]}
                rotation={[0, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Thread_5"
                  geometry={nodes.Thread_5.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-3.416, 0.027, -0.005]}
                />
              </group>
              <group
                name="thread_11"
                position={[0, 2.803, 4.842]}
                rotation={[-0.699, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Thread_1"
                  geometry={nodes.Thread_1.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-3.416, 0.027, -0.005]}
                />
              </group>
              <group name="Base_2" position={[0, -1.727, -4]}>
                <mesh
                  name="Base"
                  geometry={nodes.Base.geometry}
                  material={newtonCraddlesMaterial}
                  position={[0.017, 0.017, -0.091]}
                />
              </group>
              <group
                name="Frame_1"
                position={[3.227, 8.565, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Frame"
                  geometry={nodes.Frame.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-3.227, -4, 0.31]}
                />
              </group>
              <group
                name="Thread_Fix_0"
                position={[3.413, 8.565, 0]}
                rotation={[0, 0, Math.PI / 2]}
              >
                <mesh
                  name="Thread_points"
                  geometry={nodes.Thread_points.geometry}
                  material={newtonCraddlesMaterial}
                  position={[-0.001, 3.547, -4.15]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/room-scene/newton-craddles.glb");

export default NewtonCraddles;
