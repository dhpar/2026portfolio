import linksProps from '../data/sectionsProps';

const Menu = () => {
    return (
        <ul className="flex gap-8 fixed top-0 right-0 rounded-full border-amber-200 bg-opacity-70 border px-4 py-2 mt-4 mr-4 bg-slate-950/30 backdrop-blur-sm">
            { linksProps.map(({ href, Icon, label }, i) => (
                <li key={i} className='flex'>
                    <Icon className='w-fit mr-2 text-amber-200' />
                    <a href={`#${href}`}>
                        <span className="border-b border-solid border-transparent hover:border-amber-200 hover:text-amber-200">
                            {label}
                        </span>
                    </a>
                </li>)
            )}
        </ul>
    );
}

export default Menu;
