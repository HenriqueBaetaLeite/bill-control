import React from 'react';

const CardDespesa = ({ despesa }) => {
  console.log('cardDespesa: ', despesa);
  const dataFormated = despesa.data.slice(5).replace('-', '/');
  return (
    <div style={{ border: '1px solid black', width: '250px' }}>
      <p>{despesa.tipo}</p>
      <p>{despesa.produto}</p>
      <p>{despesa.valor}</p>
      <p>{dataFormated}</p>
    </div>
  );
};

export default CardDespesa;
