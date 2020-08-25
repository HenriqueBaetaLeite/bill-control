import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Bill from '../context/';
import Conversor from './Conversor';

import { TweenMax, Power3 } from 'gsap';

const Main = () => {
  const { userOut, getUserOut, userData, getUserData, entries, getEntries } = useContext(Bill);

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

  const valorReceitas =
    entries.length === 0
      ? 0
      : entries.map((entry) => Number(entry.valor)).reduce((acc, tot) => acc + tot);

  const valorDespesas =
    userOut.length === 0
      ? 0
      : userOut.map((out) => Number(out.valor)).reduce((acc, tot) => acc + tot);

  const saldo = valorReceitas - valorDespesas;

  const styleValor = {
    color: saldo < 0 ? 'red' : 'green',
  };

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

      <p>
        Você possui {userOut.length} registro(s) de despesas e {entries.length} registro(s) de
        receitas
      </p>
      <p>
        Sua(s) receita(s) tem um total de{' '}
        {valorReceitas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <p>
        Sua(s) despesa(s) tem um total de{' '}
        {valorDespesas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <p>
        Seu balanço é de{' '}
        <span style={styleValor}>
          {saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </span>
      </p>

      <Link className="btn btn-dark mr-3" to="/controle-despesas">
        Minhas despesas
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
