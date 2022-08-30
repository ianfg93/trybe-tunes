import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
        <Login />
        <Album />
        <Favorites />
        <NotFound />
        <Search />
      </BrowserRouter>
    );
  }
}

export default App;
