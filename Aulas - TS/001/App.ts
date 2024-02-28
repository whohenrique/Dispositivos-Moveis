let nome: string = "Henrique";
let idade: number = 21;
let estuda: boolean = true;
let trabalha: any = "false";

console.log(`Olá ${ nome } você tem ${ idade } anos e está estudando? ${ estuda }`);

function soma(x: number, y: number) {
    return x + y
}

console.log(soma(5, 8));