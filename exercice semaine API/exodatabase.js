function fetchStarWars3() {
  return fetch(
    "https://api.themoviedb.org/3/movie/1895?api_key=d4ffab709d2157d5d85cf18fae3a6a1c&language=fr-FR"
  ).then((response) => response.json());
}

/* La fonction fetchStarWars3 va faire une requete ensuite la requete va etre transformer en format Json()  qui va etre appliqué a la response */
async function displayStarWrs3() {
  const data = await fetchStarWars3();

  document.getElementById("star-wars-3").innerHTML = `
    <h1>${data.title}</H1>
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}" />
`;
}
displayStarWrs3();

/* C'est une fonction aynchrone displayStarWrs3 ensuite le await pour attendre la promesse de la fonction ensuite l'API va afficher le titre et l'image */