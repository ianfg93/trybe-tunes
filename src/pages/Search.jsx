import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    artista: '',
  };

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      artista: value,
    });
  };

  render() {
    const { artista } = this.state;
    const minimo = 2;
    return (
      <div>
        <section data-testid="page-search">Search</section>
        <Header />
        <label htmlFor="search-artist-input">
          Nome
          <input
            type="text"
            data-testid="search-artist-input"
            value={ artista }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ artista.length < minimo }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
