import React, { useEffect, useRef } from "react";
// React Three Drei
import { useGLTF, useAnimations } from "@react-three/drei";
// THREE Js
import * as THREE from "three";

// ---------------------------------------------------------------------------------------------------------------------

function TechStacksModel(props) {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/tech-stacks.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play all animations
    names.forEach((name) => {
      actions[name].play();
    });
  }, [actions, names]);

  return <primitive ref={group} object={scene} scale={[3, 3, 3]} />;
}

useGLTF.preload("/models/tech-stacks.glb");

export default TechStacksModel;
