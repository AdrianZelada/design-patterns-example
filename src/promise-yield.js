function * fetchUser(user){
    user = yield findUser();
    console.log(user);
    user.year = yield findYear(user);
    console.log(user);
    return new Promise((res) =>{
        setTimeout(() => {
            user._isEnd = true;
            res(user)
        },100)
    });
}


function findUser(){
    return new Promise((res) =>{
       // setTimeout(() => {
       //     res({
       //         name: 'Chicho'
       //     })
       // },2000)
        subsUser(res);
    });
}

function subsUser(res) {
    setTimeout(() => {
        res({
            name: 'Chicho'
        })
    },5000)
}

function findYear(user){
    const years = {
        'Chicho':80
    }
    return new Promise((res) =>{
        setTimeout(() => {
            res(years[user.name]);
        },1000)
    });
}



const data = fetchUser({});

// console.log(data.next());

function resolPromis(value){
    data.next(value).value.then((item) => {
        // if(!item.done){
        //     data.next();
        // }
        console.log('item',item)
        if (!item._isEnd) {
            resolPromis(item);
        }
    })
}

resolPromis();