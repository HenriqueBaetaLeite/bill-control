import React from 'react';

const CardDespesa = ({ despesa }) => {
  const regex = /-/gi;
  console.log('cardDespesa: ', despesa);
  const dataFormated = despesa.data.replace(regex, '/');
  return (
    <tbody>
      <tr className="table-">
        <td>{despesa.tipo}</td>
        <td>{despesa.produto}</td>
        <td>R${despesa.valor}</td>
        <td>{dataFormated}</td>
      </tr>
    </tbody>
  );
};

export default CardDespesa;
