var htmlImage = HTMLImageElement;




class FakeHtmlImage {
    constructor(w, h) {
        // magic!
        console.log('image')
        const nativeImage = new htmlImage(w, h);

        const handler = {
            set: function(obj, prop, value) {
                console.log(obj, prop);
                if (prop === 'src') {
                    console.log('gotcha ' + value);
                }
                return nativeImage[prop] = value;
            },
            get: function(target, prop) {
                console.log('img', target);
                let result = target[prop];
                if (typeof result === 'function') {
                    result = result.bind(target);
                }
                return result;
            }
        };
        const prox = new Proxy(nativeImage, handler);
        // try {
        //     prox[Symbol.toStringTag] = 'HTMLImageElement';
        // } catch(e){}
        // console.log(prox);
        return prox;
    }
}

Object.defineProperty(FakeHtmlImage, 'name', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Image'
});

Object.defineProperty(FakeHtmlImage, 'toString', {
    enumerable: true,
    configurable: false,
    writable: true,
    value: function() {
        return htmlImage.toString();
    }
});

FakeHtmlImage.prototype[Symbol.toStringTag] = htmlImage.prototype.toString();


HTMLImageElement = FakeHtmlImage;

