import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './layouts/header';
import Products from './components/products';
import AddProduct from './components/addproduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route exact path="/addproduct">
              <AddProduct /> 
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
