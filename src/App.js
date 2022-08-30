import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <switch>
          <div data-testid="page-login">
            <Route exact path="/" component="Login" />
          </div>
          <div data-testid="page-search">
            <Route exact path="/search" component="Search" />
          </div>
          <div data-testid="page-album">
            <Route exact path="/album/:id" component="Login" />
          </div>
          <div data-testid="page-favorites">
            <Route exact path="/favorites" component="Favorites" />
          </div>
          <div data-testid="page-profile">
            <Route exact path="/profile" component="Profile" />
          </div>
          <div data-testid="page-profile-edit">
            <Route exact path="/profile/edit" component="ProfileEdit" />
          </div>
          <div data-testid="page-not-found">
            <Route path="/rota-nao-mapeada" component="NotFound" />
          </div>
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
