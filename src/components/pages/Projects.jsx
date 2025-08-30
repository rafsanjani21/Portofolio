import GradientText from "../GradientText";
import Card from "../Card";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="h-full">
      <div className="text-6xl my-6">
        <GradientText>My Projects</GradientText>
      </div>
      <div className="flex gap-6 justify-center">
        <Card
          className="custom-spotlight-card relative h-96 w-80"
          spotlightColor="hsla(237, 100%, 50%, 1)"
        >
          <img
            className="mb-2 rounded-xl border h-44"
            src="/porto.png"
            alt="porto"
          />
          <div className="text-center text-xl">Portofolio HTML CSS</div>
          <div className="text-center text-sm mb-2 mt-1 max-h-24 overflow-y-auto px-2 scrollbar-hide">
            This is a personal portfolio project, created using only HTML and
            CSS. The project was developed as both a personal portfolio and an
            assignment for the bootcamp at Dibimbing.id.
          </div>
          <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-4xl mt-4 flex gap-2">
            <a
              href="https://github.com/rafsanjani21/potofolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
            <a
              href="https://muhammadrafsanjani.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
          </div>
        </Card>
        <Card
          className="custom-spotlight-card relative h-96 w-80"
          spotlightColor="hsla(237, 100%, 50%, 1)"
        >
          <img
            className="mb-2 rounded-xl border h-44"
            src="/buoy.png"
            alt="buoy"
          />
          <div className="text-center text-xl">Buoy U-TEWS</div>
          <div className="text-center text-sm mb-2 mt-1 max-h-24 overflow-y-auto px-2 scrollbar-hide">
            Buoy U-TEWS is a real-time monitoring project, with the actual
            device implemented on Sebesi Island, Lampung Province, Indonesia.
            This web application is built using the PERN stack and retrieves
            sensor data via MQTT. It features real-time monitoring of sea level,
            wind speed, wind direction, solar panel status, and GPS location,
            along with real-time chart visualization.
          </div>
          <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-4xl mt-4 flex gap-2">
            <a
              href="https://github.com/rafsanjani21/FE_buoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
            <a
              href="https://buoy-utews.c-greenproject.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
          </div>
        </Card>
        <Card
          className="custom-spotlight-card relative h-96 w-80"
          spotlightColor="hsla(237, 100%, 50%, 1)"
        >
          <img
            className="mb-2 rounded-xl border h-44"
            src="/porto2.png"
            alt="buoy"
          />
          <div className="text-center text-xl">Buoy U-TEWS</div>
          <div className="text-center text-sm mb-2 mt-1 max-h-24 overflow-y-auto px-2 scrollbar-hide">
            Buoy U-TEWS is a real-time monitoring project, with the actual
            device implemented on Sebesi Island, Lampung Province, Indonesia.
            This web application is built using the PERN stack and retrieves
            sensor data via MQTT. It features real-time monitoring of sea level,
            wind speed, wind direction, solar panel status, and GPS location,
            along with real-time chart visualization.
          </div>
          <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-4xl mt-4 flex gap-2">
            <a
              href="https://github.com/rafsanjani21/FE_buoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
            <a
              href="https://buoy-utews.c-greenproject.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="cursor-pointer hover:scale-150 transition-transform" />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
