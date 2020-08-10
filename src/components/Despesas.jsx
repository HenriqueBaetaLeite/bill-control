import React, { useState, useContext } from 'react';
import CreateInput from './componentsUtils/CreateInput';
import { Link, useHistory } from 'react-router-dom';
import Bill from '../context';

const Despesas = () => {
  const history = useHistory();
  const { userDespesas, getUserDespesas } = useContext(Bill);
  const [despesa, setDespesa] = useState({});

  const handleChange = (event) => {
    setDespesa({ ...despesa, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(despesa);
    getUserDespesas(despesa);
    localStorage.setItem('userOut', JSON.stringify([...userDespesas, despesa]));
    history.push('/controle');
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Faça o registro de suas despesas</h2>

      <section className="d-flex flex-column">
        <select onChange={(e) => handleChange(e)} name="tipo" id="tipo">
          <option value="">Categoria</option>
          <option value="alimentação">Alimentação</option>
          <option value="transporte">Transporte</option>
          <option value="lazer">Lazer</option>
          <option value="medicas">Despesas médicas</option>
        </select>

        <CreateInput
          type="textarea"
          name="produto"
          id="produto"
          onChange={(e) => handleChange(e)}
          label="Digite o(s) produto(s)"
          placeholder="...produto(s)"
        />

        <CreateInput
          type="number"
          name="valor"
          id="valor"
          onChange={(e) => handleChange(e)}
          label="Valor da despesa: R$"
          step="0.010"
        />
        <CreateInput
          type="radio"
          name="pagamento"
          id="dinheiro"
          value="dinheiro"
          onChange={(e) => handleChange(e)}
          label="Dinheiro"
        />
        <CreateInput
          type="radio"
          name="pagamento"
          id="credito"
          value="crédito"
          onChange={(e) => handleChange(e)}
          label="Cartão de Crédito"
        />
        <CreateInput
          type="radio"
          name="pagamento"
          id="debito"
          value="débito"
          onChange={(e) => handleChange(e)}
          label="Cartão de Débito"
        />
        <CreateInput
          type="radio"
          name="pagamento"
          id="alimentacao"
          value="alimentação"
          onChange={(e) => handleChange(e)}
          label="Cartão Alimentação"
        />
        <CreateInput
          type="date"
          name="data"
          id="data"
          onChange={(e) => handleChange(e)}
          label="Data do registro"
        />
      </section>

      <button className="btn btn-dark mr-3" type="submit">
        Adicionar registro
      </button>

      <Link className="btn btn-dark" to="/main">
        Voltar para home
      </Link>
    </form>
  );
};

export default Despesas;
