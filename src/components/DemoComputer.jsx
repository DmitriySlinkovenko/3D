/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: dylanheyes (https://sketchfab.com/dylanheyes)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ultrawide-monitor-f84d24b6df3648d884fd9be9c8007dd4
Title: Ultrawide Monitor
*/

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useGLTF, useVideoTexture } from "@react-three/drei";

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/ultrawide_monitor.glb");
  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4"
  );
  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, -0.001, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.0098}>
          <group rotation={[0, 0, Math.PI / 2]} scale={[19.412, 500, 242.198]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Screen_0.geometry}
              material={materials.Screen}
            >
              <meshBasicMaterial map={txt}></meshBasicMaterial>
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0_1.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Lights_0.geometry}
              material={materials.Lights}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/ultrawide_monitor.glb");

export default DemoComputer;