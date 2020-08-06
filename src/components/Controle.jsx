import React, { useEffect, useContext } from 'react';
import Bill from '../context';
import { Link } from 'react-router-dom';

const Controle = () => {
  const { userDespesas, getUserEntries } = useContext(Bill);
  useEffect(() => {
    getUserEntries('userData');
  }, []);

  return (
    <div>
      <h3>Estes são seus registros</h3>
      {userDespesas.map((despesa, index) => (
        <div style={{border: '2px solid red', width: '400px'}} key={`${index}-despesa`}>
          <p>{despesa.tipo}</p>
          <p>{despesa.produto}</p>
        </div>
      ))}
      <Link to="/main">Voltar para home</Link>
    </div>
  );
};

export default Controle;
