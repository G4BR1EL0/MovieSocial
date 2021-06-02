import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Header from './Components/Header/Header.js';
import HomePage from './Containers/HomePage/HomePage.js';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login></Login>
          </Route>
          <Route path="/register" exact>
            <Register></Register>
          </Route>
          <Route path="/header" exact>
            <Header></Header>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
