interface UsersProps {
    id: number;
    name: string;
    age: number;
    active: boolean;
}

const users: UsersProps[]= [
    {id: 1, name: 'Jefferson', age: 20, active: true},
    {id: 2, name: 'Aluísio', age: 20, active: false},
    {id: 3, name: 'Irlan', age: 30, active: false},
    {id: 4, name: 'Raphael', age: 20, active: true},
];

//b) Utilize o método filter para criar uma lista de usuários ativos.
const usersActive = users.filter(user => user.active === true);
console.log(usersActive);

//c) Utilize o método filter para criar uma lista de usuários com idade maior que 25 anos.
const usersAge = users.filter(user => user.age > 25);
console.log(usersAge);

/*d) A partir do array de usuarios criado anteriormente, use o método map para criar um novo
array que contém apenas os nomes dos usuários. */
const userNames = users.map(user => user.name);
console.log(userNames);

//e) Use o método map para aumentar a idade de todos os usuários em 1 ano.
const increaseUsersAge = users.map(user => (
    {...user, age: user.age + 1}
));
console.log(increaseUsersAge);

/*f) Utilize o método forEach para imprimir o nome de cada usuário e seu status
(ativo/inativo).*/
users.forEach((users) => {console.log(users.name, `Active:{${users.active}}`)});


//g) Utilize o método reduce para calcular a idade total dos usuários.
const calculationAge = users.reduce((total, user) => total + user.age, 0);
console.log('Idade Total: ', calculationAge);

//h) Use o reduce para contar quantos usuários estão ativos.
const calculationUsers = users.reduce((total, user) => {
    if (user.active) {
        return total + 1;
    }
    return total;
}, 0);
console.log('Quantidade de Usuários Ativos: ', calculationUsers);

//i) Use o método find para procurar o primeiro usuário que tenha o nome "João".
const findJoao = users.find((user) => user.name === 'João');
console.log(findJoao);

//j) Use o método find para encontrar o primeiro usuário que esteja inativo.
const firstUserActive = users.find((user) => user.active === true);
console.log(firstUserActive);