console.log("hello world");

// voglio accedere al famoso localstorage
// per mettergli dentro delle informazioni persistenti

// crea elemento nella memoria del browser
function setLocalStorage() {
// chiave , valore
localStorage.setItem("nome", "andrea");
}

function setParagraph() {
document.getElementById("paragraph").innerHTML = localStorage.getItem("nome");
}

// dato l'elemento nella memoria del browser, stampato data la chiave
console.log(localStorage.getItem("nome"));

let persona = [
{
nome: "andrea",
cognome: "saggio",
eta: 27,
},
{
nome: "asd",
cognome: "asd",
eta: 27,
},
];

function setObject() {
// NON VA, LUI NEL VALUE VUOLE UNA STRINGA
// localStorage.setItem("persona" , persona )
// DA OGGETTO JSON A STRINGA
localStorage.setItem("persona", JSON.stringify(persona));
}

let personJSON = "";

function getObject() {
let person = localStorage.getItem("persona");
console.log(person);
personJSON = JSON.parse(person);
console.log(personJSON);

//L'OGGETTO PERSONJSON È UNA LISTA DI OGGETTI,
// E SE VOLESSI GENERARE PARAGRAPH PER OGNI ELEMENTO DELLA LISTA
// E COME SE FA?!

for (let i = 0; i < personJSON.length; i++) {
let p = document.createElement("p");
p.innerHTML = personJSON[i].cognome;
console.log(p);

// VUOLE IL NUOVO FIGLIO INSERITO COSI
document.getElementById("listaObject").appendChild(p);

// SE P È UN ELEMENTO HTML NON LO VUOLE COSI, PERCHÈ NON SA INTERPRETARLO
//document.getElementById("listaObject").innerHTML = p;
}

document.getElementById("paragraphJson").innerHTML = personJSON[0].cognome;
}

window.onload = () => {
document.getElementById("paragraph").innerHTML = localStorage.getItem("nome");
};