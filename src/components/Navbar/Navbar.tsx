import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Projects',
      path: '/projects'
    }
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navLogo}>
        EugeneZan
      </Link>
      <div className={styles.burger} onClick={handleToggleMenu}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
      <ul className={styles.navList}>
        {links.map(link => (
          <li className={styles.navItem} key={link.name}>
            <Link className={styles.navLink} to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      {/* {isMenuOpen && (
        <Sidebar onClose={handleToggleMenu} />
      )} */}
    </nav>
  );
};

export default Navbar;