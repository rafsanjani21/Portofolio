import GradientText from "../GradientText";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <Element name="about" className="h-full overflow-hidden pt-10">
      <div className="flex justify-center text-white px-4">
        <div
          data-aos="fade-up"
          className="border p-6 lg:p-8 m-4 lg:m-8 rounded-lg border-blue-500 
                     flex flex-col lg:flex-row items-center gap-6 lg:gap-8  w-full"
        >
          {/* Text */}
          <div className="flex flex-col flex-1 text-center md:text-left">
            <div
              data-aos="fade-up"
              data-aos-duration="0"
              className="text-3xl md:text-5xl mb-4 md:mb-6 text-center"
            >
              <GradientText>Im Muhammad Rafsanjani</GradientText>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="4000"
              data-aos-delay="500"
              className="text-sm md:text-lg lg:text-2xl leading-relaxed text-center order-3 lg:order-2"
            >
              I am a Fullstack Web Developer focused on developing effective and
              efficient web applications. Involved in both frontend and backend,
              I am committed to delivering solutions that optimally meet user
              needs. I continuously keep up with technological advancements to
              provide the best results in every project.
            </div>
          </div>

          {/* Image */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="0"
            data-aos-delay="700"
            className="relative w-48 h-48 md:w-60 md:h-60 lg:w-96 lg:h-96 order-2 lg:order-3"
          >
            <img
              src="/raff.jpeg"
              alt="Foto saya"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
