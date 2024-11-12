import type { FC, PropsWithChildren } from "react";
import { Canvas } from "@react-three/fiber";
import { Debug } from "../debug/Debug";

export const BaseCanvas: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Canvas dpr={[1, 2]} shadows className="h-full w-full">
      {children}
      <Debug />
    </Canvas>
  );
};
