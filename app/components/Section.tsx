import { ComponentType, FunctionComponent, PropsWithChildren, SVGProps } from 'react';

interface ISectionProps extends PropsWithChildren {
    title: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    id: string;
}

const Section: FunctionComponent<ISectionProps> = ({title, Icon, id, children}) => {
  return (
    <section className="mb-16 w-full min-h-dvh snap-start flex flex-col justify-center" id={id}>
        <h3 className="font-extrabold text-2xl pb-2 mb-6 border-b-2 border-solid border-amber-200 text-amber-200 w-full uppercase flex justify-start align-middle">
            <Icon className='mr-4'/> {title}
        </h3>
        {children}
    </section>
  );
};

export default Section;
