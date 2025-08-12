"use client";

import React, { useState, useRef, Suspense } from "react";
import { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import type { Points as PointsType } from "three";
// @ts-expect-error: maath library has no type definitions
import * as random from "maath/random/dist/maath-random.esm";

// interface starBackgrroundProps {
//   props: string;
// }
const StarBackground = (props: Record<string, unknown>) => {
  const ref = useRef<PointsType>(null!);

  const [sphere] = useState(() => {
    const arr = new Float32Array(5000 * 3); // 5000 points × 3 coords
    random.inSphere(arr, { radius: 1.2 });

    // ✅ Safety check: replace NaN with 0
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) arr[i] = 0;
    }
    return arr;
  });
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
