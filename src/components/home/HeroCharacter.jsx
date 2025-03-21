'use client';

import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Character from './Character';

const HeroCharacter = () => {
  return (
    <div className=' md:w-md w-full h-[50vh] md:h-[100vh] '>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }} // Adjust camera position
      >
        <OrbitControls target={[0, 0, 0]} /> {/* Focus on the center */}
        <ambientLight intensity={1} />
        <pointLight position={[2, 5, 2]} intensity={0.8} />
        <directionalLight
          position={[-5, 5, 20]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
        />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Character position={[0, -100, 0]} /> {/* Ensure Character is centered */}
      </Canvas>
    </div>
  );
};

export default HeroCharacter;