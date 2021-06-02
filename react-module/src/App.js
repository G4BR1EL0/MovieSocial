import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import HomePage from './Containers/HomePage/HomePage.js';
import LoginPage from './Containers/LoginPage/LoginPage.js';
import RegisterPage from './Containers/RegisterPage/RegisterPage.js';

function App() {
  return (
    
    <BrowserRouter>
      <Header></Header>
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
        </Switch>
    </BrowserRouter>
    
  );
}

export default App;
