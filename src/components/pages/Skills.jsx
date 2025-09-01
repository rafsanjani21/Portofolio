import LogoLoop from "../LogoLoop";
import GradientText from "../GradientText";
import { Element } from "react-scroll";

const imageLogos = [
  { src: "/html.png" },
  { src: "/css.png" },
  { src: "/js.png" },
  { src: "/node.png" },
  { src: "/pg.png" },
  { src: "/ex.svg" },
  { src: "/react.svg" },
  { src: "/vite.svg" },
  { src: "/tail.svg" },
  { src: "/chatgpt.svg" },
  { src: "/github.svg" },
];

const imageName = [
  { src: "/name.png" },
  { src: "/logoo.png" },
];

function Skill() {
  return (
    <Element name="skills" className="h-full relative overflow-hidden">
      <div className=" h-full">
        <div id="skill" className="text-6xl my-6">
          <GradientText>My Skills</GradientText>
        </div>
        <LogoLoop className="bg-gray-400 bg-clip-padding border border-x-0 border-b-0 border-blue-500 bg-opacity-20 backdrop-blur-3xl backdrop-filter"
          logos={imageLogos}
          speed={90}
          direction="left"
          logoHeight={100}
          gap={80}
          pauseOnHover
          scaleOnHover
          // fadeOut
          // fadeOutColor="#0A0909"
          ariaLabel="Technology partners"
        />
        <LogoLoop className="bg-gray-400 bg-clip-padding border border-x-0 border-t-0 border-blue-500 bg-opacity-20 backdrop-blur-3xl backdrop-filter"
          logos={imageName}
          speed={90}
          direction="right"
          logoHeight={100}
          gap={10}
          pauseOnHover
          scaleOnHover
          // fadeOut
          // fadeOutColor="#0A0909"
          ariaLabel="Technology partners"
        />
      </div>
    </Element>
  );
}

export default Skill;
