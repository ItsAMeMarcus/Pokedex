const pokeapi = {}

pokeapi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
   
}

pokeapi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => pokemonList.map(pokeapi.getPokemonsDetail))
    .then((detailRequests)=> Promise.all(detailRequests))
    // .then((teste)=> console.log(teste))
    .finally(() => console.log("deu tudo certo!"))
}

Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon/1"),
    fetch("https://pokeapi.co/api/v2/pokemon/2"),
    fetch("https://pokeapi.co/api/v2/pokemon/3"),
    fetch("https://pokeapi.co/api/v2/pokemon/4"),
]).then((results) => {
    console.log(results)
})

