import React, { useState } from 'react';

const axios = require('axios');

const Conversor = () => {
  const [moeda1, setMoeda1] = useState('');
  const [moeda2, setMoeda2] = useState('');
  const [valor, setValor] = useState(1);
  const [valorConvertido, setValorConvertido] = useState(0);

  const URL = `https://api.ratesapi.io/api/latest?base=${moeda1}&symbols=${moeda2}`;
  const getAPI = async () => {
    await axios.get(URL).then((resp) => setValorConvertido(resp.data.rates[moeda2]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moeda1 === moeda2) alert('Essa conversão não é possível');
    getAPI();
  };

  return (
    <form className="card mx-auto w-50 m-5" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="card-title text-center">Conversor de moedas</h2>

      <div className="card-body">
        <label htmlFor="moeda1">Converta</label>
        <select
          className="form-control"
          value={moeda1}
          id="moeda1"
          onChange={(e) => setMoeda1(e.target.value)}
        >
          <option value="">Escolha</option>
          <option value="USD">Dólar - US$</option>
          <option value="EUR">Euro - &#8364;</option>
          <option value="BRL">Real - R$</option>
          <option value="CAD">Dólar Canadense - CA$</option>
        </select>
      </div>

      <div className="card-body">
        <label className="mr-2" htmlFor="inputValue">
          Valor a ser convertido
        </label>
        <input
          className="form-control"
          value={valor}
          type="number"
          id="inputValue"
          onChange={(e) => setValor(e.target.value)}
        />
      </div>

      <div className="card-body">
        <label htmlFor="moeda2">Para</label>
        <select className="form-control" name="" id="" onChange={(e) => setMoeda2(e.target.value)}>
          <option value="">Escolha</option>
          <option value="USD">Dólar - US$</option>
          <option value="EUR">Euro - &#8364;</option>
          <option value="BRL">Real - R$</option>
          <option value="CAD">Dólar Canadense - CA$</option>
        </select>
      </div>

      <div className="mx-auto">
        <button className="btn btn-primary m-3" type="submit">
          Converter
        </button>
      </div>

      <div className="card-footer">
        <h3>Valor convertido:</h3>
        <h3>
          {moeda2
            ? (valorConvertido * valor).toLocaleString('pt-br', {
                style: 'currency',
                currency: `${moeda2}`,
              })
            : null}
        </h3>
      </div>
    </form>
  );
};

export default Conversor;
