window.onload = () => {
  document.querySelector("#id_run").addEventListener("click", obtenerDatos)
  /*
  const para = document.querySelector("#id_nombre")
  para.addEventListener("click", updateName)

  function updateName() {
    let name = prompt('Ingresa un nuevo nombre')
    para.textContent = 'Nuevo nombre: ' + name
  }  
  */
}


function obtenerDatos() {
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        function randomIntFromInterval(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
        coverElement = document.getElementById("cover");
        let id = randomIntFromInterval(1, 21);
        title = myJson.data.movies[id].title;
        coverImgUrl= myJson.data.movies[id].medium_cover_image;
        summary = myJson.data.movies[id].summary;
        document.getElementById("title").innerHTML = title;
        coverElement.src = coverImgUrl;
        document.getElementById("summary").innerHTML = summary;
      })
  .catch(function(error) {
    console.log(error)
    console.log('error en la consulta')
  });
}


