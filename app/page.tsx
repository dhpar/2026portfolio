import { Fragment } from "react/jsx-runtime";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Intro } from "./components/Intro";
import Section from "./components/Section";
import { Skills } from "./components/Skills";
import sectionProps from "./data/sectionsProps";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900 justify-center bg-[url(../public/background.png)] bg-fixed bg-center bg-repeat">
      <aside className="sticky flex flex-col py-32 px-16 max-w-1/3 w-auto h-screen content-center justify-center top-0 bottom-0 left-0 right-auto">
        <Intro />
      </aside>
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-16 snap-y">
        {sectionProps.map(({MainComponent, href, Icon, label}, i) => (
            <Section key={i} title={label} Icon={Icon} id={href}>
              <MainComponent />
            </Section>
        ))}
      </main>
    </div>
  );
}
 