import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [userInput, setUserInput] = useState({ name: '', email: '' });
  const history = useHistory();

  const changeInput = (name, event) => {
    setUserInput({ ...userInput, [name]: event });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userInput));
    history.push('/main');
  };

  const isUserInput = Boolean(userInput.name) && Boolean(userInput.email);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="container mt-4">
      <h3 className="mb-4">Login</h3>

      <section className="form-group">
        <label htmlFor="name">User</label>
        <input
          value={userInput.name}
          onChange={(event) => changeInput('name', event.target.value)}
          className="form-control"
          type="text"
          id="name"
          required
        />
      </section>

      <section className="form-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => changeInput('email', event.target.value)}
          className="form-control"
          type="email"
          id="email"
          required
        />
        <small>Não vamos compartilhar seu e-mail</small>
      </section>

      <button type="submit" className="btn btn-dark" disabled={!isUserInput}>
        Login
      </button>
    </form>
  );
};

export default Login;
