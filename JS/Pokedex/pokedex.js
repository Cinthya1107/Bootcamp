document.addEventListener('DOMContentLoaded', function () {
    const pokedexList = document.getElementById('pokedex');

    function fetchPokemons() {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

        for (let i = 1; i <= 150; i++) {
            fetch(`${apiUrl}${i}`)
                .then(response => response.json())
                .then(data => {
                    const pokemon = {
                        name: data.name,
                        image: data.sprites['front_default'],
                        type: data.types.map((type) => type.type.name).join(', '),
                        id: data.id
                    };

                    displayPokemon(pokemon);
                })
                .catch(error => console.log('Error fetching Pokemon:', error));
        }
    }

    function displayPokemon(pokemon) {
        const listItem = document.createElement('li');
        listItem.classList.add('card');

        const image = document.createElement('img');
        image.src = pokemon.image;
        image.alt = pokemon.name;
        image.classList.add('card-image');

        const name = document.createElement('h2');
        name.textContent = pokemon.name;
        name.classList.add('card-title');

        const type = document.createElement('p');
        type.textContent = 'Type: ' + pokemon.type;
        type.classList.add('card-subtitle');

        listItem.appendChild(image);
        listItem.appendChild(name);
        listItem.appendChild(type);

        pokedexList.appendChild(listItem);
    }

    fetchPokemons();
});

