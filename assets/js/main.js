let offset = 0
const limit = 10
const maxRecords = 151

const pokedexOL = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")

function loadPokemonItens(offset,limit){
    pokeapi.getPokemons(offset,limit).then((pokemonList)=>{
        pokedexOL.innerHTML += pokemonList.map((pokemon) => {
            return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                </div>
            </li>`
            }).join('')

    })
}

loadPokemonItens(offset,limit)


loadMoreButton.addEventListener("click", () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})





