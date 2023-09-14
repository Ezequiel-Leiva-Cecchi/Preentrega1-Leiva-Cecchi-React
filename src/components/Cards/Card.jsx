import React from 'react'
import './card.css';
function Card({ pokemons }) {
  return (
    <div class="card">
      <div class="card-body">
        <img src={pokemons.image} alt="imagen del pokemon"/>
        <p class="card-text">nombre:{pokemons.nombre}</p>
        <p class="card-text">tipo:{pokemons.tipo}</p>
        <p class="card-text">precio:{pokemons.precio}</p>
      </div>
    </div>
  )
}
export default Card;