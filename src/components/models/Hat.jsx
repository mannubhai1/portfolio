"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Hat(props) {
  const { nodes, materials } = useGLTF("/hat-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/hat-transformed.glb");
