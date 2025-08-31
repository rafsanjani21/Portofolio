import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import GradientText from "../GradientText";

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

  return (
    <section className="py-12">
      <div className="text-6xl my-6 text-center">
        <GradientText>Get In Touch</GradientText>
      </div>
      <div className="flex items-center justify-center">
      <div className="w-1/2 mx-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-blue-500 p-8 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>
          <div>
            <label htmlFor="Subject" className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
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
        <img src="/robot.png">
        </img>
      </div>
    </section>
  );
}
