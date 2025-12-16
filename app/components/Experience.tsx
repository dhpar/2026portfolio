import resume from "../data/resume.json";

export function Experience () {
  return (
    <ul className="pb-4">
    {resume.experience.map((job, index) => (
        <li key={index} className="pb-4 w-full">
        <div className='pb-2'>
            <h4 className="font-bold text-lg text">{job.company}</h4>
            <h5 className="italic">{job.role}</h5>
            <p>
              <span>{job.start}</span> - <span>{job.end}</span>
            </p>
        </div>
        
        <ul className="list-disc marker:text-amber-200 pl-4">
            {job.highlights.map((highlight,i)=> (
            <li key={i} className="list-disc list-inside">{highlight}</li>
            ))}
        </ul>
        </li>
    ))}
    </ul>
  );
}
