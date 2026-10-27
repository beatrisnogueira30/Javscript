const motorista = {
    idade: 18,
    temCNH: true,
    temCarro: false
}

console.log(motorista)

motorista.idade = motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista)



//---------------------------------- lição1 -----------------------------
// 01- Dados de um produto



const produto = {
    Nome: "Monstros",
    Marca: "BBshikle",
    Preço: 180,
    disPonivel: true,

}

console.log(produto)

produto.Nome = produto.Nome += "Monstros";
produto.Marca = produto.Marca = "BBshikle"
produto.Preço = produto.Preço = 180;

console.log(produto.Nome)
console.log(produto.Preço)


//----------------------------- laço de repetição  --------------------------
for( let contador = 0; contador <= 2; contador++){
    console.log(contador)
}


// --------------- Lição02 --------------------------------------------------
// 02- Tabuada

let numero = 67;

for( let contador = 1; contador <= 10; contador++){
    console.log(`${contador} x ${numero} = ${contador * numero}`)
}


let contador = 1;
let numeroWhile = 5;

while(contador <= 10){
    console.log(contador * numeroWhile)
    contador++;

}


// -------------------------------lição3---------------------------------------
// 03- Contagem Regressiva

let number = 0

while(number > 0){
    console.log( `while: ${number}`);
    number -= 2
}

let number2 = 0

do{
    console.log(`do while: ${number2}`)
    number2 -= 2
}while(number2 > 0);



// ------------------------------------lição4----------------------------------------
// 04- Contagem regressiva


let number3 = 10

while(number3 > 10){
    console.log(`while: ${number3}`);
    number -= 1
}

let number4 = 10

do{
    console.log(`do while: ${number4}`)
    number4 -= 1
}while(number4 >= 1);

console.log("Fim da Contagem")


// listas
const frutas = ["Maçã", "Banana", "Uva", "Laranja"]

frutas[0] = "pêra";

console.log(frutas)

console.log(frutas[0]);
console.log(frutas[2]);

console.log(frutas.length);

// esse push adicona no final se colocar
frutas.push("Manga", "Mexerica");

console.log(frutas);

// esse tira o ultimo  da lista
frutas.pop()

console.log(frutas)


// organizar do maior para o menor do maior, ou em ordem alfabética

frutas.sort()

console.log(frutas)

// Funções

function somar(numero1, numero2){
      return numero1 + number2;
}

const soma = somar(1,1);
console.log(soma)

console.log(somar(6,7)),


function dividir(numero1, numero2){
    console.log(`A soma dos números é ${numero1} / ${numero2} = ${numero1/numero2}`)
}


// ----------------------------lição5-----------------------------------------
// 01- Adiconando elementos


const material = ["caneta", "lápis", "marca-texto", "caderno"]



console.log(material);

material.push("estojo", "borracha");

console.log(material)

















