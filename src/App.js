import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';

import mealdbService from './services/mealdbService';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type='button' onClick={mealdbService.getRecipes}>Get a Recipe!!</Button>
      </header>
      <script src='/assets/bootstrap/js/bootstrap.min.js'></script>
    </div>
  );
}

export default App;
