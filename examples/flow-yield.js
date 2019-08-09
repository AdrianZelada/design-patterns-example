

function exe(cb, data) {
    console.log(data);
    const res = cb(data);
    console.log('res');
    console.log(res);
    return res
    // return yield * cb(data);
    // yield * cb(data);
}
function * generateFlow(flow){
    // user = yield findUser();
    // console.log(user);
    // user.year = yield findYear(user);
    // console.log(user);
    // return new Promise((res) =>{
    //     setTimeout(() => {
    //         user._isEnd = true;
    //         res(user)
    //     },100)
    // });
    let user = {};
    for (let i = 0; i < flow.length; i++) {
        // console.log(flow[i])
        const cb = fn[flow[i]];
        user = yield *cb(user);
        console.log("yield ",user);
    }
    return user;
    // flow.forEach((item) => {
    //     const cb = fn[item];
    //     yield* exe(cb,user);
    // });
}

const fn = {
    step1:function * (data= {}) {
        console.log("step1");
        return yield {
            flow: data.flow ? `${data.flow}-step1`: 'step1'
        };
    },
    step2:function* (data= {}) {
        console.log("step2");
        return yield  {
            flow: data.flow ? `${data.flow}-step2`: 'step2'
        };
    },
    step3:function * (data= {}) {
        console.log("step3");
        return yield  {
            flow: data.flow ? `${data.flow}-step3`: 'step3'
        };
    },
    step4:function * (data= {}) {
        console.log("step4");
        return yield  {
            flow: data.flow ? `${data.flow}-step4`: 'step4'
        };
    },
};


const control = generateFlow(["step4","step2","step3","step1"]);

const q = control.next().value;
const w = control.next(q).value;
const e = control.next(w).value;
const r = control.next(e).value;
const t = control.next(r).value;

console.log(t);
// control.next();
// control.next();