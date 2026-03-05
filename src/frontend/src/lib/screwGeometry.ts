import * as THREE from "three";

// ── Exported Types ─────────────────────────────────────────────
export type ScrewType =
  | "allen-cap"
  | "button-head"
  | "torx"
  | "self-drilling"
  | "pt-screw"
  | "taptite";

export type ScrewSize = "M3" | "M4" | "M5" | "M6" | "M8" | "M10";
export type ScrewLength = "short" | "medium" | "long";
export type Finish =
  | "zinc-plated"
  | "black-oxide"
  | "stainless"
  | "nickel-plated";

// ── Finish Materials ────────────────────────────────────────────
export interface FinishMaterial {
  color: string;
  metalness: number;
  roughness: number;
  envMapIntensity: number;
}

export const finishMaterials: Record<Finish, FinishMaterial> = {
  "zinc-plated": {
    color: "#c0c8d0",
    metalness: 0.8,
    roughness: 0.3,
    envMapIntensity: 1.2,
  },
  "black-oxide": {
    color: "#2a2e32",
    metalness: 0.7,
    roughness: 0.4,
    envMapIntensity: 0.8,
  },
  stainless: {
    color: "#d8dde3",
    metalness: 0.95,
    roughness: 0.15,
    envMapIntensity: 1.5,
  },
  "nickel-plated": {
    color: "#d4c8a8",
    metalness: 0.9,
    roughness: 0.2,
    envMapIntensity: 1.3,
  },
};

// ── Scale Maps ──────────────────────────────────────────────────
export const sizeScale: Record<ScrewSize, number> = {
  M3: 0.7,
  M4: 0.82,
  M5: 0.92,
  M6: 1.0,
  M8: 1.15,
  M10: 1.3,
};

export const lengthScale: Record<ScrewLength, number> = {
  short: 0.7,
  medium: 1.0,
  long: 1.45,
};

// ── Head Geometry ───────────────────────────────────────────────
export interface HeadDims {
  radiusTop: number;
  radiusBottom: number;
  height: number;
  radialSegments: number;
}

export function getHeadDims(type: ScrewType): HeadDims {
  switch (type) {
    case "allen-cap":
      return {
        radiusTop: 0.38,
        radiusBottom: 0.38,
        height: 0.55,
        radialSegments: 6,
      };
    case "button-head":
      return {
        radiusTop: 0.52,
        radiusBottom: 0.5,
        height: 0.22,
        radialSegments: 32,
      };
    case "torx":
      return {
        radiusTop: 0.42,
        radiusBottom: 0.44,
        height: 0.32,
        radialSegments: 6,
      };
    case "self-drilling":
      return {
        radiusTop: 0.5,
        radiusBottom: 0.46,
        height: 0.28,
        radialSegments: 32,
      };
    case "pt-screw":
      return {
        radiusTop: 0.44,
        radiusBottom: 0.46,
        height: 0.3,
        radialSegments: 32,
      };
    case "taptite":
      return {
        radiusTop: 0.48,
        radiusBottom: 0.5,
        height: 0.3,
        radialSegments: 32,
      };
    default:
      return {
        radiusTop: 0.4,
        radiusBottom: 0.4,
        height: 0.35,
        radialSegments: 32,
      };
  }
}

// ── Drive Socket ────────────────────────────────────────────────
export function getDriveSegments(type: ScrewType): number {
  switch (type) {
    case "allen-cap":
    case "torx":
      return 6;
    default:
      return 4;
  }
}

// ── Thread Geometry ─────────────────────────────────────────────
export function buildThreadGeometry(
  shaftRadius: number,
  shaftLength: number,
  threadPitch: number,
  threadDepth: number,
): THREE.BufferGeometry {
  const turns = Math.floor(shaftLength / threadPitch);
  const stepsPerTurn = 36;
  const totalSteps = turns * stepsPerTurn;

  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= totalSteps; i++) {
    const t = i / totalSteps;
    const angle = t * turns * Math.PI * 2;
    const y = t * shaftLength - shaftLength / 2;

    const phaseInPitch = (i % stepsPerTurn) / stepsPerTurn;
    const profile =
      phaseInPitch < 0.5 ? phaseInPitch * 2 : 2 - phaseInPitch * 2;

    const r = shaftRadius + profile * threadDepth;

    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    positions.push(shaftRadius * cosA, y, shaftRadius * sinA);
    positions.push(r * cosA, y, r * sinA);

    const nx = cosA;
    const nz = sinA;
    normals.push(nx, 0.2, nz, nx, 0.2, nz);
    uvs.push(0, t, 1, t);
  }

  for (let i = 0; i < totalSteps; i++) {
    const base = i * 2;
    indices.push(base, base + 2, base + 1);
    indices.push(base + 1, base + 2, base + 3);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ── Slug ↔ ScrewType Mapping ────────────────────────────────────
export const slugToScrewType: Record<string, ScrewType> = {
  "allen-cap-screws": "allen-cap",
  "button-head-screws": "button-head",
  "torx-screws": "torx",
  "self-drilling-screws": "self-drilling",
  "pt-screws": "pt-screw",
  "taptite-screws": "taptite",
  "bt-cut-screws": "taptite",
  "hi-low-screws": "pt-screw",
  "hex-flange-bolts": "allen-cap",
  "flange-head-screws": "allen-cap",
};

export function has3DPreview(slug: string): boolean {
  return slug in slugToScrewType;
}

// ── Display Name ↔ ScrewType Mapping ───────────────────────────
export const nameToScrewType: Record<string, ScrewType> = {
  "Self Drilling Screws": "self-drilling",
  "Allen Cap Screws": "allen-cap",
  "Button Head Screws": "button-head",
  "Torx Screws": "torx",
  "PT Screws": "pt-screw",
  "Taptite Screws": "taptite",
  "BT Cut Screws": "taptite",
  "Hex Flange Bolts": "allen-cap",
  "Flange Head Screws": "allen-cap",
};

export function hasNamedPreview(name: string): boolean {
  return name in nameToScrewType;
}
