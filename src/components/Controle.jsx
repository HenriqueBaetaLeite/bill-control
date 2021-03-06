import React, { useEffect, useContext } from 'react';
import Bill from '../context';
import { Link } from 'react-router-dom';
import CardDespesa from './componentsUtils/CardDespesa';

const Controle = () => {
  const { userOut } = useContext(Bill);

  // abaixo é o mesmo que Boolean(userOut)
  const isUser = !!userOut;

  const somaDespesas =
    !isUser || userOut.length === 0
      ? 0
      : userOut
          .map((entry) => Number(entry.valor))
          .reduce((acc, tot) => acc + tot)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <div>
      {!isUser || userOut.length === 0 ? (
        <h2>Nada encontrado</h2>
      ) : (
        <div>
          <h3>Estes são seus registros</h3>
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            {userOut.map((despesa, index) => (
              <CardDespesa despesa={despesa} key={`${index}-despesa`} />
            ))}
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{userOut.length}</td>
                <td className="text-danger">{somaDespesas}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
      <Link className="btn btn-dark mr-3" to="/despesas">
        Registrar nova despesa
      </Link>
      <Link className="btn btn-dark" to="/main">
        Voltar para home
      </Link>
    </div>
  );
};

export default Controle;
