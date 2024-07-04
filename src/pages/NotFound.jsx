import Header from '../components/Header';

import style from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={ style['main-container'] }>
        <h1>Página não encontrada!</h1>
      </main>
    </>
  );
}
