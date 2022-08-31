import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    name: '',
    loading: false,
  };

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      name: value,
    });
  };

  handleClick = () => {
    const { name } = this.state;
    const { history } = this.props;
    this.setState({ loading: true }, async () => {
      await createUser({ name });
      history.push('/search');
    });
  };

  render() {
    const { name, loading } = this.state;
    const minimo = 3;
    return (
      <div>
        <Header />
        {loading && (<p>Carregando...</p>)}
        <h1>Login</h1>
        <form>
          <label htmlFor="login-name-input">
            Nome
            <input
              type="text"
              data-testid="login-name-input"
              id="login-name-input"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length < minimo }
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
  handleChange: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
}.isRequired;

export default Login;
