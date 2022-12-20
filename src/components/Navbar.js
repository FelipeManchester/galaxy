import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../hooks/useAuthentication';

import { useAuthValue } from '../contexts/AuthContext';

import styles from './Navbar.module.css';
import { useState } from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        gala<span>x</span>y
      </NavLink>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.hamburger}
      >
        {menuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
      </button>
      <ul className={menuOpen ? styles.links_list_active : styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Perfil
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
