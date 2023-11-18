import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

function WhiteBoard(props) {
  const { nodes, materials } = useGLTF("model/white-board.glb");

  const texture = useTexture("/textures/room-decorations.jpg");
  texture.flipY = false;

  const material = new THREE.MeshBasicMaterial();

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model001"
          position={[1, 1, 1]}
          rotation={[-Math.PI / 2, 0, 1.181]}
          scale={[0.001, 0, 0]}
        >
          <group
            name="1736a025e9e44a7f8887bdc12e8a58b5fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode001">
              <group
                name="wheel008"
                position={[-486.714, -40.262, -349.879]}
                rotation={[0, -1.458, -Math.PI / 2]}
                scale={[42.057, 42.057, 28.213]}
              />
              <group
                name="whiteboard_original001"
                position={[0, 688.984, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="whiteboard_original_Material_0001"
                  geometry={nodes.whiteboard_original_Material_0001.geometry}
                  material={material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("model/white-board.glb");

export default WhiteBoard;
