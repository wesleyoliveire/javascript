//Elementos
/*
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Funçãos
function handlekeyUp(e) {
 if (e.key === 'Enter') {
   lista.innerHTML += '<li>' + input.value + '</li>';
 }
}


// Eventos
input.addEventListener('keyup',handlekeyUp);
*/

// function soma(numero1, numero2){

//    const somaDosNumero = numero1 + numero2;
//    console.log(somaDosNumero)
// }

// soma(20,30)
// soma(50,20)

// AFTER significa = Depois
// BEFORE significa = antes

/*
function clicou(){
   console.log('clicou no botão');

}
let botao = document.querySelector('.botao');
botao.addEventListener("click", () => {
   clicou();
})*/
//  const somar = (x, w) => {
//    return x + w
//  }
// let somaToria = somar(10,40)
// console.log(`A somatoria é: ${somaToria}`)

// const sobrenome = (sob) =>{
//    let completo = "wesley " + sob
//    return completo
// }
// console.log("o meu sobrenome é: " + sobrenome (" oliveira"))

// let lista = ["wesley", 4, "blabla", 3, ["ww", 22]]
// let segundo = (lista[4])
// console.log(segundo[0])

// let carros = ["bmw", "ferrari", "mercedes"];
// let x = 1;
// console.log(`1. ${carros[x]}`);

// carros[2] = "camaro";
// console.log("2. lista com camaro");
// console.log(carros);

// carros.push("volvo");
// console.log("3.lista com volvo");
// console.log(carros);

// // carros.push('volvo')

// console.log(`4 item no array:`);
// console.log(carros.length);

// let personagem = {
//   nome: "wesley",
//   idade: 27,
//   pais: "brasil",
//   caracteristicas: {
//     forca: 20,
//     magia: 30,
//     atack: 100,
//   },
// };
// console.log(`${personagem.nome} tem ${personagem.idade} anos`);
// console.log(`${personagem.caracteristicas.magia}`);

// let pessoa = {
//   nome: "wesley",
//   sobrenome: "oliveira",
//   idade: 30,
//   nomecompleto: function () {
//     return this.nome + " " + this.sobrenome;
//   },
// };

// console.log(pessoa.nomecompleto())

// for(let n = 0; (n < 11); n++){
//    console.log(n)
// }

// let frutas = ["melao", "laranja", "limao", "pera"];
// frutas.push("melancia");

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for(let i = 0; i < frutas.length; i++){
//    console.log(frutas[i]);
// }

//  let n = 1;

// while(n <= 100){
//    console.log(n);
//   (n++)
// }

// for(let e = 1; e <= 10; e ++){
//    console.log(e)
// }

// let numero = 0;
// while(numero < 10){
//    console.log(`numero da vez é: ${numero}`)
//     numero++
// }

// for(let g = 0; g < 10; g++){
//    console.log(`contar ate o 9: ${g}`);
// }

// let c = 1
// while(c <= 100){
//    console.log(c)
//    c++
// }

// function clicou() {
//   const teste = document.querySelector("#teste");
//   const ul = teste.querySelector("ul");

//   let newUI = document.createElement("ul");


// for(let i = 0;  i < 5; i++ ){
// let newLi = document.createElement("li");

// newLi.innerHTML = "item add lista" + i;
// newUI.append(newLi)
// }

// ul.after(newUI);
// };


// function clicou() {
//   let li = document.querySelectorAll(".cor")

// }


// let idade = 0;

// document.body.innerText = "Minha idade é: " + idade;

// Elementos
const input = document.querySelector("input");
const lista = document.querySelector("ul");
// funções
function Apertou(e) {
  if (e.key === "Enter") {
    // Adicionar alemento (li) na lista
    const newLi = document.createElement("li");
    newLi.innerHTM = input.value;
    lista.appendChild(newLi);

    // Limpar o campo de texto
    input.value = "";
  }

}

input.addEventListener("keyup", Apertou);