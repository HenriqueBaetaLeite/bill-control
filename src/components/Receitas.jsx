import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 } from 'uuid';
import CreateInput from './componentsUtils/CreateInput';
import Bill from '../context';

const Receitas = () => {
  const { entries } = useContext(Bill);
  const [receita, setReceita] = useState({ id: v4() });
  const history = useHistory();

  const handleChange = (event) => {
    setReceita({ ...receita, [event.target.name]: event.target.value });
  };

  console.log('componente receita', receita);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userEntries', JSON.stringify([...entries, receita]));
    history.push('/main');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Página de receitas
      <CreateInput
        type="text"
        name="receita"
        id="receita"
        onChange={(e) => handleChange(e)}
        label="Digite a(s) receita(s)"
        placeholder="...receita(s)"
      />
      <CreateInput
        type="number"
        name="valor"
        id="valor"
        onChange={(e) => handleChange(e)}
        label="Digite o valor"
      />
      <CreateInput
        type="date"
        name="data"
        id="data"
        onChange={(e) => handleChange(e)}
        label="Data da receita"
      />
      <button className="btn btn-dark mr-3" type="submit">
        Adicionar registro
      </button>
      <Link className="btn btn-dark" to="/main">
        Voltar para home
      </Link>
    </form>
  );
};

export default Receitas;
