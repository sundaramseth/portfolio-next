"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { Mesh } from "three"

type Props = {
  onClick: () => void;
};


export default function Earth({ onClick }: Props) {
  const mesh = useRef<Mesh>(null!)

  const textures = useTexture({
    map: "/textures/earth_day.jpg",
    normalMap: "/textures/earthnormal2.jpg",
    roughnessMap: "/textures/earth_specular.jpg",
  })

  useFrame(() => {
    mesh.current.rotation.y += 0.0015
  })

  return (
    <mesh ref={mesh} onClick={onClick} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial {...textures} emissiveIntensity={0.2} opacity={0.1} color="#4cc9f0" />
    </mesh>
  )
}
