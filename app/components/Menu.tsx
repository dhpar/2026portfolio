"use client";
import { MouseEvent, useEffect, useRef, useState } from 'react';
import sectionProps from '../data/sectionsProps';
import MenuIcon from '../../public/icons/menu.svg';
import Link from 'next/link';

const Menu = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsMenuOpen(prev => {
                console.log('Toggling menu from', prev, 'to', !prev);
                return !prev
            });
        }
    }

    const handleMobileMenuChange = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsMenuOpen(prev => {
            console.log('Toggling menu from', prev, 'to', !prev);
            return !prev
        });
    };

    const handleMenuClickOutside = (event: Event) => {
        const menuElement = document.getElementById('mobile-menu');
        if (menuElement && !menuElement.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        typeof window !== 'undefined' && setIsSmallScreen(window.innerWidth < 640); 
        document.addEventListener('click', handleMenuClickOutside);
        return () =>
            document.removeEventListener('click', handleMenuClickOutside);
    }, []);

    const progresiveSectionProps = isSmallScreen ? sectionProps : sectionProps.slice(1);

    const MobileMenu = () => <>
        <button onClick={handleMobileMenuChange} onKeyDown={handleMenuButtonKeyDown} className='text-amber-200 border-amber-200 border px-8 py-4 rounded-full bg-slate-950/30 backdrop-blur-sm z-10 w-fit self-end m-2 focus:bg-amber-200 focus:text-slate-950'>
            <MenuIcon />
        </button>
        <ul className={`flex-col items-center w-full gap-8 bg-slate-950/30 backdrop-blur-sm border-amber-200 border px-4 py-2 rounded-4xl ${isMenuOpen ? 'flex' : 'hidden'}`}>
            {progresiveSectionProps.map(({ href, Icon, label }, i) => (
                <li key={i} className='w-full'>
                    <a href={`#${href}`} className="flex justify-center border-b border-solid border-transparent font-extrabold hover:border-amber-200 hover:text-amber-200 focus:bg-amber-200 focus:text-slate-950 focus:w-full p-4 rounded-lg">
                        <Icon className='w-fit mr-2'/>
                        <span>{label}</span>
                    </a>
                </li>)
            )}
        </ul>
    </>
    
    return (
        <nav className={`flex flex-col fixed z-10 w-full`}>
            {isSmallScreen ?
            <MobileMenu /> :
            <ul className="lg:flex gap-8 fixed top-0 right-0 rounded-full border-amber-200 border mt-4 mr-4 bg-slate-950/30 backdrop-blur-sm">
                {progresiveSectionProps.map(({ href, Icon, label }, i) => (
                    <li key={i} className='flex'>
                        <Link href={`#${href}`} className="flex border border-solid border-transparent capitalize font-extrabold
                        hover:bg-amber-200 hover:text-slate-950 hover:border hover:border-slate-950 hover:border-solid focus:bg-amber-200 focus:text-slate-950 focus:border focus:border-slate-950 focus:border-solid px-4 py-2 hover:rounded-full focus:rounded-full">
                            <Icon className='w-fit mr-2' />
                            <span>{label}</span>
                        </Link>
                    </li>)
                )}
            </ul>}
        </nav> 
    );
}

export default Menu;
