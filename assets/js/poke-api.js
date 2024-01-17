const pokeapi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()

    pokemon.num = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type1] = types

    pokemon.types = types
    pokemon.type = type1
    
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeapi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
   
}

pokeapi.getPokemons = (offset, limit) => {

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


