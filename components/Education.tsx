export default function Education() {
  const education = [
    {
      degree: "HUMANITIES AND SOCIAL SCIENCES",
      school: "Cordillera Career Development College",
      period: "2021 - 2023",
      description: "Studied Humanities and Social Sciences",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      school: "University of Cordilleras",
      period: "2024 - 2026(currently enrolled)",
      description: "Focused on Web Development and Artificial Intelligence",
    },
  ];

  return (
    <section className="py-16" id="education">
      <h2 className="text-4xl font-bold tracking-tight mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
              </div>
              <span className="text-sm text-muted-foreground">{edu.period}</span>
            </div>
            <p className="text-muted-foreground">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}