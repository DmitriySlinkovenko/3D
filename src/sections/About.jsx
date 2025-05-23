import React, { useState, Suspense } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import CanvasLoader from "../components/CanvasLoader";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ReactLogo from "../components/ReactLogo";
import resume from "../assets/my_resume.pdf";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dmitriy.slinkovenko@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Dmitriy</p>
              <p className="grid-subtext">
                Having finished a Software Engineering bootcamp, I have honed ny
                skills in frontend and backend development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain mx-auto"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript with a focus on React ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40.69,
                    lng: -74,
                    text: "I'm here!",
                    color: "white",
                    size: 9999,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I'm based in New York, with remote work available.
              </p>
              <a href="#contact">
                <Button
                  name={"Contact Me"}
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container relative">
            <img
              src="/assets/grid3.png"
              alt="grid=3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
            <div className="w-full h-full absolute inset-0">
              <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                  <group>
                    <ReactLogo />
                  </group>

                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="space-y-2">
              <p className="grid-headtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-1xl font-medium text-gray_gradient text-white">
                  dmitriy.slinkovenko@gmail.com
                </p>
              </div>
            </div>
            <button className="text-2xl font-bold text-center mt-10 hover:-translate-y-1 transition-all duration-500 hover:scale-110">
              <a
                href={resume}
                download="resume"
                className="gradient-background "
              >
                Download my resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
