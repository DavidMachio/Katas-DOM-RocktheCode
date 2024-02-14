//Basandote en el sighuiete array, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
    "De Mysteriis Dom Sathanas",
    "reign of blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];
const ul = document.createElement("ul");
for (const album of albums) {
    const li = document.createElement("li")
    li.innerText = album
    ul.append(li)    
}
document.body.append(ul)
