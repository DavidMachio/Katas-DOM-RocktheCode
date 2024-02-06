//1.1 Inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement("div")
document.body.appendChild(div)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div")
const parrafo = document.createElement("p")
div2.appendChild(parrafo)
document.body.appendChild(div2)

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement("div")
for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    div3.appendChild(p)
}
document.body.appendChild(div3)

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p = document.createElement("p")
p.innerText = "Soy dinámico"
document.body.appendChild(p)

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2")
h2.innerText = "Wubba Lubba dub dub"
//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul")
for (const app of apps) {
    const li = document.createElement("li")
    li.innerText= app
    ul.appendChild(li)
}
document.body.appendChild(ul)


//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// Obtén una colección de elementos por su clase
let elementosConClase = document.querySelectorAll(".fn-remove-me");

// Convierte la colección en un array para poder recorrerla
let elementosArray = Array.from(elementosConClase);

// Recorre y elimina cada elemento
elementosArray.forEach(function(elemento) {
    elemento.parentNode.removeChild(elemento);
});
//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const primerDiv = document.querySelector("div")
const newP = document.createElement("p")
primerDiv.after(newP)

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let elementos = document.querySelectorAll(".fn-insert-here");
let arrayElementos = Array.from(elementos)
arrayElementos.forEach(function(elemento){
    let insertarP = document.createElement("p")
insertarP.innerText = "Voy dentro"
    elemento.appendChild(insertarP)
})
console.log(elementos)
