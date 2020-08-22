import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Bill from '../context/';
import Conversor from './Conversor';

import { TweenMax, Power3 } from 'gsap';

const Main = () => {
  const { userOut, getUserOut, userData, getUserData, getEntries } = useContext(Bill);

  let logoItem = useRef(null);
  let textItem = useRef(null);
  useEffect(() => {
    getUserOut('userOut');
    getUserData('userData');
    getEntries('userEntries');

    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      y: 10,
      ease: Power3.easeOut,
      delay: 0.5,
    });
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      y: 10,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  console.log('componente main, buscando userEntries do context', userOut);

  return (
    <main className="container">
      <img
        ref={(el) => (logoItem = el)}
        src="https://icon-icons.com/icons2/1875/PNG/64/bill_120383.png"
        alt="imagem qualquer"
      />
      <h1 ref={(el) => (textItem = el)}>Boas vindas {userData.name}</h1>

      <h3>Este é o seu App de controle financeiro</h3>

      <h3>Registre e gerencie suas receitas e despesas</h3>

      <Link className="btn btn-dark mr-3" to="/controle">
        Minhas contas
      </Link>

      <Link className="btn btn-dark mr-3" to="/controle-receitas">
        Minhas receitas
      </Link>

      <Link className="btn btn-dark mr-3" to="/receitas">
        Registre uma nova receita
      </Link>

      <Link className="btn btn-dark mr-3" to="/despesas">
        Registre uma nova despesa
      </Link>

      <Link className="btn btn-dark" to="/bill-control">
        Sair
      </Link>

      <Conversor />
    </main>
  );
};

export default Main;
