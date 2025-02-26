//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

//função para botão adicionar amigo
function adicionarAmigo(){
let nomeAmigo = document.querySelector('input').value;
if (nomeAmigo == ''){
    alert('Por favor, insira um nome.')
}else{
listaAmigos.push(nomeAmigo);
console.log(listaAmigos);
mostrarAmigo();
limparInput();
}}
//mostrar lista de amigos adicionados
function mostrarAmigo(){
    let campo = document.querySelector('ul');
        campo.innerHTML = listaAmigos;
    }
//função limpar input
function limparInput(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}
//função sortear amigo
function sortearAmigo(){
let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
alert(`O seu amigo secreto é: ${amigoSorteado}`);
limparInput();
listaAmigos = [];
mostrarAmigo();
return amigoSorteado;
}

