import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type * as THREE from "three";
import {
  type Finish,
  type ScrewType,
  buildThreadGeometry,
  finishMaterials,
  getDriveSegments,
  getHeadDims,
  lengthScale,
  sizeScale,
} from "../lib/screwGeometry";

// Re-export types for consumers
export type { Finish, ScrewType };

// ── ScrewMesh ──────────────────────────────────────────────────

interface ScrewMeshProps {
  screwType: ScrewType;
  finish: Finish;
  autoRotate: boolean;
}

function ScrewMesh({ screwType, finish, autoRotate }: ScrewMeshProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Use fixed M6 medium for preview — just visuals
  const sScale = sizeScale.M6;
  const lScale = lengthScale.medium;
  const mat = finishMaterials[finish];

  const headDims = getHeadDims(screwType);
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

  const hasTip =
    screwType === "self-drilling" ||
    screwType === "pt-screw" ||
    screwType === "taptite";
  const tipLength = hasTip ? 0.25 * sScale : 0.12 * sScale;

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
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

  const totalHeight = headH + shaftLength + tipLength;
  const centerOffset = totalHeight / 2;
  const headY = centerOffset - headH / 2;
  const shaftY = headY - headH / 2 - shaftLength / 2;
  const tipY = shaftY - shaftLength / 2 - tipLength / 2;
  const threadY = shaftY;

  const driveDepth = 0.08 * sScale;
  const driveRadius = 0.22 * sScale;

  return (
    <group ref={groupRef} rotation={[0.2, 0, 0]}>
      {/* Head */}
      <mesh position={[0, headY, 0]} castShadow>
        <cylinderGeometry
          args={[headRTop, headRBot, headH, headDims.radialSegments, 1]}
        />
        {material}
      </mesh>

      {/* Head top cap */}
      <mesh position={[0, headY + headH / 2, 0]} castShadow>
        <cylinderGeometry
          args={[headRTop, headRTop, 0.01 * sScale, headDims.radialSegments, 1]}
        />
        {material}
      </mesh>

      {/* Drive socket indicator */}
      <mesh position={[0, headY + headH / 2 + 0.005 * sScale, 0]}>
        <cylinderGeometry
          args={[
            driveRadius,
            driveRadius,
            driveDepth,
            getDriveSegments(screwType),
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

      {/* Neck fillet */}
      <mesh position={[0, headY - headH / 2 - 0.04 * sScale, 0]}>
        <cylinderGeometry
          args={[headRBot * 0.9, shaftRadius * 1.2, 0.1 * sScale, 24, 1]}
        />
        {material}
      </mesh>
    </group>
  );
}

// ── Scene ──────────────────────────────────────────────────────

interface SceneProps {
  screwType: ScrewType;
  finish: Finish;
  interactive: boolean;
  autoRotate: boolean;
}

function Scene({ screwType, finish, interactive, autoRotate }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.6} color="#e8eeff" />
      <directionalLight
        position={[3, 5, 3]}
        intensity={2.5}
        color="#ffffff"
        castShadow
      />
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.9}
        color="#c8d4ff"
      />
      <pointLight position={[0, 3, 2]} intensity={1.2} color="#ffffff" />
      <pointLight position={[2, -2, 1]} intensity={0.6} color="#ffe8c0" />

      <ScrewMesh
        screwType={screwType}
        finish={finish}
        autoRotate={autoRotate}
      />

      {interactive && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.1}
          minPolarAngle={Math.PI * 0.1}
          maxPolarAngle={Math.PI * 0.9}
        />
      )}
    </>
  );
}

// ── Fallback ───────────────────────────────────────────────────

function SpinnerFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-transparent">
      <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// ── ScrewPreview3D ─────────────────────────────────────────────

interface ScrewPreview3DProps {
  screwType: ScrewType;
  finish?: Finish;
  interactive?: boolean;
  className?: string;
}

export default function ScrewPreview3D({
  screwType,
  finish = "stainless",
  interactive = false,
  className = "",
}: ScrewPreview3DProps) {
  return (
    <div className={`w-full h-full relative ${className}`}>
      <Suspense fallback={<SpinnerFallback />}>
        <Canvas
          shadows
          camera={{ position: [0, 0.5, 4.5], fov: 42 }}
          style={{ width: "100%", height: "100%" }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene
            screwType={screwType}
            finish={finish}
            interactive={interactive}
            autoRotate={!interactive}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
