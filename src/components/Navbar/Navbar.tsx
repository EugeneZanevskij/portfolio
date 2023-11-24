import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from "react-icons/io";

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
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLogo}>
        EugeneZan
      </Link>
      <div className={styles.nav}>
        {isMenuOpen ? (
          <IoMdClose className={styles.navButton} size={36} onClick={handleToggleMenu}/>
        ) : (
          <CiMenuBurger className={styles.navButton} size={36} onClick={handleToggleMenu}/>
        )}
        <ul className={`${styles.navList} ${isMenuOpen && styles.navListOpen}`} onClick={handleToggleMenu}>
          {links.map(link => (
            <li className={styles.navItem} key={link.name}>
              <Link className={styles.navLink} to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;