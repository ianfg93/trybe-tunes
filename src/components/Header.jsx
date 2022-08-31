import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

class Header extends React.Component {
  state = {
    usuario: '',
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const user = await getUser();
    this.setState({ usuario: user.name, loading: false });
  }

  render() {
    const { usuario, loading } = this.state;
    return (
      <header data-testid="header-component">
        <div data-testid="header-user-name">
          <p>{usuario}</p>
          <ul>
            <li><Link to="/search" data-testid="link-to-search">Buscar</Link></li>
            <li>
              <Link to="/favorites" data-testid="link-to-favorites">
                Favoritos
              </Link>
            </li>
            <li><Link to="/profile" data-testid="link-to-profile">Perfil</Link></li>
          </ul>
          {loading && <Carregando />}
        </div>
      </header>
    );
  }
}

export default Header;
