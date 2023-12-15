import React from 'react'

function Show(props) {
  return (
    <>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{props.pokemonProp.name}</h2>
        <img src={`${props.pokemonProp.img}.jpg`} />
        <a href='/'>back</a>
    </>
  )
}

export default Show