import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Supernova from "../components/Supernova";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import ReactLogo from "../components/ReactLogo";
import SupernovaCamera from "../components/SupernovaCamera";
import Button from "../components/Button";

const Hero = () => {
  // const controls = useControls("supernova", {
  //   scale: { value: 2.5, min: 0.1, max: 10 },
  //   rotationX: { value: 2.5, min: -10, max: 10 },
  //   rotationY: { value: 2.5, min: -10, max: 10 },
  //   rotationZ: { value: 2.5, min: -10, max: 10 },
  //   positionX: { value: 0, min: -10, max: 10 },
  //   positionY: { value: 0, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  // });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const sizes = calculateSizes(isSmall, isMobile);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Dmitriy
        </p>
        <p className="hero_tag text-gray_gradient">
          Building solutions from scratch
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <SupernovaCamera isMobile={isMobile}>
              <Supernova
                scale={isSmall ? 1.5 : 2.5}
                position={[0, -2, 2.5]}
                rotation={[2.5, 2.5, 2.5]}
              />
            </SupernovaCamera>

            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
