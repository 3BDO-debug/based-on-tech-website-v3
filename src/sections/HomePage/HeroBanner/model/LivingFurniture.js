import React from "react";
// react three fibers
import { useTexture } from "@react-three/drei";
// Three js
import * as THREE from "three";

// --------------------------------------------------------------------------------------------------

function LivingFurniture(props) {
  const { nodes } = props;

  const texture = useTexture("/textures/living-furniture.jpg");
  texture.flipY = false;

  const coffeTabletexture = useTexture("/textures/coffe-table.jpg");
  coffeTabletexture.flipY = false;

  const coffeTablematerial = new THREE.MeshStandardMaterial({
    map: coffeTabletexture,
  });

  const material = new THREE.MeshStandardMaterial({ map: texture });

  return (
    <group>
      <mesh
        name="Bean_Bag"
        geometry={nodes.Bean_Bag.geometry}
        material={material}
        position={[1.313, 0.283, -1.434]}
        rotation={[0, -0.382, 0]}
        scale={0.562}
      />
      <mesh
        name="Sofa"
        geometry={nodes.Sofa.geometry}
        material={material}
        position={[1.44, 0.211, 0.449]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.752, 0.792, 0.792]}
      />
      <mesh
        name="Cabinet_cover"
        geometry={nodes.Cabinet_cover.geometry}
        material={material}
        position={[-1.723, 0.106, 0.391]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cabinet1"
          geometry={nodes.Cabinet1.geometry}
          material={material}
          position={[-0.9, 0.01, -0.184]}
        />
        <mesh
          name="Cabinet1_Door"
          geometry={nodes.Cabinet1_Door.geometry}
          material={material}
          position={[-0.6, 0.086, 0.176]}
        />
        <mesh
          name="Cabinet2"
          geometry={nodes.Cabinet2.geometry}
          material={material}
          position={[-0.3, 0.01, -0.184]}
        />
        <mesh
          name="Cabinet3"
          geometry={nodes.Cabinet3.geometry}
          material={material}
          position={[0.3, 0.01, -0.184]}
        />
        <mesh
          name="legs003"
          geometry={nodes.legs003.geometry}
          material={material}
          position={[-0.762, -0.032, -0.139]}
          rotation={[0.155, 0, -0.235]}
          scale={[0.014, 0.037, 0.014]}
        />
      </mesh>
      <mesh
        name="book_cover007"
        geometry={nodes.book_cover007.geometry}
        material={material}
        position={[-1.707, 0.394, -0.392]}
        rotation={[-Math.PI / 2, 0, -2.185]}
      >
        <mesh
          name="book_inside007"
          geometry={nodes.book_inside007.geometry}
          material={material}
          position={[0, 0, 0.001]}
        />
      </mesh>
      <mesh
        name="book_cover006"
        geometry={nodes.book_cover006.geometry}
        material={material}
        position={[-1.689, 0.28, 1.091]}
        rotation={[-Math.PI / 2, 0, -3.029]}
      />
      <mesh
        name="book_cover005"
        geometry={nodes.book_cover005.geometry}
        material={material}
        position={[-1.689, 0.256, 1.091]}
        rotation={[-Math.PI / 2, 0, -2.896]}
      >
        <mesh
          name="book_inside005"
          geometry={nodes.book_inside005.geometry}
          material={material}
        />
        <mesh
          name="book_inside006"
          geometry={nodes.book_inside006.geometry}
          material={material}
          position={[0, 0, 0.024]}
          rotation={[0, 0, -0.134]}
        />
      </mesh>

      <mesh
        name="Coffee_Table001"
        geometry={nodes.Coffee_Table001.geometry}
        material={coffeTablematerial}
        position={[0.024, 0.105, 0.426]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.307, 0.168, 0.022]}
      />
    </group>
  );
}

export default LivingFurniture;
