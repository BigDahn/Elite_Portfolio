"use client";

interface GlobeDatum {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  order: number;
  color: string;
}

interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

interface WorldProps {
  data: GlobeDatum[];
  globeConfig?: GlobeConfig;
}

export function World({ data, globeConfig }: WorldProps) {
  const hasData = data.length > 0;
  const backgroundColor = globeConfig?.globeColor ?? "#062056";

  return (
    <div className="relative h-full w-full">
      <div
        className="absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
        style={{
          background: `radial-gradient(circle at 30% 30%, #5aa7ff 0%, ${backgroundColor} 65%, #020617 100%)`,
          boxShadow: "0 0 80px rgba(56, 189, 248, 0.25)",
        }}
      />
      {hasData ? (
        <div className="absolute inset-x-0 bottom-8 text-center text-xs text-white/40">
          {data.length} routes plotted
        </div>
      ) : null}
    </div>
  );
}
