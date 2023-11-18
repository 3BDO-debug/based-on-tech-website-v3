"use client";
import React, { useEffect, useRef } from "react";
// React Three Drei
import { useGLTF, useAnimations } from "@react-three/drei";
// THREE Js
import * as THREE from "three";

// -----------------------------------------------------------------------------------------------

function AbstractModel(props) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF("/models/our-projects.glb");

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play all animations
    names.forEach((name) => {
      actions[name].play();
    });
  }, [actions, names]);

  return (
    <group scale={[3.2, 3.2, 3.2]} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder001_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cylinder002_1">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group name="Cylinder003_2">
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.003"]}
                />
              </group>
              <group name="Cylinder004_3">
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group name="Cylinder005_4">
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials["Material.005"]}
                />
              </group>
              <group name="Cylinder006_5">
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials["Material.006"]}
                />
              </group>
              <group name="Cylinder007_6">
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.007"]}
                />
              </group>
              <group name="Cylinder008_7">
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group name="Cylinder009_8">
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.009"]}
                />
              </group>
              <group name="Cylinder010_9">
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials["Material.010"]}
                />
              </group>
              <group name="Cylinder011_10">
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.011"]}
                />
              </group>
              <group name="Cylinder012_11">
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.012"]}
                />
              </group>
              <group name="Cylinder013_12">
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials["Material.013"]}
                />
              </group>
              <group name="Cylinder014_13">
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials["Material.014"]}
                />
              </group>
              <group name="Cylinder015_14">
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials["Material.015"]}
                />
              </group>

              <group
                name="Cube_16"
                rotation={[-Math.PI, 0, 0]}
                scale={[-0.026, 0.026, 0.026]}
              >
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials.cube}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default AbstractModel;
