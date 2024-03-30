import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text3D } from "@react-three/drei";

function CubeBox({ position }) {
  // Destructure the props object to access position
  const ref = useRef();
  const [stopRotation, setStopRotation] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    // ref.current.rotation.x -= 0.05;
    // ref.current.rotation.z += delta;
    // ref.current.rotation.y -= delta * 0.05;
  });

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        scale={isHovered ? 2 : 1}
        onPointerOver={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerOut={(event) => setIsHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} /> {/* Define dimensions of the box */}
        <meshStandardMaterial attach="material-0" color={"hotpink"} />
        <meshStandardMaterial attach="material-1" color={"lightblue"} />
        <meshStandardMaterial attach="material-2" color={"indianred"} />
        <meshStandardMaterial attach="material-3" color={"aquamarine"} />
        <meshStandardMaterial attach="material-4" color={"cyan"} />
        <meshStandardMaterial attach="material-5" color={"purple"} />
        <Text3D
          font={"/bison.json"}
          position={[0.35, -0.1, -0.6]}
          size={0.22}
          color={"rgb(255, 255, 0)"} // Yellow color specified using RGB value
          rotation={[0, -3.1, 0]}
          scale={1.5}
        >
          hello
        </Text3D>
      </mesh>
    </>
  );
}

export default function Cubes() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight
        position={[1, 1, 1]}
        angle={0.25}
        color={"blue"}
        intensity={7}
      />
      <CubeBox position={[0, 0, 0]} /> {/* Pass position as a prop */}
      <OrbitControls />
    </Canvas>
  );
}
