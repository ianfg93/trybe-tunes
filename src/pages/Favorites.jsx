import React from 'react';
import Header from '../components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <div>
        <section data-testid="page-favorites">Favoritos</section>
        <Header />
      </div>
    );
  }
}

export default Favorites;
