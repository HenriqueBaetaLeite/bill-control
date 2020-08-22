import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Bill from '../../context';

const CardReceita = ({ receita }) => {
  const { getEntries } = useContext(Bill);
  // const regex = /-/gi;
  // const dataFormated = receita.data.replace(regex, '/');
  const newDateFormated = new Date(receita.data).toLocaleDateString('pt-br', { timeZone: 'UTC' });
  const valorConvertido = Number(receita.valor).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleDelete = (id) => {
    const userEntries = JSON.parse(localStorage.getItem('userEntries'));
    const newUserEntries = userEntries.filter((out) => out.id !== id);
    localStorage.setItem('userEntries', JSON.stringify(newUserEntries));
    getEntries('userEntries');
  };

  const isDateRegistered = !!receita.data;

  const isPagamento = !!receita.pagamento;

  return (
    <tbody>
      <tr className="table">
        <td style={{ textTransform: 'capitalize' }}>{receita.receita}</td>
        <td>{receita.produto}</td>
        <td>{valorConvertido}</td>
        <td>{isDateRegistered ? newDateFormated : 'sem registro'}</td>
        <td>
          <button onClick={() => handleDelete(receita.id)} className="btn btn-sm btn-dark">
            x
          </button>
        </td>
      </tr>
    </tbody>
  );
};

CardReceita.propTypes = {
  receita: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CardReceita;
