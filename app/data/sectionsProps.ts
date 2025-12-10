import Tool from '../../public/tool.svg';
import Briefcase from '../../public/briefcase.svg';
import Book from '../../public/book.svg';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';

const linksProps = [
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