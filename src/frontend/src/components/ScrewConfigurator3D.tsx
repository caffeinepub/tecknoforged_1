import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  type Finish,
  type ScrewLength,
  type ScrewSize,
  type ScrewType,
  buildThreadGeometry,
  finishMaterials,
  getDriveSegments,
  getHeadDims,
  lengthScale,
  sizeScale,
} from "../lib/screwGeometry";

// Re-export types for backwards compatibility
export type { Finish, ScrewLength, ScrewSize, ScrewType };

interface ScrewConfig {
  type: ScrewType;
  size: ScrewSize;
  length: ScrewLength;
  finish: Finish;
}

// The actual 3D screw mesh
function ScrewMesh({ config }: { config: ScrewConfig }) {
  const groupRef = useRef<THREE.Group>(null);

  const sScale = sizeScale[config.size];
  const lScale = lengthScale[config.length];
  const mat = finishMaterials[config.finish];

  const headDims = getHeadDims(config.type);
  const shaftRadius = 0.18 * sScale;
  const shaftLength = 1.8 * lScale * sScale;
  const headH = headDims.height * sScale;
  const headRTop = headDims.radiusTop * sScale;
  const headRBot = headDims.radiusBottom * sScale;

  const threadGeo = useMemo(() => {
    const threadPitch = 0.12 * sScale;
    const threadDepth = 0.07 * sScale;
    return buildThreadGeometry(
      shaftRadius,
      shaftLength,
      threadPitch,
      threadDepth,
    );
  }, [shaftRadius, shaftLength, sScale]);

  // Tip geometry: tapered end for drilling/thread-forming types
  const hasTip =
    config.type === "self-drilling" ||
    config.type === "pt-screw" ||
    config.type === "taptite";
  const tipLength = hasTip ? 0.25 * sScale : 0.12 * sScale;

  // Slow ambient rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  const material = (
    <meshStandardMaterial
      color={mat.color}
      metalness={mat.metalness}
      roughness={mat.roughness}
      envMapIntensity={mat.envMapIntensity}
    />
  );

  // Position: head at top, shaft downward
  const totalHeight = headH + shaftLength + tipLength;
  const centerOffset = totalHeight / 2;
  const headY = centerOffset - headH / 2;
  const shaftY = headY - headH / 2 - shaftLength / 2;
  const tipY = shaftY - shaftLength / 2 - tipLength / 2;
  const threadY = shaftY;

  // Drive socket indentation on head top
  const driveDepth = 0.08 * sScale;
  const driveRadius = 0.22 * sScale;

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0]}>
      {/* Head */}
      <mesh position={[0, headY, 0]} castShadow>
        <cylinderGeometry
          args={[headRTop, headRBot, headH, headDims.radialSegments, 1]}
        />
        {material}
      </mesh>

      {/* Head top cap (flat disc) */}
      <mesh position={[0, headY + headH / 2, 0]} castShadow>
        <cylinderGeometry
          args={[headRTop, headRTop, 0.01 * sScale, headDims.radialSegments, 1]}
        />
        {material}
      </mesh>

      {/* Drive socket indicator (darker inset) */}
      <mesh position={[0, headY + headH / 2 + 0.005 * sScale, 0]}>
        <cylinderGeometry
          args={[
            driveRadius,
            driveRadius,
            driveDepth,
            getDriveSegments(config.type),
            1,
          ]}
        />
        <meshStandardMaterial
          color={mat.color}
          metalness={mat.metalness * 0.6}
          roughness={Math.min(mat.roughness + 0.3, 1)}
        />
      </mesh>

      {/* Shaft */}
      <mesh position={[0, shaftY, 0]} castShadow>
        <cylinderGeometry
          args={[shaftRadius, shaftRadius, shaftLength, 24, 1]}
        />
        {material}
      </mesh>

      {/* Thread helix */}
      <mesh position={[0, threadY, 0]} castShadow>
        <primitive object={threadGeo} />
        {material}
      </mesh>

      {/* Tip */}
      <mesh position={[0, tipY, 0]} castShadow>
        <cylinderGeometry
          args={[
            shaftRadius,
            hasTip ? 0.01 * sScale : shaftRadius * 0.85,
            tipLength,
            16,
            1,
          ]}
        />
        {material}
      </mesh>

      {/* Neck fillet (chamfer under head) */}
      <mesh position={[0, headY - headH / 2 - 0.04 * sScale, 0]}>
        <cylinderGeometry
          args={[headRBot * 0.9, shaftRadius * 1.2, 0.1 * sScale, 24, 1]}
        />
        {material}
      </mesh>
    </group>
  );
}

// Scene setup with lighting
function Scene({ config }: { config: ScrewConfig }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} color="#e8eeff" />
      <directionalLight
        position={[3, 5, 3]}
        intensity={2.2}
        color="#ffffff"
        castShadow
      />
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.8}
        color="#c8d4ff"
      />
      <pointLight position={[0, 3, 2]} intensity={1.2} color="#ffffff" />
      <pointLight position={[2, -2, 1]} intensity={0.6} color="#ffe8c0" />

      {/* Ground reflection plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.2, 0]}
        receiveShadow
      >
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial
          color="#0d1b2e"
          metalness={0.1}
          roughness={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>

      <ScrewMesh config={config} />

      {/* Grid lines for industrial feel */}
      <gridHelper
        args={[8, 16, "#1a2a40", "#0f1e30"]}
        position={[0, -2.2, 0]}
      />

      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={8}
        enableDamping
        dampingFactor={0.08}
        autoRotate={false}
      />
    </>
  );
}

// Suspense fallback
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-white/50 text-sm">Loading 3D Model…</p>
      </div>
    </div>
  );
}

interface Props {
  config: ScrewConfig;
}

export default function ScrewConfigurator3D({ config }: Props) {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          shadows
          camera={{ position: [0, 0.5, 5], fov: 45 }}
          style={{ width: "100%", height: "100%" }}
          gl={{ antialias: true, alpha: false }}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color("#0d1b2e"));
          }}
        >
          <Scene config={config} />
        </Canvas>
      </Suspense>

      {/* Corner label */}
      <div className="absolute bottom-3 left-3 pointer-events-none">
        <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
}
