import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import HomePage from './Containers/HomePage/HomePage.js';
import LoginPage from './Containers/LoginPage/LoginPage.js';
import RegisterPage from './Containers/RegisterPage/RegisterPage.js';
import SearchPage from './Containers/SearchPage/SearchPage';
import ProfilePage from './Containers/ProfilePage/ProfilePage';
import Seeder from './Components/Seeder/Seeder.js';
import MovieDetailPage from './Containers/MovieDetailPage/MovieDetailPage';
import AddValoration from './Components/AddValoration/AddValoration';
import EditValoration from './Components/EditValoration/EditValoration.js';
import { Footer } from './Components/Footer/Footer';



function App() {
  return (
    
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/login" exact>
            <LoginPage/>
          </Route>
          <Route path="/register" exact>
            <RegisterPage/>
          </Route>
          <Route path="/search" exact>
            <SearchPage/>
          </Route>
          <Route path="/movieDetail" exact>
            <MovieDetailPage/>
          </Route>
          <Route path="/add-valoration" exact>
            <AddValoration/>
          </Route>
          <Route path="/editValoration" exact>
            <EditValoration/>
          </Route>
          <Route path="/profile" exact>
            <ProfilePage/>
          </Route>
          <Route path="/seed" exact>
            <Seeder/>
          </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
