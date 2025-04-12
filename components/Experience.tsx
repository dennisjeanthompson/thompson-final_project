export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "----",
      period: "2024 - Present",
      description: "Developing a personal portfolio website using Next.js and Tailwind CSS. Currently working on a personal project that involves building a web application using React and Next.js.",
    },
    {
      title: "OOP Developer",
      company: "----",
      period: "2024 - 2025",
      description: "Learned the basics of Object-Oriented Programming (OOP) and created simple applications using C#. Worked on a few personal projects to enhance my skills.",
    },
    {
      title: "HTML/CSS Developer",
      company: "----",
      period: "2024 - 2025",
      description: "Learned the basics of HTML and CSS, and created simple web pages. Worked on a few personal projects to enhance my skills.",
    },
  ];

  return (
    <section className="py-16" id="experience">
      <h2 className="text-4xl font-bold tracking-tight mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}