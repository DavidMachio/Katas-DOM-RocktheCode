//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".


const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const div = document.querySelector("div");
const ul = document.createElement("ul");
for (const place of places) {
    const li = document.createElement("li");
    li.innerText = place
    ul.append(li)
}
div.append(ul)
