import React, { useEffect, useContext } from 'react';
import Bill from '../context';
import { Link } from 'react-router-dom';
import CardDespesa from './componentsUtils/CardDespesa';

const Controle = () => {
  const { userEntries, getUserEntries } = useContext(Bill);
  useEffect(() => {
    getUserEntries('userOut');
  }, []);

  // abaixo é o mesmo que Boolean(userEntries)
  const isUser = !!userEntries;

  return (
    <div>
      <h3>Estes são seus registros</h3>
      {!isUser ? (
        <h2>Nada encontrado</h2>
      ) : (
        userEntries.map((despesa, index) => (
          <CardDespesa despesa={despesa} key={`${index}-despesa`}></CardDespesa>
        ))
      )}
      <Link to="/despesas">Registrar nova despesa</Link>
      <Link to="/main">Voltar para home</Link>
    </div>
  );
};

export default Controle;
