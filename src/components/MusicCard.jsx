import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

class MusicCard extends React.Component {
  state = {
    loading: false,
    musicasFavoritadas: [],
  };

  componentDidMount() {
    this.solicitandoMusica();
    this.musicFavoritas();
  }

  musicFavoritas = async () => {
    const favoritas = await getFavoriteSongs();
    this.setState({ musicasFavoritadas: favoritas });
  };

  solicitandoMusica = (a) => {
    this.setState({ loading: true }, async () => {
      await addSong(a);
      await this.musicFavoritas();
      this.setState({ loading: false });
    });
  };

  render() {
    const { trackName, previewUrl, trackId, musica } = this.props;
    const { loading, musicasFavoritadas } = this.state;

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
              checked={ musicasFavoritadas.some((som) => som.trackId === trackId) }
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
