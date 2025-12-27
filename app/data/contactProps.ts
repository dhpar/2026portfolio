import { contact } from "./resume.json";
import LinkedinIcon from '../../public/icons/linkedin.svg';
import Tool from '../../public/icons/tool.svg';
import Briefcase from '../../public/icons/briefcase.svg';
import FileText from '../../public/icons/file-text.svg';

const contactProps = [
    {
        href: 'DavidHParramonResume2026FS.pdf',
        Icon: FileText,
        label: 'Resume'
    },
    {
        href: contact.linkedin, 
        Icon: LinkedinIcon, 
        label: 'Linkedin'
    },
    { 
        href: contact.github, 
        Icon: Tool,
        label: 'GitHub' 
    },
    { 
        href: contact.email, 
        Icon: Briefcase, 
        label: 'Mail' 
    },
];

export default contactProps;