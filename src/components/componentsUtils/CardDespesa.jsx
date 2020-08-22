import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Bill from '../../context';

const CardDespesa = ({ despesa }) => {
  const { getUserOut } = useContext(Bill);
  // const regex = /-/gi;
  // const dataFormated = despesa.data.replace(regex, '/');
  const newDateFormated = new Date(despesa.data).toLocaleDateString('pt-br', { timeZone: 'UTC' });
  const valorConvertido = Number(despesa.valor).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleDelete = (id) => {
    const userOut = JSON.parse(localStorage.getItem('userOut'));
    const newUserOut = userOut.filter((out) => out.id !== id);
    localStorage.setItem('userOut', JSON.stringify(newUserOut));
    getUserOut('userOut');
  };

  const isDateRegistered = !!despesa.data;

  const isPagamento = !!despesa.pagamento;

  return (
    <tbody>
      <tr className="table">
        <td style={{ textTransform: 'capitalize' }}>{despesa.tipo}</td>
        <td>{despesa.produto}</td>
        <td>{valorConvertido}</td>
        <td>{isDateRegistered ? newDateFormated : 'sem registro'}</td>
        <td>{isPagamento ? despesa.pagamento : 'sem registro'}</td>
        <td>
          <button onClick={() => handleDelete(despesa.id)} className="btn btn-sm btn-dark">
            x
          </button>
        </td>
      </tr>
    </tbody>
  );
};

CardDespesa.propTypes = {
  despesa: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CardDespesa;
