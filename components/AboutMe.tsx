export default function AboutMe() {
  return (
    <section id="about" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-2">
        About <span className="text-[#00f7ff]">Me</span>
      </h2>
      <div className="mt-12 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-[#00f7ff] relative">
          <div className="absolute inset-0 bg-[#00f7ff] opacity-20"></div>
          <img
            src="/photos/profile_homeP.jpg"
            alt="Dennis Thompson"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4">Web App Developer!</h3>
        <p className="max-w-2xl text-[#8892b0] mb-8">
        I am currently a student at the University of Cordilleras, studying Information Technology.
        I am interested in learning about web development and A.I.
        </p>
        <button className="glow-button">Read More</button>
      </div>
    </section>
  );
}