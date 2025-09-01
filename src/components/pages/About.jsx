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
      <div className="flex justify-center text-white">
        <div
          data-aos="fade-up"
          className="border p-8 m-8 rounded-lg border-blue-500 flex items-center gap-8"
        >
          <div className="flex flex-col flex-1">
            <div 
            data-aos="fade-up"
            data-aos-duration="0"
            className="text-5xl mb-6">
              <GradientText>Im Muhammad Rafsanjani</GradientText>
            </div>
            <div 
            data-aos="fade-right"
            data-aos-duration="4000"
            data-aos-delay="500"
            className="text-2xl leading-relaxed text-center">
              I am a Fullstack Web Developer focused on developing effective and
              efficient web applications. Involved in both frontend and backend,
              I am committed to delivering solutions that optimally meet user
              needs. I continuously keep up with technological advancements to
              provide the best results in every project.
            </div>
          </div>

          <div
          data-aos="zoom-in-up"
          data-aos-duration="0"
          data-aos-delay="700"
            className="relative w-96 h-96"
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
