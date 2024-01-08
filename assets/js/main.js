

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const pokedexOL = document.getElementById("pokemonList")



function convertPokemonTypesToLi(pokemonType){
    console.log(pokemonType)
    pokemonType.map((obj)=> `<li class="type">${obj.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
</li>`
}

pokeapi.getPokemons().then((pokemonList)=>{
    pokedexOL.innerHTML += pokemonList.map(convertPokemonToLi).join('')
})



