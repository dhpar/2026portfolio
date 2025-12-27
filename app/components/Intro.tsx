import resume from "../data/resume.json";
import LocationIcon from '../../public/icons/map-pin.svg';
import Link from "next/link";
import contactProps from "../data/contactProps";

export function Intro () {
  
  return (
    <>
      <div className="pb-10">
        <h1 className="text-2xl md:text-5xl font-light sm:text-6xl pb-1 font-sans">
          {resume.name}
        </h1>
        <div className="inline-flex items-center gap-4 pb-4">
          <h2 className="text-xl md:text-2xl text-zinc-700 dark:text-amber-200 sm:text-3xl">
            {resume.title}
          </h2>
          <span>|</span>
          <address className="flex">
            <LocationIcon className="w-fit mr-2"/>
            <span>{resume.location}</span>
          </address>          
        </div>
        <p>{resume.summary}</p>
      </div>
      <ul>
          {contactProps.map(({href, Icon, label}, i) => (
              <li key={i}>
                  <Link href={href} className="flex w-full items-center align-middle font-semibold focus:bg-amber-200 focus:text-slate-950 focus:*:text-slate-950 p-2">
                    <Icon className="w-fit mr-4 text-amber-200"/>
                    <span className='border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200'>{label}</span>
                  </Link>
              </li>
          ))}
      </ul>
    </>
  );
}
