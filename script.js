//console.log() mostra uma informação no console
console.log("Olá, Mundo!");
console.log("6 + 2");

console.log(typeof "Olá, Mundo!") // string
console.log(typeof 22);// number
console.log(typeof 10.5);// number
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// váriavel
// const não pode ter seu valor alterado durante o programa
const nome = "Beatriz";
console.log(nome);

// let pode ter seu valor alterado durante o programa
let idade = 16;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + " anos.");

idade = 17;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`);




// váriavel2
let nome1 = "Arthur";
console.log(nome1);

let peso = "1 kg";
console.log(peso)

nome1 = "Bia";
console.log(nome1)

peso = "2 kg"
console.log(peso)

console.log(`Olá ${nome1}, que tem ${peso}`);

//Métodos de string
const texto = "JavaScript"

//Conta quantos caracteres a string tem
console.log(texto.length)

//Altera todas as letras para maíusculo
console.log(texto.toUpperCase())

//Altera todas as letras para minúsculo
console.log(texto.toLowerCase())

const nome_completo = "Beatriz Nogueira Da Silva"

console.log(nome_completo.includes("Silva")) // true

console.log(10 > 5) // true
console.log(10 < 5) // false
console.log(10 >= 10) // true
console.log(10 <= 5) // false
console.log("10" == 10) // true
console.log("10" === 10) //false
console.log(10 !== 5) // true

const idadePessoa = 17

console.log(idadePessoa >=18) //false
console.log(idadePessoa >= 16) //true

// Coletamos a idade da pessoa
let pessoalIdade = 17;

// Cerificar se a idade é maior ou igual a 18
if(pessoalIdade >= 18){
// Se maior ou igual a 18 então é ela maior de idade
console.log("Já pode ser preso HAHAHAH!")
}else{
       // Senão, então ela é menor de idade
       console.log("Não vai pra a balada!😂😂😂")
}


// Coletamos a idade da pessoa
let idadeVotacao = 16 
// Verificar se a pessoa  é maior de 70
if(idadeVotacao >= 70){
    console.log("Você não é obrigada a votar!")
}else if (idadeVotacao >= 18){
    // Senão a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
}else if(idadeVotacao >= 16){
    // Senão a idade da pesosa for maior ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queira pode!")
}else {
    // Senão for memhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}

//Váriavel3

const nome_completo1 = "Arthur Miguel Nogueira Nunes"

console.log(nome_completo1== "Arthur Miguel Nogueira Nunes") //true

console.log(nome_completo1== "Arthur Miguel Nogueira nunes") // false


// ------------- liçao - Entrega, Atividade1 "Aprovação Escolar" -------------
//Váriavel
// A média 7
let NotaAlunos = 7;

// Certificar se a média é maior ou igual a 7
if(NotaAlunos >=7){
 //Se a maior ou igual a 7 então acertou
 console.log("Aprovado")
}else{
    // Senão, então informe que foi "reprovado"
    console.log("Reprovado")
}

// ------- Atividade2 "Comparação de dois números" ---------
//váriavel
// informar o número "7" e "7" qual deles é o maior. 

let Comparação1 = 7
let Comparação2 = 7
// Verificar se o número é maior de 7, se for igual é empate.
if(Comparação1>Comparação2)
{
  console.log("Comparação1 e maior q 2")  
}else if(Comparação2 > Comparação1){
    console.log("Número 2 é maior que 1")
}else{
    console.log("Números iguais")
}




//-----Atividade3 "Verificação de senha"

let senha = "abacati"
//Se a senha esta errada.
if(senha == "senai123")
{
    console.log("Acesso autorizado")
}else{
    console.log("Senha incorreta")
}


//------Atividade4 "Classificação de temperatura"

// Receba uma temperatura em graus Celsius e classifique-a:
// Abaixo de 18 °C: "Frio".
// De 18 °C até 27 °C: "Agradável".
// Acima de 27 °C: "Quente".

let graus = "30"
//para saber se a temperatura é quente, frio ou agradavél.
if(graus <18){
    console.log("Frio")
}else if(graus >=18){
    console.log("Agradavél")
}else{
    console.log("Quente")
}


//05 — Classificação de nota-Receba uma nota de 0 a 10:
let nota=10
if(nota>=9){
    console.log("excelente")
}else if(nota>=7){
console.log("bom")
} else if(nota>=5){
    console.log("regular")

} else{
    console.log("Insuficiente")
}

//06 — Dia da semana-Receba um número inteiro de 1 a 7 e exiba o dia da semana correspondente. Considere **1 como domingo** e **7 como sábado**. Para qualquer outro número, exiba "Dia inválido".

const data = 7

if (data ==1){
    console.log("segunda")
    
}else if(data==2){
    console.log("terça")
}else if(data==3){
    console.log("quarta")
}else if(data==4){
    console.log("quinta")
}else if(data==5){
    console.log("sexta")
}else if(data==6){
    console.log("sábado")
}else if(data==7){
    console.log("domingo")
}

let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

// && significa "e"

if(idadeDirigir >= 18 && temCNH == true && temCarro == true){
console.log("Você pode dirigir!")
}else{
    console.log("Você Não pode dirigir!")
}

let ehProfessor = false;
let ehAluno = false;
   
// "||" (oque ta dentro das aspas okk?) significa "ou"

if(ehprofessor == true || ehAluno == true){
    console.log("Você tem direito a meia-entrada!")
}else{
    console.log("você não tem direito a meia-entrada!")
}



// ---------------------------------------------------------lição2---------------------------------------------------------

Atividade1 — Número dentro do intervalo 10 e 50

let numero1 = 28;
if(numero1 > 10 && numero1 < 50){
    console.log("o número está no intervalo entre 10 e 50");
}else{
    // Caso ao contrário, informe que está fora do intervalo.
    console.log("o número está fora do intervalo entre 10 e 50");
}



Atividade2 -  Elegibilidade para estágio

let numero2 = 19;
if(numero2 > 16 && numero2 <24){
    console.log("o número está no intervalo entre 16 e 24");
}else{
    console.log("o número está fora do intervalo entre 16 e 24");
} 


Atividade3 - Frete grátis

     
let valorCompra = 152;
let ehAssinante = true;
if(valorCompra >= 200 || ehAssinante == true){
    console.log("Você tem direito a frete grátis!")
}else{
    console.log("Você não tem direito a frete grátis!")
}



Atividade4 - Dia de descanso

const dia = Quinta 

if(dia "sabado" || dia == const ){
    console.log("Fim de semana")
}else{
    console.log("Dia útil")
}



Atividade5 — Promoção especial

let valorCompra1 = 200;
let assinante2 = true;
let cupomValido = false;
let valorFINAL = valorCompra1 * 0.85

if (valorCompra >= 150 && assinante2 == true  || cupomValido == true){
    console.log(`o desconto foi aplicado e o valor final é ${valorFINAL}`)

}else {
    console.log(`o desconto não foi aplicado e o valor final é ${valorCompra1}`)
}









