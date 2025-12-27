import Tool from '../../public/icons/tool.svg';
import Briefcase from '../../public/icons/briefcase.svg';
import Book from '../../public/icons/book.svg';
import Person from '../../public/icons/person.svg';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Intro } from '../components/Intro';

const linksProps = [
    {
        MainComponent: Intro, 
        href: 'intro', 
        Icon: Person, 
        label: 'Intro'
    },
    { 
        MainComponent: Skills, 
        href: 'skills', 
        Icon: Tool, 
        label: 'Skills' 
    },
    { 
        MainComponent: Experience, 
        href: 'experience', 
        Icon: Briefcase, 
        label: 'Experience' 
    },
    { 
        MainComponent: Education, 
        href: 'education', 
        Icon: Book, 
        label: 'Education' 
    },
];

export default linksProps;