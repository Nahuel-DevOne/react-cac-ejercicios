const apiKey = 'api-key';
// const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}`

const getMovies = async page => {
    try {
        // espero la respuesta, que es la  data que traigo con fetch
      let resMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}`);
      // convierto la data en json para luego poder acceder con notación de punto
      let movies = await resMovies.json()
      // viendo por consola lo que me traje
      console.log(movies)

    } catch (error) {
        console.log(error)
    }
}

getMovies(1)
