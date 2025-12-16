"use client";
import resume from "../data/resume.json";
import LinkedinIcon from '../../public/linkedin.svg';
import EmailIcon from '../../public/mail.svg';
import GithubIcon from '../../public/github.svg';
import LocationIcon from '../../public/map-pin.svg';
import { useEffect, useRef } from "react";

export function Intro () {
  const summaryRef = useRef<HTMLParagraphElement>(null);

  return (
    <>
        <h1 className="text-2xl md:text-5xl font-light sm:text-6xl pb-1">
          {resume.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-700 pb-10 dark:text-amber-200 sm:text-3xl">
          {resume.title}
        </h2>
        <p className="pb-10" ref={summaryRef}>{resume.summary}</p>
        <ul>
            <li className="flex py-4 px-2">
                <LocationIcon className="w-fit mr-2 text-amber-200"/>
                <span>{resume.location}</span>
            </li>
            <li>
                <a href={resume.contact.linkedin} className="flex focus:bg-amber-200 focus:text-slate-950 focus:*:text-slate-950 py-4 px-2">
                  <LinkedinIcon className="w-fit mr-2 text-amber-200"/>
                  <span className='border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200'>Linkedin</span>
                </a>
            </li>
            <li>
                <a href={`mailto:${resume.contact.email}`} className="flex focus:bg-amber-200 focus:text-slate-950 focus:*:text-slate-950 py-4 px-2">
                  <EmailIcon className="w-fit mr-2 text-amber-200"/>
                  <span className='border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200'>Mail</span>
                </a>
            </li>
            <li>
                <a href={resume.contact.github} className="flex focus:bg-amber-200 focus:text-slate-950 focus:*:text-slate-950 py-4 px-2">
                  <GithubIcon className="w-fit mr-2 text-amber-200"/>
                  <span className='border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200'>GitHub</span>
                </a>
            </li>
        </ul>
    </>
  );
}
