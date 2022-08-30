import React from 'react';
import Header from '../components/Header';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Login</h1>
        <form data-testid="login-name-input">
          <label htmlFor="nome-input">
            Nome
            <input
              data-testid="login-name-input"
              type="text"
              name="nome"
            />
          </label>
          <button type="button" data-testid="login-submit-button">Entrar</button>
        </form>

      </div>
    );
  }
}

export default Login;
