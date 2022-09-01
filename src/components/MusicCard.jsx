import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

class MusicCard extends React.Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.solicitandoMusica();
  }

  solicitandoMusica = (a) => {
    this.setState({ loading: true }, async () => {
      await addSong(a);
      this.setState({ loading: false });
    });
  };

  render() {
    const { trackName, previewUrl, trackId, musica } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        <div>
          {loading && <Carregando />}
          <label htmlFor={ `checkbox-music-${trackId}` }>
            Favorita
            <input
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              id={ `checkbox-music-${trackId}` }
              onClick={ () => this.solicitandoMusica(musica) }
            />
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  musica: PropTypes.shape().isRequired };

export default MusicCard;
