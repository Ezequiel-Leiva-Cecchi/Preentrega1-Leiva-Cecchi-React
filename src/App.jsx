import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Pokemonlist from './components/ListaPokemon/Pokemonlist';
import Nav from './components/Navbar/Nav';


function App() {
  return (
    <>
      <Nav/>
      <main>
      <Pokemonlist/>
      </main>
    </>
  );
}

export default App;
