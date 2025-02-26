//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

//função para botão adicionar amigo
function adicionarAmigo(){
let nomeAmigo = document.querySelector('input').value;
if (nomeAmigo == ''){ // caso nome seja vazio, mostrar alert.
    alert('Por favor, insira um nome.');
    limparInput();
}else if(listaAmigos.includes(nomeAmigo)){ //caso a lista ja contenha um nome informado, mostra outro alert
    alert('Nome ja existente, por favor insira um nome diferente.');
    limparInput();
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

