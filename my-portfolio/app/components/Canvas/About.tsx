"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Mesh } from "three"

export default function About() {
  const mesh = useRef<Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    mesh.current.rotation.y += 0.002
  })

  return (
    <mesh
      ref={mesh}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <sphereGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}
