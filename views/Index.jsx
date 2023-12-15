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
        {props.pokemonProp.map((pokemon, i) => {
            return <li><a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a></li>
        })}
        </ul>
    </div>
  )
}

export default Index