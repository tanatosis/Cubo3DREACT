import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";


const Box = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
};

const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
};

export default App;
