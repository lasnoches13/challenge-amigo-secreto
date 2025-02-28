//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let Amigos = [];

//1.função para botão adicionar amigo
function adicionarAmigo(){
let inputAmigo = document.getElementById('amigo');
let nomeAmigo = inputAmigo.value;
if (nomeAmigo == ''){ // caso nome seja vazio, mostrar alert.
    alert('Por favor, insira um nome.');
}else if(Amigos.includes(nomeAmigo)){ //caso a lista ja contenha um nome informado, mostra outro alert
    alert('Nome ja existente, por favor insira um nome diferente.');
    limparInput();
}else{
Amigos.push(nomeAmigo);
console.log(Amigos);
limparInput();
inputAmigo.focus();
mostrarAmigosNoHtml();

}}
//2.mostrar lista de amigos adicionados no html
function mostrarAmigosNoHtml(){
    let amigosHtml = document.getElementById('listaAmigos');
    amigosHtml.innerHTML = "";

    for(let i=0; i < Amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = Amigos[i];
        amigosHtml.appendChild(item);
}
}
//3.função limpar input
function limparInput(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}
//4.função sortear amigo
function sortearAmigo(){
    if (Amigos.length === 0){
        alert('Nenhum amigo adicionado');
        return;
    }
let amigoSorteado = Amigos[Math.floor(Math.random() * Amigos.length)];
let resultado = document.getElementById('resultado');
resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
let limparLista = document.getElementById('listaAmigos');
limparLista.innerHTML = "";
}

