import React from 'react'

const myStyle = {
    color: 'darkred',
    backgroundColor: '#ffffff',
}

function Index(props) {

  return (
    <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
        {props.pokemonProp.map((pokemon) => {
            return <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        })}
        </ul>
    </div>
  )
}

export default Index