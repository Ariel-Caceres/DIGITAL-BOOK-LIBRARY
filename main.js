
let cajDePortadas = document.querySelector("body main .libros-recomendados .caja-de-portadas")



let link = async () =>{
  let api = await fetch("https://raw.githubusercontent.com/midudev/pruebas-tecnicas/refs/heads/main/pruebas/01-reading-list/books.json")
  let libros = await api.json();
  console.log(libros);
  
  cajDePortadas.innerHTML = "";
  libros.library.forEach(l => {
    cajDePortadas.innerHTML += `<div class="portada"><img src="${l.cover}" alt=""></div>`
  });
}

link()
