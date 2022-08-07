import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { MovieProvider } from '../Context/movieContext';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import Home from '../Component/Home';
import MovieListTable from '../Component/MovieListTable';
import MovieForm from '../Component/MovieForm';
import MovieListDetail from '../Component/Main/MovieListDetail';
import { GameProvider } from '../Context/gameContext';
import GamesListTable from '../Component/GamesListTable';
import GamesForm from '../Component/GamesForm';
import GameListDetail from '../Component/Main/GameListDetail';
import { UserProvider } from '../Context/userContext2';
import Login from '../Component/Login';
import Register from '../Component/Register';
import ForgotPassword from '../Component/ForgotPassword';
import Cookies from 'js-cookie';

const Routes = () => {
  const LoginRoute = ({...props}) => {
    if( Cookies.get('token') !== undefined ){
      return <Redirect path="/"/>
    }else{
      return <Route {...props}/>
    }
  }

  return (
    <>
      <Router>
            <Switch>
              <Route path='/' exact>
                <MovieProvider>
                  <Home />
                </MovieProvider>
              </Route>
              <Route path='/showMovie/:id' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <MovieProvider>
                  <MovieListDetail />
                </MovieProvider>
                <Footer />
              </Route>
              <Route path='/showGame/:id' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <GameProvider>
                  <GameListDetail />
                </GameProvider>
                <Footer />
              </Route>
              <Route path='/moviesList' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <MovieProvider>
                  <MovieListTable />
                </MovieProvider>
                <Footer />
              </Route>
              <Route path='/moviesList/create' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <MovieProvider>
                  <MovieForm />
                </MovieProvider>
                <Footer />
              </Route>
              <Route path='/moviesList/edit/:id' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <MovieProvider>
                  <MovieForm />
                </MovieProvider>
                <Footer />
              </Route>
              <Route path='/gamesList' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <GameProvider>
                  <GamesListTable />
                </GameProvider>
                <Footer />
              </Route>
              <Route path='/gamesList/create' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <GameProvider>
                  <GamesForm />
                </GameProvider>
                <Footer />
              </Route>
              <Route path='/gamesList/edit/:id' exact>
              <UserProvider>
                <Header />
              </UserProvider>
                <GameProvider>
                  <GamesForm />
                </GameProvider>
                <Footer />
              </Route>
              <LoginRoute path='/login' exact>
                <UserProvider>
                  <Login />
                </UserProvider>
              </LoginRoute>
              <LoginRoute path='/register' exact>
                <UserProvider>
                  <Register />
                </UserProvider>
              </LoginRoute>
              <Route path='/forgotPassword' exact>
                <ForgotPassword />
              </Route>
            </Switch>
      </Router>
    </>
  )
}

export default Routes