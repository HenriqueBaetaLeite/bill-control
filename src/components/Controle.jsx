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
      {!isUser || userEntries.length === 0 ? (
        <h2>Nada encontrado</h2>
      ) : (
        <div>
          <h3>Estes são seus registros</h3>
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Produto/Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            {userEntries.map((despesa, index) => (
              <CardDespesa despesa={despesa} key={`${index}-despesa`} />
            ))}
            <tfoot>
              <tr>
                <td>Soma</td>
                <td></td>
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
