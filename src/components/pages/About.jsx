import GradientText from "../GradientText";

export default function About() {
  return (
    <section id="about" className="h-full overflow-hidden  pt-10">
      <div className="flex justify-center text-white">
        <div className="border p-8 m-8 rounded-lg border-blue-500 flex items-center gap-8">
          <div className="flex flex-col flex-1">
            <div className="text-5xl mb-6">
              <GradientText>Im Muhammad Rafsanjani</GradientText>
            </div>
            <div className="text-2xl leading-relaxed text-center">
              I am a Fullstack Web Developer focused on developing effective and
              efficient web applications. Involved in both frontend and backend,
              I am committed to delivering solutions that optimally meet user
              needs. I continuously keep up with technological advancements to
              provide the best results in every project.
            </div>
          </div>

          <div className="relative w-96 h-96">
            <img
              src="/photo.jpeg"
              alt="Foto saya"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
