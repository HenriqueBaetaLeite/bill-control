import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Bill from '../context/';

const Main = () => {
  const { userData } = useContext(Bill);
  return (
    <div>
      <h2>Boas vindas {userData.name}</h2>
      <Link to="/controle">Minhas contas</Link>
      <Link to="/despesas">Registre uma nova despesa</Link>
      <Link to="/">
        <button onClick={() => localStorage.clear()}>Sair</button>
      </Link>
    </div>
  );
};

export default Main;
