"use client";
import React, { useRef, useEffect } from "react";
// React Three Drei
import { useGLTF, useAnimations } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei";
// React Three Fibers
import { extend } from "@react-three/fiber";
// Three Js
import * as THREE from "three";

// ------------------------------------------------------------------------------------------

const GlowShaderMaterial = shaderMaterial(
  // Uniforms (variables passed to the shader)
  {
    color: new THREE.Color(0.2, 0.5, 1), // Example glow color
    // Add other uniforms as needed
  },
  // Vertex Shader
  `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform vec3 color;
  void main() {
    gl_FragColor = vec4(color, 1.0);
    // Add glow effect logic here
  }
  `
);

extend({ GlowShaderMaterial });

// ------------------------------------------------------------------------------------------

function BotModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/michi.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play all animations
    names.forEach((name) => {
      actions[name].play();
    });
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="9720a92d3b9a4d279bb7067fb9d66a02fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={2}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Geo">
                  <group name="Body" position={[0, -0.195, 0]}>
                    <group
                      name="Head"
                      position={[0, 0.306, 0.088]}
                      rotation={[0, Math.PI / 9, 0]}
                    >
                      <group name="Head_Prop" position={[0, 0.089, -0.088]}>
                        <mesh
                          name="Head_Prop_mat_michi_0"
                          geometry={nodes.Head_Prop_mat_michi_0.geometry}
                          material={materials.mat_michi}
                        />
                      </group>
                      <mesh
                        name="Head_mat_michi_0"
                        geometry={nodes.Head_mat_michi_0.geometry}
                        material={materials.mat_michi}
                      />
                    </group>
                    <group name="AlaSup_Low1" position={[0.627, 0.389, 0]}>
                      <group
                        name="Wing_Up_I_1"
                        position={[-0.627, -0.427, 0]}
                        rotation={[0, 0.436, 0]}
                      >
                        <group
                          name="Wing_Up_I"
                          position={[0.515, 0.296, -0.012]}
                        >
                          <mesh
                            name="Wing_Up_I_mat_michi_0"
                            geometry={nodes.Wing_Up_I_mat_michi_0.geometry}
                            material={materials.mat_michi}
                          />
                        </group>
                      </group>
                      <group
                        name="Wing_Up_D_1"
                        position={[-0.627, -0.427, 0]}
                        rotation={[0, -0.436, 0]}
                      >
                        <group
                          name="Wing_Up_D"
                          position={[-0.515, 0.296, -0.012]}
                        >
                          <mesh
                            name="Wing_Up_D_mat_michi_0"
                            geometry={nodes.Wing_Up_D_mat_michi_0.geometry}
                            material={materials.mat_michi}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Wing" position={[0.675, 0.203, 0]}>
                      <group
                        name="Wing_Down_I_1"
                        position={[-0.675, -0.241, 0]}
                        rotation={[0, 0.436, 0]}
                      >
                        <group
                          name="Wing_Down_I"
                          position={[0.589, 0.199, -0.012]}
                        >
                          <mesh
                            name="Wing_Down_I_mat_michi_0"
                            geometry={nodes.Wing_Down_I_mat_michi_0.geometry}
                            material={materials.mat_michi}
                          />
                        </group>
                      </group>
                      <group
                        name="Wing_Down_D_1"
                        position={[-0.675, -0.241, 0]}
                        rotation={[0, -0.436, 0]}
                      >
                        <group
                          name="Wing_Down_D"
                          position={[-0.589, 0.199, -0.012]}
                          rotation={[-0.122, -0.592, -0.068]}
                        >
                          <mesh
                            name="Wing_Down_D_mat_michi_0"
                            geometry={nodes.Wing_Down_D_mat_michi_0.geometry}
                            material={materials.mat_michi}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Shoulder" position={[0, 0.395, 0]}>
                      <group
                        name="Shoulder_I"
                        position={[0.394, -0.308, 0.056]}
                        rotation={[-0.857, 0.002, -0.004]}
                      >
                        <group
                          name="Cannon_I"
                          position={[0.058, 0.001, 0.052]}
                          rotation={[-0.009, 0.131, 0.151]}
                        >
                          <mesh
                            name="Cannon_I_mat_michi_0"
                            geometry={nodes.Cannon_I_mat_michi_0.geometry}
                            material={materials.mat_michi}
                          />
                        </group>
                        <mesh
                          name="Shoulder_I_mat_michi_0"
                          geometry={nodes.Shoulder_I_mat_michi_0.geometry}
                          material={materials.mat_michi}
                        />
                      </group>
                      <group
                        name="Shoulder_D"
                        position={[-0.394, -0.308, 0.056]}
                        rotation={[-0.672, 0.275, 0.13]}
                      >
                        <group
                          name="Cannon_D"
                          position={[0.394, 0.308, -0.056]}
                        >
                          <mesh
                            name="Cannon_D_mat_michi_0"
                            geometry={nodes.Cannon_D_mat_michi_0.geometry}
                            material={materials.mat_michi}
                          />
                        </group>
                        <mesh
                          name="Shoulder_D_mat_michi_0"
                          geometry={nodes.Shoulder_D_mat_michi_0.geometry}
                          material={materials.mat_michi}
                        />
                      </group>
                    </group>
                    <group name="Cannon" position={[0, 0.395, 0]} />
                    <mesh
                      name="Body_mat_michi_0"
                      geometry={nodes.Body_mat_michi_0.geometry}
                      material={materials.mat_michi}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/michi.glb");

export default BotModel;
