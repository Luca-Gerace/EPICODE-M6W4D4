import { useContext } from 'react';
import Logo from './units/Logo';
import UserTab from './units/UserTab';
import Context from '../../modules/Context';
import ThemeToggle from './units/ThemeToggle';

export default function Header() {

    const { theme } = useContext(Context);

    return (
        <header>
            <nav className={`bg-theme-${theme}`}>
                <div>
                    <div className='w-100 flex'>
                        <a href="/"><Logo /></a>
                        <div className='flex'>
                            <UserTab />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}