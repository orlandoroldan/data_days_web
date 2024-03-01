import { useState } from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

const MenuButton = ({ menuOpen, setMenuOpen }) => (
  <div className={`mobile-menu${menuOpen ? ' menu-open' : ''}`} onClick={() => setMenuOpen((prev) => !prev)}>
    <div className='bar' />
    <div className='bar' />
    <div className='bar' />
    <div className='bar' />
  </div>
);
MenuButton.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

const TopBarItem = ({ id, children, menuOpen, setMenuOpen }) => (
  <a onClick={() => setMenuOpen(false)} className={`top-bar-item${menuOpen ? ' visible' : ''}`} href={`#${id}`}>
    {children}
  </a>
);
TopBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`wrapper top-bar ${menuOpen ? ' solid' : ''}`}>
      <div className='top-bar-right'>
        <TopBarItem id='home' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Home</TopBarItem>
        <TopBarItem id='presentacio' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Presentació</TopBarItem>
        <TopBarItem id='quisom' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Qui som?</TopBarItem>
        <TopBarItem id='agenda' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Agenda</TopBarItem>
      </div>
    </div >
  );
}

export default TopBar;