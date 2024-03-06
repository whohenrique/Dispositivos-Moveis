/*
Defina um type alias para um objeto representando um usuário, que deve conter
nome, idade (opcional) e um array de habilidades (strings). Em seguida, crie um
usuário exemplo.
*/
var userExample = { name: 'João', yearsOld: 25, skills: ['Dev. Mobile', 'Design'] };
console.log(userExample);
/*
Escreva uma função em TypeScript que receba um array de números e retorne um
novo array contendo apenas números pares. Use type annotation para a função e
seus parâmetros.
*/
function getArray(array) {
    return array.filter(function (value) { return value % 2 === 0; });
}
var numbers = [1, 2, 3, 4, 5];
var setNumbers = getArray(numbers);
console.log(setNumbers);
/*
Utilize Union Types para criar uma função que aceite tanto string quanto number
como argumento e retorne o comprimento da string ou o valor ao quadrado se for um
número.
*/
function getStringNumber(value) {
    if (typeof value === "string") {
        console.log('The Value is String', value.length);
    }
    else {
        return Math.pow(value, 2);
    }
}
var numOrStr = 2;
getStringNumber(numOrStr);
var component = { title: "Component Title", width: 300 };
console.log(component.title);
/*
Crie um tipo genérico que represente uma resposta de API, que pode conter uma
propriedade de dados de qualquer tipo e uma propriedade de mensagem que é uma string.
*/
function handleResponse(response) {
    console.log("RESPONSE: ", response.dados);
    console.log("RESPONSE: ", response.message);
}
var apiResponse = {
    dados: "Sucess!",
    message: "Operetaion ok!"
};
handleResponse(apiResponse);
/*
Implemente uma função genérica que receba um array e um valor genérico. A função deve
adicionar o valor ao array e retornar o novo array. Use restrições no tipo genérico para garantir
que ele seja compatível com os itens do array.
*/
function addValueArray(array, value) {
    array.push(value);
    return array;
}
var arrNum = [1, 2, 3];
arrNum = addValueArray(arrNum, 4);
console.log(arrNum);
/*
Desenvolva uma função que utilize Literal Types para aceitar somente algumas strings
específicas como argumentos (por exemplo, 'asc' ou 'desc') e retorne uma mensagem baseada
no valor passado.
*/
function handleMessage(message) {
    if (message === 'asc') {
        console.log('Order ascending!');
    }
    else if (message === 'desc') {
        console.log('Order descending!');
    }
    else {
        console.log('Invalid order parameter!');
    }
}
;
console.log(handleMessage('desc'));
