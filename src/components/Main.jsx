import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Bill from '../context/';

const Main = () => {
  const { userData } = useContext(Bill);
  return (
    <div>
      <h2>Boas vindas {userData.name}</h2>
      <p>Este é o seu WebApp de controle financeiro</p>
      <p>Registre e gerencie suas receitas e despesas</p>
      {/* INCLUIR COTAÇÃO ATUAL DO DÓLAR E EURO */}
      <Link to="/controle">Minhas contas</Link>
      <Link to="/despesas">Registre uma nova despesa</Link>
      <Link to="/">Sair
        {/* <button onClick={() => localStorage.clear()}>Sair</button> */}
      </Link>
    </div>
  );
};

export default Main;