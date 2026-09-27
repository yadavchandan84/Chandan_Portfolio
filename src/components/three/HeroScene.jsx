import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Torus,
  TorusKnot,
  OrbitControls,
  Stars,
} from '@react-three/drei'

// A slowly rotating, mouse-reactive knot of geometry that reads as an
// abstract "AI core". Purely decorative; wrapped in Suspense with a
// non-WebGL fallback handled by the parent.

function CoreBlob() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.15
    ref.current.rotation.x += delta * 0.05
  })
  return (
    <Icosahedron ref={ref} args={[1.35, 8]}>
      <MeshDistortMaterial
        color="#14b8a6"
        emissive="#0d9488"
        emissiveIntensity={0.35}
        roughness={0.15}
        metalness={0.6}
        distort={0.38}
        speed={1.6}
      />
    </Icosahedron>
  )
}

function OrbitRing({ radius = 2.4, tube = 0.02, color = '#2dd4bf', speed = 0.2, tilt = 0 }) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <group rotation={[tilt, 0, 0]}>
      <Torus ref={ref} args={[radius, tube, 16, 100]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </Torus>
    </group>
  )
}

function FloatingKnots() {
  const knots = useMemo(
    () => [
      { pos: [2.6, 1.2, -1], scale: 0.28, color: '#2dd4bf' },
      { pos: [-2.7, -0.8, -0.5], scale: 0.22, color: '#22d3ee' },
      { pos: [2.2, -1.6, 0.5], scale: 0.18, color: '#5eead4' },
      { pos: [-2.2, 1.7, 0.2], scale: 0.2, color: '#14b8a6' },
    ],
    [],
  )
  return knots.map((k, i) => (
    <Float key={i} speed={2 + i * 0.3} rotationIntensity={1.2} floatIntensity={1.6}>
      <TorusKnot position={k.pos} scale={k.scale} args={[1, 0.35, 128, 16]}>
        <meshStandardMaterial
          color={k.color}
          emissive={k.color}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.7}
        />
      </TorusKnot>
    </Float>
  ))
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} color="#e0fffa" />
        <pointLight position={[-5, -3, -4]} intensity={2} color="#14b8a6" />
        <pointLight position={[4, -2, 3]} intensity={1.2} color="#22d3ee" />

        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
          <CoreBlob />
        </Float>

        <OrbitRing radius={2.3} tilt={1.2} speed={0.25} color="#2dd4bf" />
        <OrbitRing radius={2.8} tilt={-0.6} speed={-0.18} color="#22d3ee" />
        <FloatingKnots />

        <Stars radius={40} depth={30} count={1200} factor={3} saturation={0} fade speed={1} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Suspense>
    </Canvas>
  )
}
