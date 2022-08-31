import React from 'react';
import { Link } from 'react-router-dom';
import Carregando from '../components/Carregando';
import Header from '../components/Header';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    busca: '',
    lista: [],
    loading: false,
    resultado: '',
  };

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      busca: value,
      resultado: value,
    });
  };

  handleClick = async () => {
    const { busca } = this.state;
    this.setState({ loading: true });
    const retornoBusca = await searchAlbumsAPIs(busca);
    this.setState({ loading: false, lista: retornoBusca, busca: '' });
  };

  render() {
    const { busca, lista, loading, resultado } = this.state;
    const minimo = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <p>Search</p>
        <form>
          <label htmlFor="search-artist-input">
            <input
              id="search-artist-input"
              type="text"
              data-testid="search-artist-input"
              value={ busca }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ busca.length < minimo }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>

        {loading && <Carregando />}

        <div>
          {lista.length > 0 ? (
            <div>
              <p>{`Resultado de álbuns de: ${resultado}`}</p>
              {lista.map((album) => (
                <div key={ `${album.artistId}` }>
                  <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                  <p>{album.collectionName}</p>
                  <Link
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    Ver Álbum
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>Nenhum álbum foi encontrado</p>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
