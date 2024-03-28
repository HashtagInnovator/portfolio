import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";

export default function Cubes() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      {/* Ambient light */}
      <ambientLight intensity={0.8} />

      {/* Cube */}
      <mesh>
        <boxGeometry />
        <meshStandardMaterial attach="material-0" color="hotpink" />
        <meshStandardMaterial attach="material-1" color="peachpuff" />
        <meshStandardMaterial attach="material-2" color="lightblue" />
        <meshStandardMaterial attach="material-3" color="indianred" />
        <meshStandardMaterial attach="material-4" color="aquamarine" />
        <meshStandardMaterial attach="material-5" color="orange" />
        <Text position={[0, 0, 0.6]} fontSize={0.4}>
          Por
        </Text>
      </mesh>
      {/* Orbit controls for camera manipulation */}
      <OrbitControls />
    </Canvas>
  );
}
