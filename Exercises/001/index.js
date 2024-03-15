var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [
    { id: 1, name: 'Jefferson', age: 20, active: true },
    { id: 2, name: 'Aluísio', age: 20, active: false },
    { id: 3, name: 'Irlan', age: 30, active: false },
    { id: 4, name: 'Raphael', age: 20, active: true },
];
//b) Utilize o método filter para criar uma lista de usuários ativos.
var usersActive = users.filter(function (user) { return user.active === true; });
console.log(usersActive);
//c) Utilize o método filter para criar uma lista de usuários com idade maior que 25 anos.
var usersAge = users.filter(function (user) { return user.age > 25; });
console.log(usersAge);
/*d) A partir do array de usuarios criado anteriormente, use o método map para criar um novo
array que contém apenas os nomes dos usuários. */
var userNames = users.map(function (user) { return user.name; });
console.log(userNames);
//e) Use o método map para aumentar a idade de todos os usuários em 1 ano.
var increaseUsersAge = users.map(function (user) { return (__assign(__assign({}, user), { age: user.age + 1 })); });
console.log(increaseUsersAge);
/*f) Utilize o método forEach para imprimir o nome de cada usuário e seu status
(ativo/inativo).*/
users.forEach(function (users) { console.log(users.name, "Active:{".concat(users.active, "}")); });
//g) Utilize o método reduce para calcular a idade total dos usuários.
var calculationAge = users.reduce(function (total, user) { return total + user.age; }, 0);
console.log('Idade Total: ', calculationAge);
//h) Use o reduce para contar quantos usuários estão ativos.
var calculationUsers = users.reduce(function (total, user) {
    if (user.active) {
        return total + 1;
    }
    return total;
}, 0);
console.log('Quantidade de Usuários Ativos: ', calculationUsers);
//i) Use o método find para procurar o primeiro usuário que tenha o nome "João".
var findJoao = users.find(function (user) { return user.name === 'João'; });
console.log(findJoao);
//j) Use o método find para encontrar o primeiro usuário que esteja inativo.
var firstUserActive = users.find(function (user) { return user.active === true; });
console.log(firstUserActive);
