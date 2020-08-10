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
      <Link className="btn btn-dark mr-3" to="/controle">
        Minhas contas
      </Link>
      <Link className="btn btn-dark mr-3" to="/despesas">
        Registre uma nova despesa
      </Link>
      <Link className="btn btn-dark" to="/bill-control">
        Sair
        {/* <button onClick={() => localStorage.clear()}>Sair</button> */}
      </Link>
    </div>
  );
};

export default Main;
