import React from 'react'

function New() {
  return (
    <>
        <h1>Create A New Pokemon</h1>
        <form action="/pokemon" method="POST"><br/>
        Name: <input type="text" name="name" /><br/>
        Color: <input type="text" name="color" /><br/>
        Pokemon: <input type="checkbox" name="isAPokemon" /><br/>
        <input type="submit" value="Create pokemon" />
        </form>
    </>
  )
}

export default New