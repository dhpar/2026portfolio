import resume from "./data/resume.json";
// start-0 left-0 h-full bg-zinc-200 dark:bg-zinc-900 w-auto flex flex-col items-center justify-center px-8 py-16 
export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900 justify-center">
      <aside className="sticky flex flex-col py-32 px-16 max-w-1/3 w-auto h-screen content-center justify-center top-0 bottom-0 left-0 right-auto">
        <h1 className="text-5xl font-light sm:text-6xl pb-1">
          {resume.name}
        </h1>
        <h2 className="text-2xl text-zinc-700 pb-10 dark:text-amber-200 sm:text-3xl">
          {resume.title}
        </h2>
        <p>{resume.summary}</p>
      </aside>
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-16 dark:bg-black snap-y">
        <section className="mb-16 w-full min-h-dvh snap-start flex flex-col justify-center">
          <h3 className="font-extrabold text-2xl justify-end pb-2 mb-6 border-b-2 border-solid border-amber-200 text-amber-200 w-full uppercase">
            Skills
          </h3>
          <ul className="pb-4">
            {resume.skills.map((skill, i) => (
              <li key={i} className="pb-4">
                <h4 className="pb-1">{skill.title}</h4>
                <ul className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, j) => (
                    <li key={j} className="bg-amber-200 text-amber-900 bg-opacity-70 border px-4 py-2 rounded-full font-bold">{tech}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-16 w-full min-h-dvh snap-start flex flex-col justify-center">
          <h3 className="font-extrabold text-2xl justify-end pb-2 mb-6 border-b-2 border-solid border-amber-200 text-amber-200 w-full uppercase">Experience</h3>
          <ul className="pb-4">
            {resume.experience.map((job, index) => (
              <li key={index} className="pb-4 w-full">
                <div className='pb-2'>
                  <h4 className="font-bold text-lg text">{job.company}</h4>
                  <h5 className="italic">{job.role}</h5>
                  <h6>
                    <span>{job.start}</span> - <span>{job.end}</span>
                  </h6>
                </div>
                
                <ul>
                  {job.highlights.map((highlight,i)=> (
                    <li key={i} className="list-disc list-inside">{highlight}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-16 w-full min-h-dvh snap-start flex flex-col justify-center">
          <h3 className="font-extrabold text-2xl justify-end pb-2 mb-6 border-b-2 border-solid border-amber-200 text-amber-200 w-full uppercase">Education</h3>
          <h4>{resume.education.degree}</h4>
          <h5 className="italic">{resume.education.institution}</h5> 
          <p>{resume.education.graduationYear}</p>
          <p>Focus: {resume.education.focus}</p>
        </section>
      </main>
    </div>
  );
}
