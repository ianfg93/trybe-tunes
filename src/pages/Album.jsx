import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  state = {
    musicas: [],
  };

  componentDidMount() {
    this.music();
  }

  music = async () => {
    const { match: { params: { id } } } = this.props;
    const sons = await getMusics(id);
    this.setState({ musicas: sons });
  };

  render() {
    const { musicas } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { musicas.length > 0 && (
          <section>
            <p data-testid="artist-name">{ musicas[0].artistName }</p>
            <p data-testid="album-name">{ musicas[0].collectionName }</p>
          </section>
        )}
        { musicas.length > 0 && (
          musicas.map((m, i) => (
            i > 0 && (
              <MusicCard trackName={ m.trackName } previewUrl={ m.previewUrl } />
            ))))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired }).isRequired }).isRequired };

export default Album;
