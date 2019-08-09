function *fetchUser() {
    const user = yield getData();
    console.log(user);
    const data = yield getData(user);
    console.log(data);
}

function getData(name='Chicho') {
    return{
        name: name
    }
}

const fUser = fetchUser();

console.log(fUser);
console.log('-----------');
console.log(fUser.next());
console.log('-----------');
console.log(fUser.next('btonoes'));
console.log('-----------');
console.log(fUser.next('bccccs'));
