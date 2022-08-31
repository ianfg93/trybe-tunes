import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div>
        <section data-testid="page-album">Albúm</section>
        <Header />
      </div>
    );
  }
}

export default Album;
