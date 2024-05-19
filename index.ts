const pi=3.14;

let numero: number = 10;

let nome: string = 'Mariana';

let correta: boolean = true;    // true ou false

let resultado= numero * pi;
console.log(nome);

// Tipagem de numeros
const numeros: number[] = [1, 2, 3, 4, 5];
// or versão mais antiga do ts
const numeros2: Array<number> = [1, 2, 3, 4, 5];

const nomes: string[] = ['Mariana', 'João', 'Ana'];

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade= idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);

function chooseNumber(
    numero1: number,
    numero2: number,
    criterio?: "greater" | "lower"
){
switch(criterio){

    //Type Aliases
case "greater":
    return numero1 > numero2 ? numero1 : numero2;

case "lower":
        return numero1 < numero2 ? numero1 : numero2;
        default:
        const numeroAleatorio = Math.random();
if (numeroAleatorio >= 0.5) return numero1;
return numero2;

}

}
const numeroEscolhido= chooseNumber(10, 20, "lower");
console.log("numeroEscolhido:",numeroEscolhido);

//Utility types: a ideia deles é permitir que voce crie novos tipos a partir de outros tipos

type Person = {
    nome: string;
    idade: number;
    nacionalidade: string;
};  
type PersonParcial = Partial<Person>; //todos os campos são opcionais

type PersonRequired = Required<Person>; //todos os campos são obrigatórios

type PersonReadonly = Readonly<Person>; //todos os campos são somente leitura

type PersonPick = Pick<Person, "nome" | "idade">; //escolhe quais campos você quer

type PersonExclude = Exclude<Person, "nacionalidade">; //exclui um campo

type PersonExtract = Extract<Person, {nome: string}>; //extrai um campo

type Pessoas = Record <string,Person>;

const pessoas: Pessoas = {
"123.456.123-00": {
nome: "Mariana",
idade: 23,
nacionalidade: "brasileira",
},
"123.456.444-00": {
nome: "Mariana",
idade: 23,
nacionalidade: "brasileira",
},

}

