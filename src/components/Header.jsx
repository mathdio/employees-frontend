import logo from '../assets/header-logo.png';

import style from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={ style['header-container'] }>
      <img src={ logo } alt="" className={ style['header-logo'] } />
    </header>
  );
}
