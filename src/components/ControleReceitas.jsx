import React, { useContext } from 'react';
import Bill from '../context';
import { Link } from 'react-router-dom';
import CardReceita from './componentsUtils/CardReceita';

const ControleReceitas = () => {
  const { entries } = useContext(Bill);

  // abaixo é o mesmo que Boolean(entries)
  const isUser = !!entries;

  const somaReceitas =
    !isUser || entries.length === 0
      ? 0
      : entries
          .map((entry) => Number(entry.valor))
          .reduce((acc, tot) => acc + tot)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <div>
      {!isUser || entries.length === 0 ? (
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
              </tr>
            </thead>
            {entries.map((receita, index) => (
              <CardReceita receita={receita} key={`${index}-receita`} />
            ))}
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{entries.length}</td>
                <td className="text-primary">{somaReceitas}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
      <Link className="btn btn-dark mr-3" to="/receitas">
        Registrar nova receita
      </Link>
      <Link className="btn btn-dark" to="/main">
        Voltar para home
      </Link>
    </div>
  );
};

export default ControleReceitas;
