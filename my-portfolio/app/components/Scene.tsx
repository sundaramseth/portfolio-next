"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Space from "./Canvas/Space"
import Earth from "./Canvas/Earth"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import ProjectsPopup from "./UI/ProjectsPopup"

export default function Scene() {
  const [showProjects, setShowProjects] = useState(false);


  return (
    <>

    <Canvas 
     style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }} 
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="fixed inset-0"
      
    >

        {/* Lights for Earth */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 0, 10]} intensity={1.5} />

       {/* Space  */}
      <Space />

      {/* Earth */}
      <Earth onClick={() => setShowProjects(true)} />

       {/* Camera motion */}
      {/* <CameraAnimation /> */}
      {/* Controls (optional) */}
      <OrbitControls enableZoom={true} enablePan={false} minZoom={10} minDistance={5} maxDistance={15} />
    </Canvas>

     {/* Projects Popup */}
      {showProjects && (
        <ProjectsPopup onClose={() => setShowProjects(false)} />
      )}
          </>
  )
}
