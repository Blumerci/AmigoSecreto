


let amigos = [];

function agregarAmigo(){
    let IngresaAmigo = document.getElementById ("amigo");
    let nombreAmigo = IngresaAmigo.value;

    if (!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
    amigos.push(IngresaAmigo.value);
    IngresaAmigo.value = "";
    IngresaAmigo.focus();
    mostrarListaAmigos();
}   

function mostrarListaAmigos(){
    let listaAmigos = document.getElementById ("listaAmigos");
    listaAmigos.innerHTML= "";

    for(let i=0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}    

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigos [Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

}