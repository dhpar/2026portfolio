"use client"; 
import { useState, useEffect } from "react";
import { Intro } from "./components/Intro";
import Section from "./components/Section";
import sectionProps from "./data/sectionsProps";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleResize = () => setIsSmallScreen(window.innerWidth < 640);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const progresiveSectionProps = 
    isSmallScreen ? 
      sectionProps : sectionProps.slice(1);

  return (
    <div className="flex md:min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900 justify-center bg-[url(../public/background.png)] bg-fixed bg-center bg-repeat flex-col md:flex-row">
      {!isSmallScreen && <aside className="md:sticky md:flex flex-col md:py-32 py-8 md:px-16 px-8 max-w-full md:max-w-2/5 lg:max-w-1/3 w-auto md:h-screen content-center md:justify-center justify-start top-0 bottom-0 left-0 right-auto border-amber-300 md:border-r md:border-b-0 border-b border-solid bg-slate-950/15 backdrop-blur-sm">
        <Intro />
      </aside>}
      <main className="flex min-h-screen w-full flex-col items-center justify-center snap-y md:py-32 py-8 md:px-16 px-8">
        {progresiveSectionProps.map(({MainComponent, href, Icon, label}, i) => (
            <Section key={i} title={label} Icon={Icon} id={href}>
              <MainComponent />
            </Section>
        ))}
      </main>
    </div>
  );
}
 