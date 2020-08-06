import React, { useEffect, useContext } from 'react';
import Bill from '../context';
import { Link } from 'react-router-dom';

const Controle = () => {
  const { userEntries, getUserEntries } = useContext(Bill);
  useEffect(() => {
    getUserEntries('userOut');
  }, []);

  const isUser = Boolean(userEntries);

  return (
    <div>
      <h3>Estes são seus registros</h3>
      {!isUser ? (
        <h2>Nada encontrado</h2>
      ) : (
        userEntries.map((despesa, index) => (
          <div style={{ border: '2px solid red', width: '400px' }} key={`${index}-despesa`}>
            <p>{despesa.tipo}</p>
            <p>{despesa.produto}</p>
            <p>R${despesa.valor}</p>
            <p>{despesa.pagamento}</p>
          </div>
        ))
      )}
      <Link to="/despesas">Registrar nova despesa</Link>
      <Link to="/main">Voltar para home</Link>
    </div>
  );
};

export default Controle;
