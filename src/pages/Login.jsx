import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    usuario: '',
    loading: false,
  };

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      usuario: value,
    });
  };

  handleClick = async () => {
    const { usuario } = this.state;
    const { history } = this.props;
    this.setState({ loading: true });
    await createUser({ name: usuario });
    history.push('/search');
  };

  render() {
    const { usuario, loading } = this.state;
    const minimo = 3;
    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        {loading && <p>Carregando...</p>}
        <form>
          <label htmlFor="login-name-input">
            Nome
            <input
              type="text"
              data-testid="login-name-input"
              id="login-name-input"
              value={ usuario }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ usuario.length < minimo }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired }).isRequired };

export default Login;
