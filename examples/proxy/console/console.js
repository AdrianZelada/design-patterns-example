let _emitChannels = ()=>{};
console = new Proxy(console, {
    get: (target, p)=>{
        return function(...args) {
            let stack;
            let path;
            if (p !== 'warn'){
                switch (p) {
                    case 'error':
                        let text = args[0].stack;
                        text = new String(text);
                        let file = JSON.stringify(text.split("\n")[1]);
                        path = file.slice(8,file.length-1);
                        break;
                    default:
                        stack = new Error().stack;
                        path = regex(stack);
                        break;
                }
                printLog(path);
                _emitChannels(path, p,args);
            }
            return target[p].apply(this, args);
        }
    }
});

function regex(stack){
    let regExp = /\(([^)]+)\)/;
    let pathFile = stack.split("\n")[2];
    let reg = regExp.exec(pathFile);
    let path;
    if(reg){
        path=reg[1];
    }else{
        let file = JSON.stringify(pathFile);
        path = file.slice(8,file.length-1);
    }
    return path;
}

function printLog(path,key,args){
    let viewPath = `\n===>>> ${path}`;
    console.warn('\x1b[36m%s\x1b[32m',viewPath);
}

module.exports = (options) => {
    _emitChannels = options.emitChannels
};