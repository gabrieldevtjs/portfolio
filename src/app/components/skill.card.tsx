export default function SkillCard() {
    const skills = [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "Next.js",
        "NestJS",
        "React",
        "Tailwind",
        "APIs RESTful",
        "PostgreSQL",
        "SQL",
        "Prisma",
        "Git",
        "Firebase (NoSQL)",
        "GitHub",
        "Testes E2E",
        "Testes funcionais",
        "Testes de aceitação",
        "Scrum",
        "Testes exploratórios",
       
        "Kanban"
      ];
    
    return (
      <div className="flex flex-wrap justify-center gap-1">
        {skills.map((skill, index) => (
          <span key={index} className="border-2 rounded-lg bg-transparent border-black text-stone-900 px-6 py-1 hover:bg-indigo-700 hover:text-white hover:border-indigo-700">
            {skill}
          </span>
        ))}
      </div>
    );
}
