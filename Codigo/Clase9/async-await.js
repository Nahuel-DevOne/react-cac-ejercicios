// función asíncrona
let getNameAsync = async idPost => {
    // uso try y catch siempre para peticiones asíncronas
    try {
      // espero la respuesta, que es la  data que traigo con fetch
      let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
      // convierto la data en json para luego poder acceder con notación de punto
      let post = await resPost.json()
      // viendo por consola lo que me traje
      console.log(post)
      // espero la respuesta, que es otra data que traigo con fetch
      let resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      // convierto la data en json para luego poder acceder con notación de punto
      let user = await resUser.json()
      // viendo por consola lo que me traje
      console.log(user) 

      // jugando ya con la data, accediendo a la información con notación de punto
      // para la de post va a ser post. y para la de user va a ser user. y la data a la que quiera acceder
      document.write(`${user.name} vive en ${user.address.city} escribio el post ${idPost}: ${post.title}`)
      console.log(`${user.name} vive en ${user.address.city} escribio el post ${idPost}: ${post.title}`)

    } catch (error) {
        console.log(error);
    }

}

getNameAsync(80)