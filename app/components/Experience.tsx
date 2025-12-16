import resume from "../data/resume.json";

export function Experience () {
  return (
    <ul className="pb-4">
    {resume.experience.map((job, index) => (
        <li key={index} className="w-full pb-16">
          <div className='pb-2'>
              <h4 className="font-bold text-lg text-amber-200">{job.company}</h4>
              <h5 className="italic">{job.role}</h5>
              <p>
                <span>{job.start}</span> - <span>{job.end}</span>
              </p>
          </div>
          <p>{job.summary}</p>
          <ul className="list-disc pl-4">
              {job.highlights.map((highlight,i)=> (
              <li key={i} className="list-disc list-inside">{highlight}</li>
              ))}
          </ul>
          <h6 className="pt-2"><span className="text-amber-200">Tech:</span> {job.tech.join(", ")}</h6>
        </li>
    ))}
    </ul>
  );
}
