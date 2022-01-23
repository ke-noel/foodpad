import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "./foodpad_black.svg"
import Button from 'react-bootstrap/Button';

import mealdbService from './services/mealdbService';

import GroceryList from './components/GroceryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="foodpad logo" />
        <div className="bottom">
          <GroceryList items="" />
        </div>
      </header>

      <script src='/assets/bootstrap/js/bootstrap.min.js'></script>
    </div>
  );
}

export default App;
