import loading from '../assets/loading-gif.gif';
import Header from '../components/Header';

import style from '../styles/Loading.module.css';

export default function Loading() {
  return (
    <>
      <Header />
      <main className={ style['main-container'] }>
        <img src={ loading } alt="" className={ style['loading-icon'] } />
      </main>
    </>
  );
}
