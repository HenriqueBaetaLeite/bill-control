import React from 'react';

const CardDespesa = ({ despesa }) => {
  // const regex = /-/gi;
  // const dataFormated = despesa.data.replace(regex, '/');
  const newDateFormated = new Date(despesa.data).toLocaleDateString('pt-br', { timeZone: 'UTC' });
  const valorConvertido = Number(despesa.valor).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  console.log('cardDespesa: ', despesa);

  return (
    <tbody>
      <tr className="table-">
        <td>{despesa.tipo}</td>
        <td>{despesa.produto}</td>
        <td>{valorConvertido}</td>
        <td>{newDateFormated}</td>
        <td>{despesa.pagamento}</td>
      </tr>
    </tbody>
  );
};

export default CardDespesa;
