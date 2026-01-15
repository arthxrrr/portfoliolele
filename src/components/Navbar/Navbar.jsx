import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/contato', label: 'Contato' }
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detecta scroll para mudar estilo da navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fecha menu ao clicar em um link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Previne scroll quando menu mobile está aberto
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav} aria-label="Navegação principal">
                <NavLink to="/" className={styles.logo} aria-label="Leticia Wurges - Ir para página inicial">
                    <span className={styles.logoText}>LW</span>
                    <span className={styles.logoFull}>Leticia Wurges</span>
                </NavLink>

                {/* Menu Desktop */}
                <ul className={styles.navLinks}>
                    {NAV_LINKS.map(({ path, label }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.active : ''}`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Botão Menu Mobile */}
                <button
                    className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                </button>

                {/* Menu Mobile */}
                <div
                    id="mobile-menu"
                    className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
                    aria-hidden={!isMenuOpen}
                >
                    <ul className={styles.mobileNavLinks}>
                        {NAV_LINKS.map(({ path, label }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
