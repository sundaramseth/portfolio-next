"use client"

import { useTexture } from "@react-three/drei"
import { BackSide } from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"
export default function Space() {

  const spaceTexture = useTexture("/textures/space.jpg")
  
  const mesh = useRef<Mesh>(null!)

  useFrame(() => {
   mesh.current.rotation.y += 0.0005
  })
  return (
    <mesh ref={mesh} scale={15}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshBasicMaterial
        map={spaceTexture}
        side={BackSide}
      />
    </mesh>
  )
}
