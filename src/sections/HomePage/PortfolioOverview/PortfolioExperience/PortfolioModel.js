"use client";
import React from "react";
// React Three Drei
import { useGLTF, useTexture } from "@react-three/drei";
// Threejs
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------------

function PortfolioModel(props) {
  const { nodes, materials } = useGLTF("/models/3d-portfolio.glb");

  const texture = useTexture("/textures/3d-portfolio.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.MeshStandardMaterial({ map: texture });

  const emissionText = new THREE.MeshStandardMaterial({
    emissive: 10,
    color: "#FFEAAE",
  });

  const handleLinkMeshClick = (link) => {
    window.open(link);
  };

  return (
    <group {...props} dispose={null}>
      <group
        position={[3.254, 7.786, 9.064]}
        rotation={[0, 0, Math.PI]}
        scale={5.38}
      >
        <mesh geometry={nodes.base.geometry} material={material} />
        <mesh
          geometry={nodes.light_frame.geometry}
          material={material}
          position={[0, 0.041, 0]}
          rotation={[-1.473, -1.015, -1.456]}
        />
      </group>
      <group
        position={[3.254, 7.786, -0.934]}
        rotation={[0, 0, Math.PI]}
        scale={5.38}
      >
        <mesh geometry={nodes.base001.geometry} material={material} />
        <mesh
          geometry={nodes.light_frame001.geometry}
          material={material}
          position={[0, 0.041, 0]}
          rotation={[-1.473, -1.015, -1.456]}
        />
      </group>
      <group
        position={[3.254, 7.786, -2.854]}
        rotation={[0, 1.383, Math.PI]}
        scale={5.38}
      >
        <mesh geometry={nodes.base002.geometry} material={material} />
        <mesh
          geometry={nodes.light_frame002.geometry}
          material={material}
          position={[0, 0.041, 0]}
          rotation={[-1.501, -0.877, -1.48]}
        />
      </group>
      <group
        position={[-3.179, 7.786, -2.854]}
        rotation={[0, 1.383, Math.PI]}
        scale={5.38}
      >
        <mesh geometry={nodes.base003.geometry} material={material} />
        <mesh
          geometry={nodes.light_frame003.geometry}
          material={material}
          position={[0, 0.041, 0]}
          rotation={[-1.501, -0.877, -1.48]}
        />
      </group>
      <group
        position={[-3.195, 7.786, 9.064]}
        rotation={[-Math.PI, 0, 0]}
        scale={5.38}
      >
        <mesh geometry={nodes.base004.geometry} material={material} />
        <mesh
          geometry={nodes.light_frame004.geometry}
          material={material}
          position={[0, 0.041, 0]}
          rotation={[-1.473, -1.015, -1.456]}
        />
      </group>
      <group
        position={[-3.44, 7.786, -0.934]}
        rotation={[-Math.PI, 0, 0]}
        scale={5.38}
      >
        <mesh geometry={nodes.base005.geometry} material={material} />
        <mesh
          geometry={nodes.light_frame005.geometry}
          material={material}
          position={[0, 0.041, 0]}
          rotation={[-1.473, -1.015, -1.456]}
        />
      </group>
      <mesh
        geometry={nodes.Walls.geometry}
        material={material}
        scale={[8, 10.736, 8]}
      />
      <mesh
        geometry={nodes.Floor.geometry}
        material={material}
        position={[0, 0, 4]}
        scale={[8, 8, 12]}
      />
      <mesh
        geometry={nodes.Celling.geometry}
        material={material}
        position={[0, 2.052, 0]}
        scale={8}
      />
      <mesh
        geometry={nodes.Celling_Planks_Cover.geometry}
        material={material}
        position={[0, 7.959, 5.345]}
        rotation={[0, 0, Math.PI]}
        scale={[3.961, 0.093, 8.817]}
      />
      <mesh
        geometry={nodes.Celling_Planks.geometry}
        material={material}
        position={[0, 7.959, 5.345]}
        rotation={[0, 0, Math.PI]}
        scale={[3.961, 0.093, 8.817]}
      />
      <mesh
        geometry={nodes.Word.geometry}
        material={emissionText}
        position={[0.276, 6.866, -8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.082}
      />
      <mesh
        geometry={nodes.Wood_Desk.geometry}
        material={material}
        position={[0.028, -0.002, 4.128]}
        scale={[2.889, 1, 1]}
      />
      <mesh
        geometry={nodes.Wood_Desk001.geometry}
        material={material}
        position={[0.028, -0.002, -4.822]}
        scale={[2.889, 1, 1]}
      />
      <mesh
        geometry={nodes.Framed__modern_painting001.geometry}
        material={material}
        position={[4.004, 4.066, -8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.243}
      />
      <mesh
        geometry={nodes.Framed__modern_painting002.geometry}
        material={material}
        position={[8, 4.066, -1.948]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={4.243}
      />
      <mesh
        geometry={nodes.Framed__modern_painting003.geometry}
        material={material}
        position={[8, 4.066, 8.384]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={4.243}
      />
      <mesh
        geometry={nodes.Framed__modern_painting004.geometry}
        material={material}
        position={[-8, 4.066, -2.281]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={4.243}
      />
      <mesh
        geometry={nodes.Framed__modern_painting005.geometry}
        material={material}
        position={[-8, 4.066, 8.165]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={4.243}
      />
      <mesh
        geometry={nodes.Framed__modern_painting006.geometry}
        material={material}
        position={[-3.937, 4.066, -8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.243}
      />
      <mesh
        onClick={() =>
          handleLinkMeshClick("https://hollandegyptiancompany.com")
        }
        geometry={nodes.HEC.geometry}
        material={emissionText}
        position={[7.83, 6.477, 8.399]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.543}
      />
      <mesh
        onClick={() => handleLinkMeshClick("https://cairorunners.com")}
        geometry={nodes.Cairo_Runners.geometry}
        material={emissionText}
        position={[7.83, 6.477, -1.881]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.543}
      />
      <mesh
        onClick={() => handleLinkMeshClick("https://coachsama.net")}
        geometry={nodes.csc.geometry}
        material={emissionText}
        position={[4.02, 1.494, -8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.543}
      />
      <mesh
        onClick={() => handleLinkMeshClick("https://informa-180.com")}
        geometry={nodes.informa.geometry}
        material={emissionText}
        position={[-4.107, 1.494, -8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.543}
      />
      <mesh
        onClick={() => handleLinkMeshClick("https://instaglowing.com")}
        geometry={nodes.instaglowing.geometry}
        material={emissionText}
        position={[-8, 6.477, -2.193]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.543}
      />
      <mesh
        onClick={() => handleLinkMeshClick("https://siylcoaching.com")}
        geometry={nodes.siyl.geometry}
        material={emissionText}
        position={[-8, 6.477, 8.348]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.543}
      />
    </group>
  );
}

useGLTF.preload("/models/3d-portfolio.glb");

export default PortfolioModel;
