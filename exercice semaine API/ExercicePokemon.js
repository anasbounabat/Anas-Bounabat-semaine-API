
fetch("https://pokeapi.co/api/v2/pokemon/articuno")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });


  /* Le fetch sert à faire des requêtes avec l'API du Pokemon ensuite le .then va traiter la donnée et elle va la transformer en format JSON et le console.log va afficher*/


function fetchPokemon(pokemon) { 
    return fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then((response) => response.json())
}


/* Le fetchPokemon prend la parametre pokemon elle va envoyer une requete ensuite le fetch va envoyer une promesse ensuite le .then va etre appele sur cette promesse et la reponse va etre transformé en .Json()  */

async function displayPokemon(pokemon) { 
const data = await fetchPokemon(pokemon)
document.getElementById("pokemon").innerHTML = `
    <h1>${data.name}</H1>
<img src='${data.sprites.front_default}" alt="${data.name}"/>
`;
}