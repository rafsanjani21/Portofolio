import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import GradientText from "../GradientText";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rafsan",   // ganti dengan Service ID EmailJS
      "template_rafsan",  // ganti dengan Template ID EmailJS
      form.current,
      "zlo7TM02Av5N1zZi9"    // ganti dengan Public Key EmailJS
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.log(error.text);
      }
    );
  };

  useEffect(() => {
    AOS.init({
      once: false, 
    });
  }, []);

  return (
    <Element 
    data-aos="fade-up"
        data-aos-anchor-placement="botom-bottom"
        data-aos-duration="0"
    className="contact">
      <div name="contact" className="text-4xl md:text-6xl my-6 text-center">
        <GradientText>Get In Touch</GradientText>
      </div>
      <div className="flex items-center justify-center">
      <div className="w-full lg:w-1/2 mx-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-blue-500 p-8 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-sm md:text-md">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black text-sm md:text-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-sm md:text-md">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black text-sm md:text-md"
            />
          </div>
          <div>
            <label htmlFor="Subject" className="block mb-1 font-medium text-sm md:text-md">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black text-sm md:text-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-sm md:text-md">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black text-sm md:text-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
            <FaPaperPlane className="w-5 h-5" />
          </button>
        </form>
      </div>
        <img className="hidden lg:block" src="/robot.png">
        </img>
      </div>
    </Element>
  );
}
