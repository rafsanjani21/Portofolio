import LogoLoop from "../LogoLoop";
import GradientText from "../GradientText";

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

function Skill() {
  return (
    <div className="h-full relative overflow-hidden">
      <div className=" h-full">
        <div className="text-6xl my-6">
          <GradientText>My Skills</GradientText>
        </div>
        <LogoLoop
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
        <LogoLoop
          logos={imageLogos}
          speed={90}
          direction="right"
          logoHeight={100}
          gap={80}
          pauseOnHover
          scaleOnHover
          // fadeOut
          // fadeOutColor="#0A0909"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}

export default Skill;
