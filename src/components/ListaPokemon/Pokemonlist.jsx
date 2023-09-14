import React from 'react';
import Card from '../Cards/Card';
function Pokemonlist() {
  const pokemons = [
    {
      image: "/assets/Charmander.png",
      nombre: "Charmander",
      tipo: "fuego",
      pokemon: "pokemon-01",
      precio: "15.000 USD",
    }, {
      image: "/assets/Bulbasaur.png",
      nombre: "Bulbasaur",
      tipo: "planta",
      pokemon: "pokemon-02",
      precio: "15.000 USD"
    }, {
      image: "/assets/Squirtle.png",
      nombre: "Squirtle",
      tipo: "agua",
      pokemon: "pokemon-03",
      precio: "15.000 USD"
    }, {
      image: "/assets/Cyndaquil.png",
      nombre: "Cyndaquil",
      tipo: "fuego",
      pokemon: "pokemon-04",
      precio: "15.000 USD"
    }, {
      image: "/assets/Chikorita.png",
      nombre: "Chikorita",
      tipo: "fuego",
      pokemon: "pokemon-05",
      precio: "15.000 USD"
    }, {
      image: "/assets/Totodile.png",
      nombre: "Totodile",
      tipo: "fuego",
      pokemon: "pokemon-06",
      precio: "15.000 USD"
    }];
  return (
    <div>
      {pokemons.map((datos) => {
        return <Card pokemons={datos} />
      })}
    </div>
  )
}
export default Pokemonlist;