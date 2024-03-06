/*
Defina um type alias para um objeto representando um usuário, que deve conter
nome, idade (opcional) e um array de habilidades (strings). Em seguida, crie um
usuário exemplo.
*/

type User = { 
    name: string; 
    yearsOld?: string | number;  
    skills: string[]; 
};

const userExample: User = { name: 'João', yearsOld: 25, skills: ['Dev. Mobile', 'Design']};
console.log(userExample)

/*
Escreva uma função em TypeScript que receba um array de números e retorne um
novo array contendo apenas números pares. Use type annotation para a função e
seus parâmetros.
*/

function getArray(array: number[] ): number[] {
    return  array.filter((value) => value %  2 === 0);
}

const numbers = [1, 2, 3, 4, 5];
const setNumbers = getArray(numbers);
console.log(setNumbers);

/*
Utilize Union Types para criar uma função que aceite tanto string quanto number
como argumento e retorne o comprimento da string ou o valor ao quadrado se for um
número.
*/

function getStringNumber(value: string | number) {
    if(typeof value === "string"){
        console.log('The Value is String', value.length);
    } else{
        return value ** 2;
    }
}  

let  numOrStr = 2;
getStringNumber(numOrStr);

/*
Escreva um Type Alias que represente um objeto com propriedades opcionais para
configuração de um componente (por exemplo, título, largura e altura). As propriedades devem
ter tipos apropriados. 
*/

type getObject = {
    title?: string;
    width?: number;
    heigth?: number;
};

let component: getObject = {title:"Component Title", width: 300};
console.log(component.title);

/* 
Crie um tipo genérico que represente uma resposta de API, que pode conter uma
propriedade de dados de qualquer tipo e uma propriedade de mensagem que é uma string. 
*/

function  handleResponse<T, M>(response:{dados: T, message:M}){
    console.log("RESPONSE: ", response.dados);
    console.log("RESPONSE: ", response.message);
}

let apiResponse =  {
    dados : "Sucess!",
    message: "Operetaion ok!"
}

handleResponse(apiResponse)

/*
Implemente uma função genérica que receba um array e um valor genérico. A função deve
adicionar o valor ao array e retornar o novo array. Use restrições no tipo genérico para garantir
que ele seja compatível com os itens do array.
*/

function addValueArray<T>(array: T[], value: T): T[] {
    array.push(value);
    return array
}
let arrNum = [1, 2, 3];
arrNum = addValueArray(arrNum, 4);
console.log(arrNum);

/*
Desenvolva uma função que utilize Literal Types para aceitar somente algumas strings
específicas como argumentos (por exemplo, 'asc' ou 'desc') e retorne uma mensagem baseada
no valor passado.
*/

function handleMessage(message: 'asc' | 'desc') {
    if(message === 'asc'){
        console.log('Order ascending!')
    } else if(message === 'desc'){
        console.log('Order descending!')
    } else{
        console.log('Invalid order parameter!')
    }
};
console.log(handleMessage( 'desc')); 

/*
Implemente uma função que receba um objeto como parâmetro e use o operador de
espalhamento (spread) para adicionar uma nova propriedade ao objeto. A função deve ser
tipada corretamente e demonstrar o uso de propriedades opcionais.
*/
