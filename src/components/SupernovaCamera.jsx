import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const SupernovaCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 25], 0.25, delta);

    if (!isMobile) {
      easing.dampE(state.camera.position, [0, 0, 25], 0.25, delta);
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default SupernovaCamera;
