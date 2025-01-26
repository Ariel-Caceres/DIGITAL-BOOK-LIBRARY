
let cajDePortadas = document.querySelector("body main .libros-recomendados .caja-de-portadas")



let link = async () =>{
  let api = await fetch("https://raw.githubusercontent.com/Ariel-Caceres/DIGITAL-BOOK-LIBRARY/refs/heads/master/libros.json")
  let libros = await api.json();
  console.log(libros);
  while(cajDePortadas.length < 4){

    cajDePortadas.innerHTML = "";
    libros.library.forEach(l => {
      cajDePortadas.innerHTML += `<div class="portada"><img src="${l.cover}" alt=""></div>`
    });
  }
}

link()
