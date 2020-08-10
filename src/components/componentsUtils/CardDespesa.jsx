import React from 'react';

const CardDespesa = ({ despesa }) => {
  // const regex = /-/gi;
  // const dataFormated = despesa.data.replace(regex, '/');
  const newDateFormated = new Date(despesa.data).toLocaleDateString('pt-br', { timeZone: 'UTC' });
  const valorConvertido = Number(despesa.valor).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleDelete = (id) => {
    localStorage.getItem('userOut').filter((entry) => entry.id !== id);
  };

  return (
    <tbody>
      <tr className="table">
        <td>{despesa.tipo}</td>
        <td>{despesa.produto}</td>
        <td>{valorConvertido}</td>
        <td>{newDateFormated}</td>
        <td>{despesa.pagamento}</td>
        <td>
          <button className="btn btn-sm btn-dark">x</button>
        </td>
      </tr>
    </tbody>
  );
};

export default CardDespesa;
