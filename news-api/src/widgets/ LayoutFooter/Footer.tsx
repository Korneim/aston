import css from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.links}>
                    <a href="https://github.com/Korneim" target="_blank" rel="noopener noreferrer" className={css.link}>
                        <FaGithub className={css.icon} />
                        GitHub
                    </a>
                </div>

                <div className={css.copyright}>© {currentYear} Mike. All rights reserved.</div>
            </div>
        </footer>
    );
}
