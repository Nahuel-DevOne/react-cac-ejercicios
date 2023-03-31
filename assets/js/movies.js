let page = 1;

const btnAnterior = document.querySelector('#btn-anterior')
const btnSiguiente = document.querySelector('#btn-siguiente')
const containerMovies = document.querySelector('#container-movies')


btnAnterior.addEventListener('click', () => {
    console.log('click')
    if (page > 1) {
        page -= 1
        // llamar a la función que cargue las pelis
        getMovies(1)
    }
})

btnSiguiente.addEventListener('click', () => {
    console.log('click')
    if (page < 500) {
        page += 1
        // llamar a la función que cargue las pelis
        getMovies(1)
    }
})

const apiKey = 'api-key';

const getMovies = async page => {
    try {
        // espero la respuesta, que es la  data que traigo con fetch
      let resMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}`);
      if(resMovies.status === 200){
          // convierto la data en json para luego poder acceder con notación de punto
          let datos = await resMovies.json()
          // viendo por consola lo que me traje
          console.log(datos)
          console.log(datos.results)
          
          let peliculas = '';
          datos.results.forEach( pelicula => {
            peliculas += `
            <div class="pelicula"> 
                <img class = "poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" />
                <h3 class="titulo">${pelicula.title}</h3>
            </div>
            `
          });

          containerMovies.innerHTML = peliculas
          
      } else if (resMovies.status === 404) {
        console.log('Error 404 nos vimos en Disney')
      } else {
        console.log('Estado desconocido')
      }

    } catch (error) {
        console.log(error)
    }
}

// getMovies(1)

document.addEventListener('DOMContentLoaded', getMovies(page))
