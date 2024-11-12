// import { Perf } from "r3f-perf";
import { useControls, button } from "leva";
import { Hud, StatsGl } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Debug = () => {
  const { gl } = useThree();
  const { showPerformanceMonitor, showAxesHelper, axesHelperScale } =
    useControls("Debug", {
      showPerformanceMonitor: true,
      showAxesHelper: false,
      axesHelperScale: 2,
      "Request Render Info": button(() => {
        console.table({ ...gl.info.render, ...gl.info.memory });
      }),
    });

  return (
    <>
      {showPerformanceMonitor && (
        <StatsGl
          className="fixed top-0 flex"
          // @ts-expect-error trackGPU does not exist on type
          trackGPU
        />
      )}

      {showAxesHelper && (
        <Hud>
          <axesHelper scale={axesHelperScale} />
        </Hud>
      )}
      {/* {showPerformanceMonitor && <Stats showPanel={0} className="stats" />} */}
      {/* {showPerformanceMonitor && <Perf position="top-left" />} */}
    </>
  );
};
