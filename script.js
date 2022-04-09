// Efeito maquina de escrever
const titulo = document.querySelector("#nome");

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    console.log(textoArray);

    elemento.innerHTML = "";

    textoArray.forEach((letra, i) => {
        console.log(letra, i);
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 *i)
    })
}

typeWriter(titulo);
typeWriter(document.querySelector("#formacao"));