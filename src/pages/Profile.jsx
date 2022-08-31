import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <section data-testid="page-profile">Perfil</section>
        <Header />
      </div>
    );
  }
}

export default Profile;
