import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
};

export default NotFound;