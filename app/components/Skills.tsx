import resume from "../data/resume.json";

export function Skills () {
  return (
    <ul className="pb-4">
        {resume.skills.map((skill, i) => (
        <li key={i} className="pb-4">
            <h4 className="pb-1">{skill.title}</h4>
            <ul className="flex flex-wrap gap-2">
                {skill.tech.map((tech, j) => (
                <li key={j} className="bg-amber-200 text-amber-900 bg-opacity-70 border px-4 py-2 rounded-full font-bold">
                  {tech}
                </li>
                ))}
            </ul>
        </li>
        ))}
    </ul>
  );
}
