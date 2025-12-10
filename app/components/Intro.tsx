import resume from "../data/resume.json";
import LinkedinIcon from '../../public/linkedin.svg';
import EmailIcon from '../../public/mail.svg';
import GithubIcon from '../../public/github.svg';
import LocationIcon from '../../public/map-pin.svg';

export function Intro () {
  return (
    <>
      <h1 className="text-5xl font-light sm:text-6xl pb-1">
        {resume.name}
        </h1>
        <h2 className="text-2xl text-zinc-700 pb-10 dark:text-amber-200 sm:text-3xl">
          {resume.title}
        </h2>
        <p className="pb-10">{resume.summary}</p>
        <ul>
            <li className="pt-4 flex">
                <LocationIcon className="w-fit mr-2 text-amber-200"/>{resume.location}
            </li>
            <li className="pt-4">
                <a href={resume.contact.linkedin} className="flex">
                  <LinkedinIcon className="w-fit mr-2 text-amber-200"/>
                  <span className='border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200'>Linkedin</span>
                </a>
            </li>
            <li className="pt-4">
                <a href={`mailto:${resume.contact.email}`} className="flex">
                  <EmailIcon className="w-fit mr-2 text-amber-200"/>
                  <span className='border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200'>Mail</span>
                </a>
            </li>
            <li className="pt-4">
                <a href={resume.contact.github} className="flex">
                  <GithubIcon className="w-fit mr-2 text-amber-200"/>
                  <span className='border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200'>GitHub</span>
                </a>
            </li>
        </ul>
    </>
  );
}
