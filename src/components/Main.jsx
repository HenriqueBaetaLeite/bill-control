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
    <main className="card mx-auto text-center">
      <div className="card-header">
        <img
          ref={(el) => (logoItem = el)}
          src="https://www.flaticon.com/svg/static/icons/svg/2922/2922914.svg"
          width="40px"
          alt="bill control icon"
        />
        <h1 ref={(el) => (textItem = el)}>Boas vindas {userData.name}</h1>

        <h3>Este é o seu App de controle financeiro</h3>

        <h3>Registre e gerencie suas receitas e despesas</h3>
      </div>

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
      <div className="m-3 card w-50 mx-auto">
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"> */}
        <Link className="btn btn-dark m-3" to="/controle-despesas">
          Minhas despesas
        </Link>

        <Link className="btn btn-dark m-3" to="/controle-receitas">
          Minhas receitas
        </Link>

        <Link className="btn btn-dark m-3" to="/receitas">
          Registre uma nova receita
        </Link>

        <Link className="btn btn-dark m-3" to="/despesas">
          Registre uma nova despesa
        </Link>

        <Link className="btn btn-dark m-3" to="/bill-control">
          Sair
        </Link>
        {/* </div>
        </div> */}
      </div>
      <div className="card-footer">
        <Conversor />
      </div>
    </main>
  );
};

export default Main;
