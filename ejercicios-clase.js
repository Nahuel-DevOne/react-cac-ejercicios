// // let numero = Number(prompt('Elegí un número'));

// // while(numero < 100){
// //     numero ++;
// //     document.write(numero + "<br>");
// //     if(numero === 50){
// //         break;
// //     }
// // }

// // do {
// //     numero++;
// //     document.write(numero);
// // } while(numero < 100)

// // for(let i = 0; i < 100 ; i++){
// //     numero++;
// //     console.log(numero)
// // }

// // for(let i = 0; i > 0; i++){
// //     numero++;
// //     console.log(numero);
// // }

// // Arrays

// console.info('Array: lenguajes')
// let lenguajes = ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'Golang', 'Ruby', 'R'];
// console.info('Cantidad de elementos:')
// console.log(lenguajes.length)
// console.info('Último elemento')
// console.log(lenguajes[lenguajes.length - 1]);

// let animales = ['gato', 'perro', 'tigre', 'rata', 'conejo', 'gato'];
// let numeros = [1,2,8,7,4,6,7,3]

// // map
// let arrayMap = numeros.map(num => num * 10);
// console.log(arrayMap)

// // filter
// let arrayFilter = animales.filter(elements => elements === 'perro' || elements === 'gato')
// console.log(arrayFilter)

// // forEach
// animales.forEach((element,i) => {
//     console.log(`El ${element} está en la posición ${i}`)
// })

// // find
// let arrayFind = numeros.find(element => element < 3);
// console.log(arrayFind)

// // push ... agrega al final
// animales.push('cocodrilo')
// console.log(animales)

// // pop ... borra al final
// animales.pop()
// console.log(animales)

// // shift ... borra al inicio
// animales.shift()
// console.log(animales)

// // unshift ... agrega al principio
// animales.unshift('Dragón')
// console.log(animales)

// // slice
// const arraySlice = animales.slice(0,3);
// console.log(arraySlice)

/** Fetch */
/*********************************************************************/
const getNamefetch = idPost => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then(res => {
        /*  console.log(res) */
        return res.json();
      })
      .then(post => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then(res => {
            /*  console.log(res) */
            return res.json();
          })
          .then(user => {
            console.log(
              `${user.name} escribio el post ${idPost} y vive en ${user.address.city}`
            );
          });
      });
  } catch (error) {
    console.log(error);
  }
};
getNamefetch(48);

/*********************************************************************/
